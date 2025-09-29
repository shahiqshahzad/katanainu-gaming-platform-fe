import React from "react";

// components
import Layout from "../components/common/Layout";

// css
import "@splidejs/react-splide/css";
import Footer from "../components/Footer";
import style from "../styles/order/order.module.css";

const Order = () => {
  return (
    <>
      <Layout nosidebar>
        <div className={`${style.order} flex items-center justify-center`}>
          <div className={`${style.orderPopUp} relative`}>
            <h1 className={`${style.headingOrder} font-bebas-neue`}>
              Ordering
              <span className={`${style.headingOrderSpan}`}>Your Goods</span>
            </h1>
            <img
              src="/images/order/bonus.svg"
              className="absolute -top-32 right-16"
              alt=""
            />

            <div className="grid gap-5 mt-14">
              <div
                className={`row px-5 flex items-center justify-between ${style.rowOrder}`}
              >
                <img src="/images/order/img1.png" alt="" />
                <div>
                  <h1 className={`${style.rowHeading} font-satoshi-black`}>
                    MACHINE GUN 3000 RIGERT BLUE
                  </h1>
                  <p className={`${style.rowPara} font-satoshi-regular`}>
                    $120 per ps
                  </p>
                </div>
                <div className={`flex items-center`}>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/minus.svg" alt="" />
                  </button>
                  <h1
                    className={`mx-3 ${style.headingIncrement} font-satoshi-bold`}
                  >
                    01
                  </h1>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/plus.svg" alt="" />
                  </button>
                </div>
                <h1 className={`${style.price}  font-satoshi-black`}>$120</h1>
                <button className="border-0 outline-none bg-transparent">
                  <img src="/images/order/del.svg" alt="" />
                </button>
              </div>

              <div
                className={`row  px-5 flex items-center justify-between ${style.rowOrder}`}
              >
                <img src="/images/order/img2.png" alt="" />
                <div>
                  <h1 className={`${style.rowHeading} font-satoshi-black`}>
                    MACHINE GUN 3000 RIGERT BLUE
                  </h1>
                  <p className={`${style.rowPara} font-satoshi-regular`}>
                    $120 per ps
                  </p>
                </div>
                <div className={`flex items-center`}>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/minus.svg" alt="" />
                  </button>
                  <h1
                    className={`mx-3 ${style.headingIncrement} font-satoshi-bold`}
                  >
                    01
                  </h1>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/plus.svg" alt="" />
                  </button>
                </div>
                <h1 className={`${style.price}  font-satoshi-black`}>$120</h1>
                <button className="border-0 outline-none bg-transparent">
                  <img src="/images/order/del.svg" alt="" />
                </button>
              </div>

              <div
                className={`row  px-5 flex items-center justify-between ${style.rowOrder}`}
              >
                <img src="/images/order/img3.png" alt="" />
                <div>
                  <h1 className={`${style.rowHeading} font-satoshi-black`}>
                    MACHINE GUN 3000 RIGERT BLUE
                  </h1>
                  <p className={`${style.rowPara} font-satoshi-regular`}>
                    $120 per ps
                  </p>
                </div>
                <div className={`flex items-center`}>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/minus.svg" alt="" />
                  </button>
                  <h1
                    className={`mx-3 ${style.headingIncrement} font-satoshi-bold`}
                  >
                    01
                  </h1>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/plus.svg" alt="" />
                  </button>
                </div>
                <h1 className={`${style.price}  font-satoshi-black`}>$120</h1>
                <button className="border-0 outline-none bg-transparent">
                  <img src="/images/order/del.svg" alt="" />
                </button>
              </div>

              <div
                className={`row  px-5 flex items-center justify-between ${style.rowOrder}`}
              >
                <img src="/images/order/img4.png" alt="" />
                <div>
                  <h1 className={`${style.rowHeading} font-satoshi-black`}>
                    MACHINE GUN 3000 RIGERT BLUE
                  </h1>
                  <p className={`${style.rowPara} font-satoshi-regular`}>
                    $120 per ps
                  </p>
                </div>
                <div className={`flex items-center`}>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/minus.svg" alt="" />
                  </button>
                  <h1
                    className={`mx-3 ${style.headingIncrement} font-satoshi-bold`}
                  >
                    01
                  </h1>
                  <button className="border-0 cursor-pointer outline-none bg-transparent">
                    <img src="/images/order/plus.svg" alt="" />
                  </button>
                </div>
                <h1 className={`${style.price}  font-satoshi-black`}>$120</h1>
                <button className="border-0 outline-none bg-transparent">
                  <img src="/images/order/del.svg" alt="" />
                </button>
              </div>
            </div>

            <div
              className={`${style.buttonsWrapper} mt-10 grid grid-cols-2  gap-5`}
            >
              <button className={`font-satoshi-bold h-12 ${style.buttonFirst}`}>
                Later
              </button>
              <button
                className={`font-satoshi-bold h-12 ${style.buttonSecond}`}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default Order;
