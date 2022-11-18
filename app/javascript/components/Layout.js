import React from 'react'

const Layout = ({children}) => {
return(
    <div className='page'>
      <div className='banner'></div>
      <div className='menu'></div>
      <div className='content'>
        {children} 
      </div>
    </div>
  );
}

export default Layout
