import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../../utils/api/interceptor";
import API_END_POINTS from "../../utils/api/api_endpoints";
import styles from "../../styles/dashboard/index.module.css";

// css
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const TopGames = () => {
  const { isLoading, data: games } = useQuery({
    queryKey: ["gamesWithoutPagination"],
    queryFn: () => axios.get(`${API_END_POINTS.GET_ALL_GAMES}`),
    refetchOnWindowFocus: false,
  });

  return (
    <div className={`mt-20 relative`}>
      <h1 className={`font-bebas-neue mb-10 ${styles.headingStyle}`}>
        Top <span>games</span>
      </h1>
      {games?.data?.data?.documents?.length === 0 ? (
        <p className="mt-3 text-center">No games found</p>
      ) : (
        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 5,
            gap: 16,
            pagination: false,
            breakpoints: {
              1076: {
                perPage: 4,
              },
              700: {
                perPage: 3,
              },
              400: {
                perPage: 2,
              },
            },
          }}
        >
          {games?.data?.data?.documents?.map((game, index) => (
            <SplideSlide key={index}>
              <div className={`${styles.gamebox} rounded-lg py-6`}>
                <div className={`${styles.gameboxinner} mx-auto`}>
                  <img src={game?.gameImage} className="w-full h-20" alt="" />
                  <h1 className="mt-4 font-bebas-neue">{game?.gameName}</h1>
                  <p className="font-bebas-neue mt-2">7.9</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};
