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
            <p id={styles.title}>New Products</p>
            <ul className={styles.newProductsList}>
              <li
                id={
                  currentCategory === swiperNewProductsWomen
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={() => handleNewProduct("women")}
              >
                WOMEN{" "}
              </li>
              <li
                id={
                  currentCategory === swiperNewProductsMen
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={() => handleNewProduct("men")}
              >
                MEN
              </li>
              <li
                id={
                  currentCategory === swiperNewProductsFashion
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={() => handleNewProduct("fashion")}
              >
                FASHION ACC.
              </li>
            </ul>
          </div>
          <SwiperFirst swiperInfo={currentCategory} />
        </div>
      </div>
    </div>
  );
};
