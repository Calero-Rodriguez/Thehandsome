import styles from "./SwiperFirst.module.scss";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SwiperFirst = ({ swiperInfo }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handlePrevButtonClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <div className={styles.swiperNewProductsCont}>
        <div
          className={styles.newProductsPrevBtn}
          ref={prevRef}
          onClick={handlePrevButtonClick}
        >
          <IoIosArrowBack />
        </div>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={30}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation]}
          className={styles.swiperNewProducts}
        >
          {swiperInfo &&
            swiperInfo.map((data, index) => {
              return (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.slideCont}>
                    <img src={data.imgPath} />
                    <div className={styles.slideText}>
                      <h5>{data.textUp}</h5>
                      <p>{data.textDown}</p>
                      <p>$ {data.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div
          className={styles.newProductsNextBtn}
          ref={nextRef}
          onClick={handleNextButtonClick}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};
