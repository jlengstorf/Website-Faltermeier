import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { ReactComponent as Back } from "../img/chevron-left-solid.svg";

const PraxisPage = ({ data }) => {
  const praxisFrontmatter = data.praxisData.frontmatter;

  return (
    <Layout>
      <Helmet>
        <html lang="de" />
        <title>Zahnarztpraxis Dr. Sandra Faltermeier Praxis</title>
        <meta
          name="description"
          content="Hier stelle ich mich und meine Praxis vor"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Zahnarztpraxis Dr. Sandra Faltermeier Praxis"
        />
        <meta
          name="og:description"
          content="Hier stelle ich mich und meine Praxis vor"
        />
        <meta property="og:url" content="/Praxis" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/behandlungszimmer.jpg`}
        />
      </Helmet>
      <div class="max-w-1000p px-5 mini:px-25p mt-50p sm:mt-100p mx-auto">
        <div class="flex flex-col md:flex-row">
          <div class="w-1/2 mx-auto md:w-full md:mr-10 mb-5 md:mb-0">
            <GatsbyImage
              loading="eager"
              image={
                praxisFrontmatter.imageObject.image.childImageSharp
                  .gatsbyImageData
              }
              alt={praxisFrontmatter.imageObject.alt}
            />
          </div>
          <div>
            <h1 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
              {praxisFrontmatter.name}
            </h1>
            <table class="text-left">
              {praxisFrontmatter.cv.map((el) => (
                <tr class="flex flex-col md:table">
                  <nobr>
                    <td class="p-0 pb-15p sm:pb-25p text-secondary align-text-top text-20p sm:text-25p pr-4 min-w-12rem">
                      {el.timespan}
                    </td>
                  </nobr>
                  <td class="p-0 pb-15p sm:pb-25p text-15p mini:text-16p sm:text-18p">
                    {el.activity}
                  </td>
                </tr>
              ))}
              {praxisFrontmatter.volunteering.map((el) => (
                <tr class="flex flex-col md:table">
                  <nobr>
                    <td class="p-0 pb-15p sm:pb-25p text-secondary align-text-top text-20p sm:text-25p pr-4 min-w-12rem">
                      {el.timespan}
                    </td>
                  </nobr>
                  <td class="p-0 pb-15p sm:pb-25p text-15p mini:text-16p sm:text-18p text-secondary">
                    {el.activity}
                  </td>
                </tr>
              ))}
            </table>
            <div class="space-y-2">
              {praxisFrontmatter.memberships.map((el) => (
                <div class="text-cta text-15p mini:text-16p sm:text-18p">
                  {el.membership}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="carousel-wrapper text-center mt-100p sm:mt-200p">
          <h2 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
            {praxisFrontmatter.photosection.title}
          </h2>
          <h3 class="mb-40p sm:mb-80p text-secondary font-medium text-20p sm:text-25p">
            {praxisFrontmatter.photosection.subtitle}
          </h3>
          <CarouselProvider
            className="relative"
            isPlaying
            infinite
            naturalSlideWidth={5496}
            naturalSlideHeight={3664}
            totalSlides={praxisFrontmatter.photosection.pictures.length}
          >
            <Slider class="absolute">
              {praxisFrontmatter.photosection.pictures.map((item, index) => (
                <Slide index={index}>
                  <GatsbyImage
                    loading="auto"
                    image={
                      item.imageObject.image.childImageSharp.gatsbyImageData
                    }
                    alt={item.imageObject.alt}
                  />
                </Slide>
              ))}
            </Slider>
            <ButtonBack className="w-12 h-20 bg-white bg-opacity-50 absolute my-auto top-0 bottom-0 left-0 focus:outline-none">
              <Back class="w-1/2 h-1/2 m-auto text-secondary fill-current" />
            </ButtonBack>
            <ButtonNext className="w-12 h-20 bg-white bg-opacity-50 absolute my-auto top-0 bottom-0 right-0 focus:outline-none">
              <Back class="w-1/2 h-1/2 m-auto text-secondary fill-current transform rotate-180" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    </Layout>
  );
};

export default PraxisPage;

export const PraxisPageQuery = graphql`
  query praxisPageQuery {
    praxisData: markdownRemark(
      frontmatter: { templateKey: { eq: "praxis-page" } }
    ) {
      frontmatter {
        name
        photosection {
          title
          subtitle
          pictures {
            imageObject {
              title
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AVIF, WEBP, AUTO]
                    quality: 80
                    
                  )
                }
              }
            }
          }
        }
        memberships {
          membership
        }
        cv {
          activity
          timespan
        }
        volunteering {
          activity
          timespan
        }
        imageObject {
          title
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                formats: [AVIF, WEBP, AUTO]
                quality: 80
                
              )
            }
          }
        }
      }
    }
  }
`;
