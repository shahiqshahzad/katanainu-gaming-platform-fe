import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const GeneralAnalyticsBanner = () => {
  return (
    <div>
      <div
        className={`flex items-center justify-between ${styles.GeneralAnalyticsBannertop}`}
      >
        <img src="/images/general-analytics/heading.svg" alt="" />
        <img src="/images/general-analytics/general-heading-2.svg" alt="" />

        <div
          className={`flex ${styles.generalanalyticssearch} px-4 rounded-full h-14 items-center`}
        >
          <img src="/images/general-analytics/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 pl-2 bg-transparent outline-none pr-2 h-full font-satoshi-regular"
          />
          <button className={`rounded-full h-10 mr-2`}>Category</button>
          <button className={`rounded-full h-10`}>Video</button>
        </div>
      </div>

      <div className={`${styles.realtimebox} rounded-xl  mt-10 p-10`}>
        <h1 className={`font-bebas-neue`}>Real-time Users Active</h1>

        <div className="grid grid-cols-4 mt-6 gap-7">
          <div
            className={`${styles.updatePayment} flex  px-6 flex-col justify-center`}
          >
            <div className={`flex items-start justify-between`}>
              <div>
                <h1 className={`font-satoshi-bold`}>687</h1>
                <p className={`font-satoshi-medium mt-2`}>Views per minute</p>
              </div>
              <div
                className={`w-10 h-10 rounded flex items-center justify-center`}
              >
                <p className={`font-satoshi-bold`}>6%</p>
              </div>
            </div>
            <p className="mt-14 mb-4">Update your payout method in settings</p>
            <img src="/images/general-analytics/graph-purple.svg" alt="" />
          </div>
          <div
            className={`${styles.earningchart} flex items-center col-span-2 rounded-xl px-8 `}
          >
            <div className="flex flex-col justify-between">
              <h1 className={`font-bebas-neue`}>400</h1>
              <h1>300</h1>
              <h1>200</h1>
              <h1>100</h1>
              <h1>00</h1>
            </div>

            <div className={`flex-1 flex items-start ml-4`}>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "20%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "30%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "10%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "50%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "25%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "80%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
              <div
                className={`${styles.chartbar} mr-3 flex items-end  rounded-xl flex-1`}
              >
                <span
                  style={{ height: "67%" }}
                  className="block rounded-xl w-full"
                ></span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.earningmonth} rounded-xl flex py-11  px-6 flex-col justify-between relative`}
          >
            <img
              src="/images/general-analytics/chart-round.svg"
              className="absolute bottom-14 left-1/2 -translate-x-2/4 transform"
              alt=""
            />
            <h1 className={`font-satoshi-bold`}>Earning this month</h1>
            <p className={`font-satoshi-bold text-center`}>456</p>
            <button className="h-14 rounded-xl font-satoshi-medium">
              Withdraw All Earning
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-4 mt-6 gap-7 ${styles.linebargrid}`}>
          <div className={`${styles.graphbox} rounded-xl px-5 py-4 pb-1`}>
            <div className={`flex items-center justify-between`}>
              <h1 className={`font-satoshi-bold`}>Users</h1>
              <img src="/images/general-analytics/dots.svg" alt="" />
            </div>
            <div className={`flex mt-1 items-center justify-between`}>
              <h2 className={`font-dmsans`}>1.5M+</h2>
              <img src="/images/general-analytics/graph.svg" alt="" />
            </div>
          </div>
          <div className={`${styles.graphbox} rounded-xl px-5 py-4 pb-1`}>
            <div className={`flex items-center justify-between`}>
              <h1 className={`font-satoshi-bold`}>Cliecks</h1>
              <img src="/images/general-analytics/dots.svg" alt="" />
            </div>
            <div className={`flex mt-1 items-center justify-between`}>
              <h2 className={`font-dmsans`}>1247K</h2>
              <img src="/images/general-analytics/graph.svg" alt="" />
            </div>
          </div>
          <div className={`${styles.graphbox} rounded-xl px-5 py-4 pb-1`}>
            <div className={`flex items-center justify-between`}>
              <h1 className={`font-satoshi-bold`}>Subscriber</h1>
              <img src="/images/general-analytics/dots.svg" alt="" />
            </div>
            <div className={`flex mt-1 items-center justify-between`}>
              <h2 className={`font-dmsans`}>4547K</h2>
              <img src="/images/general-analytics/graph.svg" alt="" />
            </div>
          </div>
          <div className={`${styles.graphbox} rounded-xl px-5 py-4 pb-1`}>
            <div className={`flex items-center justify-between`}>
              <h1 className={`font-satoshi-bold`}>Earning</h1>
              <img src="/images/general-analytics/dots.svg" alt="" />
            </div>
            <div className={`flex mt-1 items-center justify-between`}>
              <h2 className={`font-dmsans`}>$567K</h2>
              <img src="/images/general-analytics/graph.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
