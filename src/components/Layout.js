import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
//import CookieConsent from "./cookieconsent";

import "../styles/global.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          contact {
            openingHours {
              days {
                day
                times {
                  time
                }
              }
              title
            }
          }
          footer {
            copyright
          }
          herosection {
            address
            contactText
            email
            telephone
            telephoneLink
          }
          news {
            content
          }
          templateKey
        }
      }
    }
  `);

  const {
    herosection,
    news,
    contact,
    footer,
  } = data.markdownRemark.frontmatter;

  return (
    <section>
      <Header herosection={herosection} content={news.content} />
      <main class="max-w-1300p mx-auto">{children}</main>
      <Footer
        herosection={herosection}
        content={news.content}
        contact={contact}
        footer={footer}
      />
    </section>
  );
};

export default Layout;
