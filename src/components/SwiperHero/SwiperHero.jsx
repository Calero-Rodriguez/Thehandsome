import React from "react";
import styles from "./SwiperHero.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SwiperHero = ({swiperInfo}) => {
  return (
    <>
      <div className={styles.swiperHeroCont}>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.swiperHero}
        >
          {swiperInfo &&
            swiperInfo.map((data, index) => {
              return (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.slideCont}>
                    <img src={data.imgPath} />
                    <div className={styles.slideText}>
                      <h3>{data.textUp}</h3>
                      <h3>{data.textDown}</h3>
                      <h3>{data.description}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};
