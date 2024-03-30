import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Headear';

export interface DefaultLayoutProps {
  children: any;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='main-content'>
          {/* <h1>Đây là phần nội dung</h1> */}
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
