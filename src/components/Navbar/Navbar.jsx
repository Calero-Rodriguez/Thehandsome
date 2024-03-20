import styles from "./Navbar.module.scss";
import Companylogo from "../Logos/Companylogo";
import { Login } from "../Logos/Login";
import { Lupa } from "../Logos/Lupa";
import { MyHeart } from "../Logos/MyHeart";
import { MyPage } from "../Logos/MyPage";
import { Shoppingbag } from "../Logos/Shoppingbag";

export default function Navbar() {
  return (
    <div className="Contenedor">
      <div>
        <div>
            <Companylogo />
        </div>
        <div>
            <Prueba/>
            <Lupa/>
        </div>
      </div>
      <div>
        <div>
          <p>CATERGORY</p>
          <p>BRAND</p>
          <p>OUTLET</p>
        </div>

        <div>
            <p>THE EDITED</p>
            <p>MAGAZINE</p>
            <p>EVENT</p>
            <p>LOOK-BOOD</p>
        </div>
        <div className={styles.iconos_wrapper}>
            <Lupa />
            <Login />
            <MyPage />
            <MyHeart />
            <Shoppingbag />
        </div>
      </div>
    </div>
  );
}
