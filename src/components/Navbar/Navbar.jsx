import styles from "./Navbar.module.scss";
import Companylogo from "../Logos/Companylogo";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiHeartStraightLight } from "react-icons/pi";
import { Bs0Square } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className={styles.navCont}>
      <div className={styles.navFirst}>
        <div className={styles.companyLogo}>
          <Companylogo />
        </div>
        <div className={styles.navSections}>
          <p>CATERGORY</p>
          <p>BRAND</p>
          <p>OUTLET</p>
        </div>
      </div>
      <div className={styles.navSecond}>
        <div className={styles.iconosWrapper}>
          <HiMagnifyingGlass />
          <HiOutlineLogin />
          <MdOutlinePersonOutline />
          <PiHeartStraightLight />
          <Bs0Square />
          <CgShoppingBag />
        </div>
        <div className={styles.navExtras}>
          <p>THE EDITED</p>
          <p>MAGAZINE</p>
          <p>EVENT</p>
          <p>LOOK-BOOD</p>
        </div>
      </div>
    </div>
  );
}
