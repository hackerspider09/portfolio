import React from "react";
import Footer from '../components/Footer';
import ScrollTop from "../components/Scrolltotop"
import Resumecom from "../components/Resumecom";
import { useEffect } from 'react';

function Resume() {
  
  useEffect( ()=>{
    //to scroll top on load
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  },[]);
  return (
    <>
    <Resumecom />
    <Footer />
    <ScrollTop />
    </>
  );
}

export default Resume;
