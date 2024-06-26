import React from "react";
import Header from "../component/Header";
import FindFlatmates from "../component/FindFlatmates";
import SearchPlaces from "../component/SearchPlaces";
import RentalAgreement from "../component/RentalAgreement";
import ConnectwithUs from "../component/ConnectwithUs";
import PremiumProperties from "../component/PremiumProperties";
import Deposit from "../component/Deposit";
import Cities from "../component/Cities";
// import Article from "../component/Article";
import Footer from "../component/Footer";
import '../styles/styles.css'
import RentalForm from "../component/RentalForm";
import { useState } from "react";
import DepositeButton from "../component/DepositeButton";
import { Dialog } from "@mui/material";
import RentalFormClick from "../component/RentalFormClick";
import OwnerDetail from "../component/OwnerDetail";
import TenantDetails from "../component/TenantDetails";
import PropertyDetail from "../component/PropertyDetail";
import AgreementTerms from "../component/AgreementTerms";
import Annexures from "../component/Annexures";
import PremiumPropertiesButton from "../component/PremiumPropertiesButton";
import PremiumPropertiesButtonClick from "../component/PremiumPropertiesButtonClick";

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
        
        {/* <Article /> */}
        <Footer />        
        <DepositeButton />
        <RentalFormClick />
        <PremiumPropertiesButton />
        <PremiumPropertiesButtonClick />
       
        </div>
    )
}
export default Home;