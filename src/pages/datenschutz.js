import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

import { DatenschutzPageTemplate } from "../templates/datenschutz-page";

import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

const DatenschutzPage = ({ data }) => {
  const html = data.markdownRemark.html;
  const { frontmatter } = data.forLayout;

  return (
    <Layout
      herosection={frontmatter.herosection}
      content={frontmatter.news.content}
      contact={frontmatter.contact}
      footer={frontmatter.footer}
    >
      <Helmet>
        <html lang="de" />
        <title>Zahnarztpraxis Dr. Sandra Faltermeier Datenschutz</title>
        <meta
          name="description"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Datenschutz"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Datenschutz"
        />
        <meta property="og:url" content="/datenschutz" />
        <meta
          property="og:description"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Datenschutz"
        />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/Dr-Faltermeier.jpg`}
        />
      </Helmet>
      <DatenschutzPageTemplate html={html} />
    </Layout>
  );
};

export default DatenschutzPage;

export const pageQuery = graphql`
  query datenschutzPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "datenschutz-page" } }) {
      html
    }
    forLayout: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
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
          subtitle
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
`;
