import React, {useEffect,useState} from "react";
import "./style/scrolltotop.css"
function ScrollTop() {
      const [istop ,setisTop]=useState(true);

    //   function Checktop() {
    //     if (istop && window.pageYOffset < 200){

    //         setisTop(false);
    //     }else{
    //         setisTop(true);
    //     }
    //   }
    //   window.addEventListener('scroll',Checktop);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset < 200) {
            setisTop(true);
          } else {
            setisTop(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);
    
    return(
        <div className={istop ? "btn-visibility upbuttondiv" : "upbuttondiv"} >
            <div className="upbutton"  onClick= {scrollToTop}>
                <i className="bi bi-chevron-double-up"></i>
            </div>
        </div>
        
        
    );
}

export default ScrollTop;