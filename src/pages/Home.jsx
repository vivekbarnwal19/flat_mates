import React from "react";
import Header from "../component/Header";
import FindFlatmates from "../component/FindFlatmates";
import SearchPlaces from "../component/SearchPlaces";
import RentalAgreement from "../component/RentalAgreement";
import ConnectwithUs from "../component/ConnectwithUs";
import PremiumProperties from "../component/PremiumProperties";
import Deposit from "../component/Deposit";
import Cities from "../component/Cities";
import Article from "../component/Article";
import Footer from "../component/Footer";
import '../styles/styles.css'

function Home(){
    return(
        <div>
        <Header />
        <FindFlatmates />
        <SearchPlaces />
        <RentalAgreement />
        <ConnectwithUs />
        <PremiumProperties />
        <Deposit />
        <Cities />
        <Article />
        <Footer />
        </div>
    )
}
export default Home;