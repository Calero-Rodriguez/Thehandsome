import React, { useRef, useState } from "react";
import styles from "./HomePage.module.scss";

import {
  swiperHeroData,
  swiperNewProductsWomen,
  swiperNewProductsMen,
  swiperNewProductsFashion,
} from "./SwiperData";

import { SwiperFirst } from "../../src/components/SwiperFirst/SwiperFirst";
import { SwiperHero } from "../../src/components/SwiperHero/SwiperHero";

export const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState(
    swiperNewProductsWomen
  );

  const handleNewProduct = function (category) {
    switch (category) {
      case "women":
        setCurrentCategory(swiperNewProductsWomen);
        break;
      case "men":
        setCurrentCategory(swiperNewProductsMen);
        break;
      case "fashion":
        setCurrentCategory(swiperNewProductsFashion);
        break;
    }
  };
  return (
    <div>
      <SwiperHero swiperInfo={swiperHeroData} />
      <div className={styles.newProductsSection}>
        <div className={styles.prueba}>
          <div className={styles.newProductsTitles}>
            <h2>New Products</h2>
            <p onClick={() => handleNewProduct("women")}>WOMEN </p>
            <p onClick={() => handleNewProduct("men")}>MEN</p>
            <p onClick={() => handleNewProduct("fashion")}>FASHION ACC.</p>
          </div>
          <SwiperFirst swiperInfo={currentCategory} />
        </div>
      </div>
    </div>
  );
};
