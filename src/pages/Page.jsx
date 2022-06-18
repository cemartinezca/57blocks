import React, { useEffect } from 'react';

const BasePage = ({children}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      { children }
    </>
  )
};
 
export default BasePage;