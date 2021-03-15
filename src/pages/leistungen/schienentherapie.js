import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";

import { Helmet } from "react-helmet";

const SchienentherapiePage = ({ data }) => {
  const { html } = data.markdownRemark;
  const pageFrontmatter = data.markdownRemark.frontmatter;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="de" />
        <title>Schienentherapie - Zahnarztpraxis Dr. Sandra Faltermeier</title>
        <meta
          name="description"
          content="Emotionaler Stress wird bei vielen Menschen in Form von Zähneknirschen abgebaut. Dies geschieht meist nachts und führt langfistig zu abgeschliffenen Zähnen. Die teils enormen Kräfte belasten sowohl die Kaumuskulatur als auch die Hals-Nacken-und Rückenmuskulatur."
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Schienentherapie - Zahnarztpraxis Dr. Sandra Faltermeier"
        />
        <meta
          property="og:description"
          content="Emotionaler Stress wird bei vielen Menschen in Form von Zähneknirschen abgebaut. Dies geschieht meist nachts und führt langfistig zu abgeschliffenen Zähnen. Die teils enormen Kräfte belasten sowohl die Kaumuskulatur als auch die Hals-Nacken-und Rückenmuskulatur."
        />
        <meta property="og:url" content="/leistungen/schienentherapie" />
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

export default SchienentherapiePage;

export const query = graphql`
  {
    markdownRemark(
      frontmatter: { templateKey: { eq: "schienentherapie-page" } }
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
