import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import { Gallery } from "./common/Helper2";
import { useRouter } from "next/router";
import { getAllPostGallery } from "../utils/api/postModule";

const Gallerys = () => {
  const [active, setActive] = useState(1);
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const {
    data: galleryItems,
    isLoading,
    refetch,
  } = getAllPostGallery(id, filter);

  const onChangeTab = (active, status) => {
    setActive(active);
    setFilter(status);
  };

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, filter]);

  if (!id) return null;

  return (
    <>
      <div className="bg-neutral-bg-04 w-full Gallerys">
        <div className=" w-full mx-auto px-3 xl:px-0 pt-[40px]">
          <div className="flex justify-between md:flex-row flex-col gap-4 md:gap-0 items-center">
            <h2 className="text-white font-bebas-neue text-[32px] font-bold leading-[32px] uppercase">
              Esther’s <span className="text-pink">Gallery</span>
            </h2>
            <div className="flex gap-3 overflow-auto max-w-[380px] w-full justify-center md:justify-end">
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 1 && "active"
                }`}
                onClick={() => onChangeTab(1, "")}
              >
                All
              </button>
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 2 && "active"
                }`}
                onClick={() => onChangeTab(2, "photo")}
              >
                Photos
              </button>
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 3 && "active"
                }`}
                onClick={() => onChangeTab(3, "video")}
              >
                Videos
              </button>
              {/* <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 4 && "active"
                }`}
                onClick={(e) => {
                  setActive(4);
                }}
              >
                Streams
              </button> */}
            </div>
          </div>
          <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {galleryItems?.data?.documents?.map((items, index) => (
              <div key={index}>
                <GalleryCard items={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallerys;
