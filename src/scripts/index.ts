import "../styles/footer.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/subsections.css";
import { addFooterEventListeners } from "./footer";
import "./map/map";
import { addModalEventListeners } from "./navbar";
import { addSectionsEventListeners } from "./subsections";

addModalEventListeners();
addSectionsEventListeners();
addFooterEventListeners();
