import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Pedro Carara's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Pedro Carara" />
        <InterestsSection sectionId="details" heading="My skills" />
        <ProjectsSection sectionId="features" heading="My projects" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
