import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";

import { Helmet } from "react-helmet";

const ParodontitistherapiePage = ({ data }) => {
  const { html } = data.markdownRemark;
  const pageFrontmatter = data.markdownRemark.frontmatter;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="de" />
        <title>
          Parodontitistherapie - Zahnarztpraxis Dr. Sandra Faltermeier
        </title>
        <meta
          name="description"
          content="Als Parodontitis bezeichnet man eine entzündliche Erkrankung des Zahnhalteapparates, die in erster Linie durch bakterielle Zahnbeläge verursacht wird. Zu den Risikofaktoren gehören Stress,  starkes Rauchen oder Diabetes. Eine unbehandelte Parodontitis kann das Risiko für schwere Allgemeinkrankeiten wie Herzerkrankungen und Diabetes erhöhen und führt über kurz oder lang zum Verlust der betroffenen Zähne."
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Parodontitistherapie - Zahnarztpraxis Dr. Sandra Faltermeier"
        />
        <meta
          property="og:description"
          content="Als Parodontitis bezeichnet man eine entzündliche Erkrankung des Zahnhalteapparates, die in erster Linie durch bakterielle Zahnbeläge verursacht wird. Zu den Risikofaktoren gehören Stress,  starkes Rauchen oder Diabetes. Eine unbehandelte Parodontitis kann das Risiko für schwere Allgemeinkrankeiten wie Herzerkrankungen und Diabetes erhöhen und führt über kurz oder lang zum Verlust der betroffenen Zähne."
        />
        <meta property="og:url" content="/leistungen/parodontitistherapie" />
      </Helmet>
      <Layout>
        <div class="sm:mb-80p sm:px-25p">
          {pageFrontmatter.imageObject && (
            <GatsbyImage
              class="mb-40p"
              loading="eager"
              image={
                pageFrontmatter.imageObject.image.childImageSharp
                  .gatsbyImageData
              }
              alt={pageFrontmatter.imageObject.alt}
              title={pageFrontmatter.imageObject.title}
            />
          )}
        </div>
        <div class="max-w-1000p mx-auto px-5 mini:px-25p">
          <div
            class="markdownLeistungen mb-40p sm:mb-80p"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div class="flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-evenly items-center max-w-5xl mx-auto sm:space-x-5">
            <Link
              class="text-secondary font-medium text-20p sm:text-25p text-center"
              to="/leistungen"
            >
              Zurück zur Leistungsübersicht
            </Link>
            <Link
              class="text-20p sm:text-25p text-white bg-cta p-20p sm:px-25p sm:py-3 text-center"
              to="/#termin-vereinbaren"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default ParodontitistherapiePage;

export const query = graphql`
  {
    markdownRemark(
      frontmatter: { templateKey: { eq: "parodontitistherapie-page" } }
    ) {
      frontmatter {
        title
        subtitle
        imageObject {
          title
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                quality: 80
                
                formats: [AVIF, WEBP, AUTO]
                
              )
            }
          }
        }
      }
      html
    }
  }
`;
