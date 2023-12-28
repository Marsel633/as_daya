import React, { memo } from "react";
import { Footer, Header } from "..";

type Layout = {
  children: React.ReactNode;
};
export const Layout :React.FC<Layout> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
});
