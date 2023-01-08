import React from "react";
import Skill from "../components/Skill";
import Footer from '../components/Footer';
import Education from '../components/Education';
import ScrollTop from "../components/Scrolltotop";
import Aboutcont from "../components/Aboutcont";
import { useEffect } from 'react';

function Aboutme() {
  useEffect( ()=>{
    //to scroll top on load
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  },[]);
  return (
    <>
    <Aboutcont />
    <Skill />
    <Education />
    <Footer />
    <ScrollTop />
    </>
  );
}

export default Aboutme;
