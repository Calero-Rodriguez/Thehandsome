import React, { useState, useCallback } from "react";
import styles from "./HomePage.module.scss";
import {
  swiperHeroData,
  swiperNewProductsWomen,
  swiperNewProductsMen,
  swiperNewProductsFashion,
  swiperPopularProductsWomen,
  swiperPopularProductsMen,
  swiperPopularProductsFashion,
  swiperLookBookLatt,
  swiperLookBookCashmere,
  swiperLookBookO2nd,
  swiperLookBookMine,
  swiperLookBookSJSJ,
  swiperLookBookTime,
  swiperLookBookObzee,
  swiperLookBookSystem,
  swiperLookBookSystemHomme,
  swiperLookBookTimeHomme,
} from "./SwiperData";

import { SwiperFirst } from "../../src/components/SwiperFirst/SwiperFirst";
import { SwiperHero } from "../../src/components/SwiperHero/SwiperHero";
import { SwiperPopular } from "../../src/components/SwiperPopular/SwiperPopular";
import { SwiperLBook } from "../../src/components/SwiperLBook/SwiperLBook";

const categoryData = {
  new: {
    women: swiperNewProductsWomen,
    men: swiperNewProductsMen,
    fashion: swiperNewProductsFashion,
  },
  popular: {
    women: swiperPopularProductsWomen,
    men: swiperPopularProductsMen,
    fashion: swiperPopularProductsFashion,
  },
  lbook: {
    latt: swiperLookBookLatt,
    cashmere: swiperLookBookCashmere,
    o2nd: swiperLookBookO2nd,
    mine: swiperLookBookMine,
    sjsj: swiperLookBookSJSJ,
    time: swiperLookBookTime,
    obzee: swiperLookBookObzee,
    system: swiperLookBookSystem,
    systemHomme: swiperLookBookSystemHomme,
    timeHomme: swiperLookBookTimeHomme,
  },
};

const categoryLabels = {
  new: {
    women: "WOMEN",
    men: "MEN",
    fashion: "FASHION ACC.",
  },
  popular: {
    women: "WOMEN",
    men: "MEN",
    fashion: "FASHION ACC.",
  },
  lbook: {
    latt: "LÄTT",
    cashmere: "the CASHMERE",
    o2nd: "O'2nd",
    mine: "MINE",
    sjsj: "SJSJ",
    time: "TIME",
    obzee: "OBZEE",
    system: "SYSTEM",
    systemHomme: "SYSTEM HOMME",
    timeHomme: "TIME HOMME",
  },
};

export const HomePage = () => {
  const [currentNewCategory, setCurrentNewCategory] = useState(categoryData.new.women);
  const [currentPopularCategory, setCurrentPopularCategory] = useState(categoryData.popular.women);
  const [currentLbookCategory, setCurrentLbookCategory] = useState(categoryData.lbook.latt);

  const handleCategoryChange = useCallback((type, category) => {
    switch (type) {
      case "new":
        setCurrentNewCategory(categoryData.new[category]);
        break;
      case "popular":
        setCurrentPopularCategory(categoryData.popular[category]);
        break;
      case "lbook":
        setCurrentLbookCategory(categoryData.lbook[category]);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div>
      <SwiperHero swiperInfo={swiperHeroData} />
      <div className={styles.newProductsSection}>
        <div className={styles.prueba}>
          <div className={styles.newProductsTitles}>
            <p className={styles.title}>New Products</p>
            <ul className={styles.newProductsList}>
              {Object.keys(categoryData.new).map((category) => (
                <li
                  key={category}
                  className={currentNewCategory === categoryData.new[category] ? styles.selected : styles.notSelected}
                  onClick={() => handleCategoryChange("new", category)}
                >
                  {categoryLabels.new[category]}
                </li>
              ))}
            </ul>
          </div>
          <SwiperFirst swiperInfo={currentNewCategory} />
        </div>
      </div>
      <div className={styles.popularProductsSection}>
        <p className={styles.title}>Popular products currently being purchased</p>
        <ul className={styles.popularProductsList}>
          {Object.keys(categoryData.popular).map((category) => (
            <li
              key={category}
              className={currentPopularCategory === categoryData.popular[category] ? styles.selected : styles.notSelected}
              onClick={() => handleCategoryChange("popular", category)}
            >
              {categoryLabels.popular[category]}
            </li>
          ))}
        </ul>
        <SwiperPopular swiperInfo={currentPopularCategory} />
      </div>
      <div className={styles.lbookProductsSection}>
        <p className={styles.title}>Look-Book</p>
        <ul className={styles.lbookProductsList}>
          {Object.keys(categoryData.lbook).map((category) => (
            <li
              key={category}
              className={currentLbookCategory === categoryData.lbook[category] ? styles.selected : styles.notSelected}
              onClick={() => handleCategoryChange("lbook", category)}
            >
              {categoryLabels.lbook[category]}
            </li>
          ))}
        </ul>
        <SwiperLBook swiperInfo={currentLbookCategory} />
      </div>
    </div>
  );
};