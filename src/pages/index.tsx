/**
 * Dev portfolio | main content page
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image"

import ProfileHeader from "../components/header/profileHeader"

import "../utils/bootstrapImport.scss"

type Project = {
    name: string
    description: string
    license: string
    screenshot: string
    languages: string[]
    frameworks: string[]
    tools: string[]
    urls: {
        source: string
    }
}
type ProjectsEdge = {
    node: Project
}
type DataQuery = {
    allProjectsJson: {
        edges: ProjectsEdge[]
    }
    allFile: {
        edges: {
            node: {
                name: string
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }
        }[]
    }
}

const IndexPage: React.FC<PageProps> = () => {
    const data = useStaticQuery<DataQuery>(graphql`
        query ProjectDetailsQuery {
            allProjectsJson {
                edges {
                    node {
                        name
                        description
                        license
                        screenshot
                        languages
                        frameworks
                        tools
                        urls {
                            source
                        }
                    }
                }
            }
            allFile(
                filter: { relativePath: { regex: "/project-screenshots//" } }
            ) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(
                                width: 960
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                            )
                        }
                    }
                }
            }
        }
    `)

    const renderProjectScreenshot = (
        screenshotName: string,
    ): React.ReactNode | null => {
        const fileEdge = data.allFile.edges.find(
            edge => edge.node.name === screenshotName,
        )
        return fileEdge ? (
            <GatsbyImage
                image={fileEdge.node.childImageSharp.gatsbyImageData}
                alt="Project screenshot"
            />
        ) : null
    }

    return (
        <main className="container">
            <ProfileHeader />
            <ul>
                {data.allProjectsJson.edges.map(
                    ({ node }: ProjectsEdge, index: number) => (
                        <li key={index}>
                            <h2>{node.name}</h2>
                            <p>{node.description}</p>
                            {renderProjectScreenshot(node.screenshot)}
                        </li>
                    ),
                )}
            </ul>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
