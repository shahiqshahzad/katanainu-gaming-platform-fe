import { useRouter } from "next/router";
import { Loader } from "../common/Icons";
import React, { useEffect, useState } from "react";
import style from "../../styles/dashboard/index.module.css";
import styles from "../../styles/tournament-overview/index.module.css";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { tournamentMatches } from "../../utils/api/tournamentModule";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

const CustomSeed = ({ seed }) => {
  return (
    <Seed>
      <SeedItem className={styles.seed_wrap}>
        <div
          className={`flex items-center justify-center h-[200px] w-[300px] ${styles.clipped_div}`}
        >
          <SeedTeam
            className={`flex flex-col mb-10 gap-2 ${
              seed?.winner?._id !== seed?.teamA?._id && "opacity-50"
            }`}
          >
            <Image
              src={seed?.teamA?.teamImage}
              height={56}
              width={56}
              className={`rounded-full w-12 h-12 ${
                seed?.teamA?._id === seed?.winner?._id
                  ? "border-4 border-green-500"
                  : !seed?.winner
                  ? ""
                  : "border-4 border-red-500"
              }`}
              alt="Team Image"
              layout="fixed"
            />
            <Link
              href={`/profile/team?id=${seed?.teamA?.teamLeader}`}
              className="font-bebas-neue uppercase tracking-wider"
            >
              {seed?.teamA ? seed?.teamA?.teamName : "TBD"}
            </Link>
          </SeedTeam>
          <div className="flex flex-col mb-10 gap-2 font-satoshi-light">
            <span className="p-2 rounded-full bg-[#44395e] text-[10px] tracking-wider">
              Round {seed?.round}
            </span>
            <span className="text-[#6D5DD3] font-bebas-neue text-[24px]">
              VS
            </span>
            <span className="text-[10px] text-[#8F9DAC] tracking-wider">
              {seed?.startTime && format(parseISO(seed?.startTime), "d MMMM")}
            </span>
          </div>
          <SeedTeam
            className={`flex flex-col mb-10 gap-2 ${
              seed?.winner?._id !== seed?.teamB?._id && "opacity-40"
            }`}
          >
            <Image
              src={seed?.teamB?.teamImage}
              height={56}
              width={56}
              className={`rounded-full w-12 h-12 ${
                seed?.teamB?._id === seed?.winner?._id
                  ? "border-4 border-green-500"
                  : !seed?.winner
                  ? ""
                  : "border-4 border-red-500"
              }`}
              alt="Team Image"
              layout="fixed"
            />
            <Link
              href={`/profile/team?id=${seed?.teamsB?.teamLeader}`}
              className="font-bebas-neue uppercase tracking-wider"
            >
              {seed?.teamB ? seed?.teamB?.teamName : "TBD"}
            </Link>
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const BracketsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = tournamentMatches(id);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (data) {
      setMatches(data?.data);
    }
  }, [data]);

  const totalTeams =
    matches?.length > 0 ? matches[0]?.tournamentId?.maxTeams : 0;
  const totalRounds = Math.ceil(Math.log2(totalTeams));

  const rounds = matches?.reduce((acc, match) => {
    const roundIndex = match?.round - 1;
    const roundTitle =
      match?.roundType === "Final"
        ? "Final"
        : match?.roundType === "Semi Final"
        ? "Semi Final"
        : `Round ${match?.round}`;

    if (!acc[roundIndex]) {
      acc[roundIndex] = { title: roundTitle, seeds: [] };
    }

    const seed = match;

    acc[roundIndex].seeds.push(seed);

    return acc;
  }, []);

  for (let i = 0; i < totalRounds; i++) {
    if (!rounds[i]) {
      const roundTitle =
        i === totalRounds - 1
          ? "Final"
          : i === totalRounds - 2
          ? "Semi Final"
          : `Round ${i + 1}`;
      rounds[i] = { title: roundTitle, seeds: [] };
    }
  }

  for (let i = 1; i < totalRounds; i++) {
    const seedsCount = rounds[i - 1].seeds.length / 2;
    while (rounds[i].seeds.length < seedsCount) {
      rounds[i].seeds.push({
        id: `tbd-${i}-${rounds[i].seeds.length + 1}`,
        date: "",
        teams: [{ name: "TBD" }, { name: "TBD" }],
      });
    }
  }

  return (
    <div className="p-10 w-full overflow-x-scroll">
      <h1 className={`font-bebas-neue ${style.headingStyle}`}>
        <span>Brackets</span>
      </h1>
      <div className="mt-5">
        {isLoading ? (
          <div className="flex justify-center w-full">
            <Loader color="#faf089" />
          </div>
        ) : (
          <>
            {rounds?.length === 0 ? (
              <div>
                <h1 className="text-center font-satoshi-bold text-xl">
                  No brackets yet
                </h1>
                <p className="text-center text-neutral-tertiary">
                  Brackets will show when tournament starts
                </p>
              </div>
            ) : (
              <div>
                <Bracket
                  rounds={rounds}
                  renderSeedComponent={CustomSeed}
                  mobileBreakpoint={0}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BracketsPage;
