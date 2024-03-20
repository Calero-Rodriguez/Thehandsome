import Companylogo from "../Logos/Companylogo";
import { Lupa } from "../Logos/Lupa";
import { Prueba } from "../Logos/Prueba";

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
      </div>
    </div>
  );
}
