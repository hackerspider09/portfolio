import React from "react";
import Skill from "../components/Skill";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScrollTop from "../components/Scrolltotop"
import { useEffect } from 'react';

function Home() {
  useEffect( ()=>{
    //to scroll top on load
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  },[]);
  return (
    <>
    <Hero />
    <Skill />
    <Footer />
    <ScrollTop />
    </>
  );
}

export default Home;
