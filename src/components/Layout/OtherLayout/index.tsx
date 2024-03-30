import React from 'react';
// import Header from '../DefaultLayout/Headear';
import Sidebar from '../DefaultLayout/Sidebar';
// import Footer from '../DefaultLayout/Footer';


interface DefaultLayoutProps {
  children: any;
}

const OtherLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      {/* <Header /> */}
      <div className='container'>
        <Sidebar />
        <div className='main-content'>
          <h1>Đây là phần nội dung</h1>
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default OtherLayout; 