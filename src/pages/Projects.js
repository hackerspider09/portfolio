import React from "react";
import Footer from '../components/Footer';
import ScrollTop from "../components/Scrolltotop"
import Project from "../components/Project";
import { useEffect } from 'react';

function Projects() {
  
  useEffect( ()=>{
    //to scroll top on load
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  },[]);
  return (
    <>
    <Project />
    <Footer />
    <ScrollTop />
    </>
  );
}

export default Projects;
