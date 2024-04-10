import React, { useRef } from "react";
import styles from "./HomePage.module.scss";

import { swiperHeroData, swiperNewProductsData } from "./SwiperData";


import { SwiperFirst } from "../../src/components/SwiperFirst/SwiperFirst";

export const HomePage = () => {

  return (
    <div>
      <div className={styles.swiperHeroCont}>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={5}
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
          {swiperHeroData &&
            swiperHeroData.map((data, index) => {
              return (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.slideCont}>
                    <img src={data.imgPath} />
                    <div className={styles.slideText}>
                      <h3>{data.textUp}</h3>
                      <h3>{data.textDown}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className={styles.newProductsSection}>
        <div className={styles.prueba}>
          <div className={styles.newProductsTitles}>
            <h2>New Products</h2>
            <a href="">WOMEN</a>
            <a href="">MEN</a>
            <a href="">FASHION ACC.</a>
          </div>
          <SwiperFirst />
        </div>
      </div>
    </div>
  );
};
