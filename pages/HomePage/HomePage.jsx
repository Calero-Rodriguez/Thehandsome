import React, { useState } from "react";
import styles from "./HomePage.module.scss";

import {
  swiperHeroData,
  swiperNewProductsWomen,
  swiperNewProductsMen,
  swiperNewProductsFashion,
  swiperPopularProductsWomen,
  swiperPopularProductsMen,
  swiperPopularProductsFashion,
} from "./SwiperData";

import { SwiperFirst } from "../../src/components/SwiperFirst/SwiperFirst";
import { SwiperHero } from "../../src/components/SwiperHero/SwiperHero";
import { SwiperPopular } from "../../src/components/SwiperPopular/SwiperPopular";

export const HomePage = () => {
  const [currentNewCategory, setCurrentNewCategory] = useState(swiperNewProductsWomen);
  const [currentPopularCategory, setCurrentPopularCategory] = useState(swiperPopularProductsWomen);

  const handleNewProduct = (category) => {
    switch (category) {
      case "women":
        setCurrentNewCategory(swiperNewProductsWomen);
        break;
      case "men":
        setCurrentNewCategory(swiperNewProductsMen);
        break;
      case "fashion":
        setCurrentNewCategory(swiperNewProductsFashion);
        break;
      default:
        break;
    }
  };

  const handlePopularProduct = (category) => {
    switch (category) {
      case "women":
        setCurrentPopularCategory(swiperPopularProductsWomen);
        break;
      case "men":
        setCurrentPopularCategory(swiperPopularProductsMen);
        break;
      case "fashion":
        setCurrentPopularCategory(swiperPopularProductsFashion);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <SwiperHero swiperInfo={swiperHeroData} />
      <div className={styles.newProductsSection}>
        <div className={styles.prueba}>
          <div className={styles.newProductsTitles}>
            <p className={styles.title}>New Products</p>
            <ul className={styles.newProductsList}>
              <li
                className={
                  currentNewCategory === swiperNewProductsWomen
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={() => handleNewProduct("women")}
              >
                WOMEN
              </li>
              <li
                className={
                  currentNewCategory === swiperNewProductsMen
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={() => handleNewProduct("men")}
              >
                MEN
              </li>
              <li
                className={
                  currentNewCategory === swiperNewProductsFashion
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={() => handleNewProduct("fashion")}
              >
                FASHION ACC.
              </li>
            </ul>
          </div>
          <SwiperFirst swiperInfo={currentNewCategory} />
        </div>
      </div>
      <div className={styles.popularProductsSection}>
        <p className={styles.title}>Popular products currently being purchased</p>
        <ul className={styles.popularProductsList}>
          <li
            className={
              currentPopularCategory === swiperPopularProductsWomen
                ? styles.selected
                : styles.notSelected
            }
            onClick={() => handlePopularProduct("women")}
          >
            WOMEN
          </li>
          <li
            className={
              currentPopularCategory === swiperPopularProductsMen
                ? styles.selected
                : styles.notSelected
            }
            onClick={() => handlePopularProduct("men")}
          >
            MEN
          </li>
          <li
            className={
              currentPopularCategory === swiperPopularProductsFashion
                ? styles.selected
                : styles.notSelected
            }
            onClick={() => handlePopularProduct("fashion")}
          >
            FASHION ACC.
          </li>
        </ul>
        <SwiperPopular swiperInfo={currentPopularCategory} />
      </div>
    </div>
  );
};