import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";

import { Helmet } from "react-helmet";

const KeramischerZahnersatzPage = ({ data }) => {
  const { frontmatter } = data.forLayout;
  const { html } = data.markdownRemark;
  const pageFrontmatter = data.markdownRemark.frontmatter;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="de" />
        <title>
          Keramischer Zahnersatz - Zahnarztpraxis Dr. Sandra Faltermeier
        </title>
        <meta
          name="description"
          content="Hier werden verschiedene Arten des Zahnersatzes vorgestellt. Darunter zählen Prothesen, Kronen, Teilkronen und Implantate."
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Keramischer Zahnersatz - Zahnarztpraxis Dr. Sandra Faltermeier"
        />
        <meta
          property="og:description"
          content="Hier werden verschiedene Arten des Zahnersatzes vorgestellt. Darunter zählen Prothesen, Kronen, Teilkronen und Implantate."
        />
        <meta property="og:url" content="/leistungen/keramischer-zahnersatz" />
      </Helmet>
      <Layout
        herosection={frontmatter.herosection}
        content={frontmatter.news.content}
        contact={frontmatter.contact}
        footer={frontmatter.footer}
      >
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

export default KeramischerZahnersatzPage;

export const query = graphql`
  {
    markdownRemark(
      frontmatter: { templateKey: { eq: "keramischer-zahnersatz-page" } }
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
                layout: FULL_WIDTH
                formats: [AVIF, WEBP, AUTO]
                placeholder: BLURRED
              )
            }
          }
        }
      }
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
