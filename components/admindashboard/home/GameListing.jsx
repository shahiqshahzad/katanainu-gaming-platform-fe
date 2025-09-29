import { useEffect, useState } from "react";
import { deleteGame, getAllGames } from "../../../utils/api/gamesModule";
import { useGames } from "../../../store/store";
import { ScrollLoader } from "../../common/Icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiOutlineDelete } from "react-icons/ai";
import EditGame from "./EditGame";

export default function GameListing() {
  const [page, setPage] = useState(1);
  const { games, setGames } = useGames();
  const { data, isLoading, refetch } = getAllGames(page);
  const updatePage = () => {
    if (page !== data?.data?.totalPages) setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (data) {
      if (page === 1) {
        setGames(data?.data?.documents);
      } else {
        if (data) {
          if (page === 1) {
            setGames(data?.data?.documents);
          } else {
            data?.data?.documents.forEach((newGame) => {
              const existingGameIndex = games.findIndex(
                (game) => game?._id === newGame?._id
              );
              if (existingGameIndex !== -1) {
                games[existingGameIndex] = newGame;
              } else {
                games.push(newGame);
              }
            });
            setGames(games);
          }
        }
      }
    }
  }, [data, refetch]);
  const findPage = (gameId) => {
    const index = games?.findIndex((game) => game._id === gameId);
    const page = Math.ceil((index + 1) / 30);
    setPage(page);
  };
  const deleteGameMutation = deleteGame();
  const handleDeleteGame = (gameId) => {
    deleteGameMutation.mutate(gameId);
    findPage(gameId);
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <ScrollLoader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={games?.length ? games?.length : 0}
          next={updatePage}
          hasMore={
            data?.data?.currentPage === data?.data?.totalPages ? false : true
          }
          loader={
            isLoading && (
              <div className="flex justify-center items-center">
                <ScrollLoader />
              </div>
            )
          }
          endMessage={
            games?.length > 0 && (
              <p className="text-center my-3">No more games to show.</p>
            )
          }
        >
          {games?.length === 0 ? (
            <p className="text-center my-3">No games found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 w-full mt-5">
              {games?.map((game, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-white md:flex-col bg-[#201F25] p-2 rounded-lg overflow-hidden w-full"
                >
                  <div className="flex justify-end w-full mb-2 gap-2">
                    <EditGame content={game} findPage={findPage} />
                    <button
                      className="text-red-600"
                      onClick={() => handleDeleteGame(game?._id)}
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </div>
                  <img
                    src={game?.gameImage}
                    className="w-24 md:w-full h-auto lg:h-44 2xl:h-48"
                  />
                  <p className="font-bold text-md lg:text-lg mt-2">
                    {game?.gameName}
                  </p>
                  <p className="font-bold text-[#838091]">[{game?.year}]</p>
                </div>
              ))}
            </div>
          )}
        </InfiniteScroll>
      )}
    </>
  );
}
