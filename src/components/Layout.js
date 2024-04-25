import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block bg-light p-20 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
