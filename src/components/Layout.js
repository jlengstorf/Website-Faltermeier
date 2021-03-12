import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
//import CookieConsent from "./cookieconsent";

import "../styles/global.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const Layout = ({ children, herosection, content, contact, footer }) => {
  
  return (
    <section>
      <Header herosection={herosection} content={content} />
      <main class="max-w-1300p mx-auto">{children}</main>
      <Footer
        herosection={herosection}
        content={content}
        contact={contact}
        footer={footer}
      />
    </section>
  );
};

export default Layout;
