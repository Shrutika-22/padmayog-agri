import { AboutIntro } from "../components/AboutIntro"
import { Commodities } from "../components/Commodities"
import { Hero } from "../components/Hero"
import { QuoteSection } from "../components/QuoteSection"
import { Services } from "../components/Services"
import { TrustedBrands } from "../components/TrustedBrands"
export const Home=()=>{
    return(
        <>
        <Hero />
        <AboutIntro/>
        <Services/>
        <QuoteSection/>
        <Commodities/>
        <TrustedBrands/>
       </>
    )
}