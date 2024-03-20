import { useState } from "react";
import Companylogo from "../Logos/Companylogo";
import styles from "./Footer.module.scss";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";

export function Footer() {
  const [menuControl, setMenuControl] = useState({
    familyMenu: false,
    languageMenu: false,
  });

  function handleMenuControl(menuType) {
    switch (menuType) {
      case "family":
        setMenuControl({ languageMenu: false, familyMenu: !menuControl.familyMenu });
        break;

      case "language":
        setMenuControl({ languageMenu: !menuControl.languageMenu, familyMenu: false });
        break;
    }
  }

  return (
    <div className={styles.footercont}>
      <div className={styles.izq}>
        <Companylogo />
        <ul className={styles.list1}>
          <li>Company</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Customer Service</li>
        </ul>
        <ul className={styles.list2}>
          <li>HANDSOME Corp.</li>
          <li>CEO:Kim Min Duk</li>
          <li>HANDSOME B/D, 523, Dosan-daero, Gangnam-gu, Seoul, Korea</li>
        </ul>
        <ul className={styles.list3}>
          <li>TEL 1800-5700</li>
          <li>FAX 02-6078-2856</li>
        </ul>
        <p>COPYRIGHT © 2023 HANDSOME. ALL RIGHTS RESERVED.</p>
      </div>
      <div className={styles.der}>
        <p>
          <b>SHARE YOUR STYLE</b>
        </p>
        <div className={styles.icons}>
          <CiYoutube />
          <CiInstagram />
        </div>
        <div className={styles.footerMenus}>
          <div className={styles.familysites}>
            <div
              className={
                menuControl.familyMenu ? styles.familyOpen : styles.familyClose
              }
            >
              <div>HFASHIONMALL</div>
              <div>HYUNDAI homeshoping</div>
              <div>THEHYUNDAI.COM</div>
              <div>H.POINT</div>
              <div>Hyundai Department Corp</div>
            </div>
            <button onClick={() => handleMenuControl("family")}>
              Familiy Site
            </button>
            <GoTriangleDown className={menuControl.familyMenu ? styles.triangleUp : styles.triangleDown} />
          </div>

          <div className={styles.languageCont}>
            <div
              className={
                menuControl.languageMenu
                  ? styles.languageOpen
                  : styles.languageClose
              }
            >
              <div>Korean</div>
              <div>English</div>
            </div>
            <button onClick={() => handleMenuControl("language")}>
              Language
            </button>
            <GoTriangleDown className={menuControl.languageMenu ? styles.triangleUp : styles.triangleDown} />
          </div>
        </div>
      </div>
    </div>
  );
}
