import { useLayoutEffect, useEffect, useState, prevstate } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

function ScrollToTop({ history, objectheight }) {

  console.log("scroll:" + objectheight)
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {

  if (location.pathname === "/") {
    window.scrollTo(0,0)
    console.log("home")
    } else {
      window.scrollTo(0, objectheight)
      console.log("not home")
    }
  });


  useEffect(() => {
    const unlisten = history.listen(() => {

        window.scrollTo(0, objectheight)
    });
    return () => {
      unlisten();
    }
  });

  return (null);
}

export default withRouter(ScrollToTop);