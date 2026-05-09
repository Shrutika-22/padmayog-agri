import { Home } from "../pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Header } from "../components/Header";
import {Footer} from "../components/Footer";
import { About } from "../pages/About";
import { CommoditiesMain } from "../pages/CommoditiesMain";
import { ServicesMain } from "../pages/ServicesMain";
import { TradeProcess } from "../pages/TradeProcess";
import { GlobalReach } from "../pages/GlobalReach";
import { Contact } from "../pages/Contact";
export const AppRouter=()=>{
    return(
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/commodities" element={<CommoditiesMain />} />
            <Route path="/services" element={<ServicesMain />} />
            <Route path="/trade-process" element={<TradeProcess />} />
            <Route path="/global-reach" element={<GlobalReach />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}
