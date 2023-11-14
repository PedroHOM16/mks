import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer'; 

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div style={{width: '100%'}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
