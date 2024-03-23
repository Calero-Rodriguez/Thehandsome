import React from "react";
import styles from "./HomePage.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperHeroData, swiperNewProductsData } from "./SwiperData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.swiperHeroCont}>
        <Swiper
          slidesPerView={1}
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
          <div className={styles.swiperNewProductsCont}>
            <Swiper
              slidesPerView={5}
              spaceBetween={0}
              navigation={true}
              modules={[Navigation]}
              className={styles.swiperNewProducts}
            >
              {swiperNewProductsData &&
                swiperNewProductsData.map((data, index) => {
                  return (
                    <div>
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
                    </div>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
