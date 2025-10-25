/**
 * Dev portfolio | main content page
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"

import ProfileHeader from "../components/header/profileHeader"
import ProjectShowcase from "../components/showcase/projectShowcase"
import ContactMe from "../components/contactMe"
import TechnologiesUsed from "../components/technologiesUsed"
import Footer from "../components/footer"

import "../utils/bootstrapImport.scss"
import "@fontsource-variable/tasa-orbiter"
import {
    headStripe,
    showcaseContainer,
    sectionHeading,
} from "./index.module.css"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <div className={`${headStripe} bg-primary`}></div>
            <div className="container">
                <main>
                    <ProfileHeader />
                    <div className="d-flex justify-content-center mt-1">
                        <div className={showcaseContainer}>
                            <section>
                                <h2 className={`${sectionHeading} my-3`}>
                                    Technologies
                                </h2>
                                <TechnologiesUsed />
                            </section>
                            <h2 className={`${sectionHeading} my-3`}>
                                Featured Projects
                            </h2>
                            <p>
                                Here are some of my favourite projects I've
                                worked on:
                            </p>
                            <ProjectShowcase />
                            <section>
                                <h2 className={`${sectionHeading} my-3`}>
                                    Let's talk
                                </h2>
                                <ContactMe />
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default IndexPage

export const Head: HeadFC = () => {
    const data = useStaticQuery(graphql`
        query PageMetaQuery {
            site {
                siteMetadata {
                    title
                    name
                    description
                }
            }
        }
    `)

    return (
        <>
            <title>
                {data.site.siteMetadata.title} by {data.site.siteMetadata.name}
            </title>
            <meta
                name="description"
                content={data.site.siteMetadata.description}
            />
        </>
    )
}
