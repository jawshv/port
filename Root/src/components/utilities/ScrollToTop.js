import { useLayoutEffect, useEffect, useState, prevstate } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

function ScrollToTop({ history, objectheight }) {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      return () => {
        window.scrollTo(0, 0)
      }
  } else  {

    const unlisten = history.listen(() => {
      window.scrollTo(0, objectheight )
      console.log(objectheight)
    });
    return () => {
      unlisten();
    }
  
  }
  });

  return (null);
}

export default withRouter(ScrollToTop);