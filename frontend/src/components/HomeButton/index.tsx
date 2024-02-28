import { RxCaretUp } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import AOS from "aos";

import { HomeButtonContainer } from "./style";

const HomeButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const handleButtonVisiblity = () => {
      window.pageYOffset > 150 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleButtonVisiblity);
    };
  }, []);
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <HomeButtonContainer>
        {showButton && (
            <button className="btn-top" onClick={handleScrollTop} data-aos="fade">
            <RxCaretUp />
            </button>
        )}
      </HomeButtonContainer>
  );
}

export default HomeButton;
