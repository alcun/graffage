import React, { useEffect, useState } from 'react'

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const changeNavClass = () => {
    if (window.pageYOffset >= 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeNavClass);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeNavClass);
    };
  }, []);
  return isScrolled
}

export default useIsScrolled
