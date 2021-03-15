import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

import { ImpressumPageTemplate } from "../templates/impressum-page";

import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

const ImpressumPage = ({ data }) => {
  const html = data.markdownRemark.html;

  return (
    <Layout>
      <Helmet>
        <html lang="de" />
        <title>Zahnarztpraxis Dr. Sandra Faltermeier Impressum</title>
        <meta
          name="description"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Impressum"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Impressum"
        />
        <meta property="og:url" content="/impressum" />
        <meta
          property="og:description"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Impressum"
        />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/Dr-Faltermeier.jpg`}
        />
      </Helmet>
      <ImpressumPageTemplate html={html} />
    </Layout>
  );
};

export default ImpressumPage;

export const pageQuery = graphql`
  query impressumPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "impressum-page" } }) {
      html
    }
  }
`;
