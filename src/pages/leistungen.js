import React from "react";

import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import BackgroundImage from "gatsby-background-image";

const LeistungenPage = ({ data }) => {
  const { frontmatter } = data.forLayout;
  const { placeholderImage } = data;

  return (
    <Layout
      herosection={frontmatter.herosection}
      content={frontmatter.news.content}
      contact={frontmatter.contact}
      footer={frontmatter.footer}
    >
      <Helmet>
        <html lang="de" />
        <title>Zahnarztpraxis Dr. Sandra Faltermeier Leistungsübersicht</title>
        <meta
          name="description"
          content="Alle Leistungen meiner Praxis in der Übersicht."
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Leistungsübersicht"
        />
        <meta property="og:url" content="/leistungen" />
        <meta
          property="og:description"
          content="Alle Leistungen meiner Praxis in der Übersicht."
        />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/behandlungszimmer.jpg`}
        />
      </Helmet>
      <main>
        <BackgroundImage
          class="h-72 md:h-96 bg-cover flex items-center mb-50p sm:mb-100p"
          fluid={placeholderImage.childImageSharp.fluid}
        >
          <div class="p-5 mini:p-25p md:p-50p mx-auto sm:mx-0 sm:ml-12 bg-opacity-80 bg-white">
            <h1 class="text-primary font-bold text-25p sm:text-40p">
              Leistungen
            </h1>
            <h2 class="text-secondary font-medium text-20p sm:text-25p mb-15p sm:mb-35p">
              Unsere Leistungen in der Übersicht
            </h2>
          </div>
        </BackgroundImage>
        <nav class="mx-auto flex flex-col md:flex-row justify-between md:items-between max-w-1000p px-5 mini:px-25p">
          <div class="mx-auto md:mx-0 md:flex md:flex-col md:justify-between">
            <div class="flex flex-col">
              <h2 class="mb-15p sm:mb-35p text-primary font-bold text-25p sm:text-40p">
                Ästhetik
              </h2>
              <Link
                to="/leistungen/amalgamsanierung"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Amalgamsanierung
              </Link>
              <Link
                to="/leistungen/kunststofffuellungen"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Kunststofffüllungen
              </Link>
              <Link
                to="/leistungen/keramikinlays-onlays"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Keramikinlays/onlays
              </Link>
              <Link
                to="/leistungen/keramischer-zahnersatz"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Keramischer Zahnersatz
              </Link>
              <Link
                to="/leistungen/veneers"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Veneers
              </Link>
            </div>
            <div class="flex flex-col">
              <h2 class="mb-15p sm:mb-35p text-primary font-bold text-25p sm:text-40p">
                Parodontologie
              </h2>
              <Link
                to="/leistungen/parodontitistherapie"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Parodontitistherapie
              </Link>
            </div>
            <div class="flex flex-col">
              <h2 class="mb-15p sm:mb-35p text-primary font-bold text-25p sm:text-40p">
                Prophylaxe
              </h2>
              <Link
                to="/leistungen/mundhygiene"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Mundhygiene
              </Link>
            </div>
          </div>
          <div class="mx-auto md:mx-0 md:flex md:flex-col md:justify-between">
            <div class="flex flex-col">
              <h2 class="mb-15p sm:mb-35p text-primary font-bold text-25p sm:text-40p">
                Oralchirurgie
              </h2>
              <Link
                to="/leistungen/prf-methode"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                PRF Methode
              </Link>
              <Link
                to="/leistungen/knochenaufbau"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Knochenaufbau
              </Link>
              <Link
                to="/leistungen/weisheitszahnentfernung"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Weisheitszahnentfernung
              </Link>
              <Link
                to="/leistungen/zahnentfernung"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Zahnentfernung
              </Link>
            </div>
            <div class="flex flex-col">
              <h2 class="mb-15p sm:mb-35p text-primary font-bold text-25p sm:text-40p">
                Implantologie
              </h2>
              <Link
                to="/leistungen/keramikimplantate"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Keramikimplantate
              </Link>
            </div>
            <div class="flex flex-col">
              <h2 class="mb-15p sm:mb-35p text-primary font-bold text-25p sm:text-40p">
                Zahnschienen
              </h2>
              <Link
                to="/leistungen/schienentherapie"
                class="text-20p sm:text-25p mb-15p sm:mb-35p"
              >
                Schienentherapie
              </Link>
            </div>
          </div>
        </nav>
      </main>
    </Layout>
  );
};

export default LeistungenPage;

export const LeistungenPageQuery = graphql`
  query leistungenPageQuery {
    placeholderImage: file(relativePath: { eq: "behandlungszimmer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
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
