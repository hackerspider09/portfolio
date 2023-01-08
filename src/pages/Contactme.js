import React from "react";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollTop from "../components/Scrolltotop";
import { useEffect } from 'react';

function Contactme() {
  useEffect( ()=>{
    //to scroll top on load
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  },[]);
  return (
    <>
    <Contact />
    <Footer />
    <ScrollTop />
    </>
  );
}

export default Contactme;
