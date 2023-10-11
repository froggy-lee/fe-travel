import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
