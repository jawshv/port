import { useLayoutEffect, useEffect, useState, prevstate } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

function ScrollToTop({ history, objectheight }) {
  const location = useLocation();

  // useLayoutEffect(() => {
  //   const unlisten = history.listen(() => {
  //     window.scrollTo(0, objectheight)
  //     console.log("new URL: "+window.location.pathname+": "+objectheight)

  //   });
  //   return () => {
  //     unlisten();
  //   }
  // });

  useEffect(() => {

    if (location.pathname === "/") {
      window.scrollTo(0,0)
      console.log("home: "+objectheight)
      } else {
        window.scrollTo(0, objectheight)
        console.log("not home: "+objectheight)
      }
    });

  return (null);
}

export default withRouter(ScrollToTop);