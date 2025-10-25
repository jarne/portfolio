/**
 * Dev portfolio | project showcase component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image"

import { projectTitle } from "./projectShowcase.module.css"

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

const ProjectShowcase = () => {
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
                className="border border-1 rounded"
                alt="Project screenshot"
            />
        ) : null
    }

    return data.allProjectsJson.edges.map(
        ({ node }: ProjectsEdge, index: number) => (
            <section key={index} className="mb-4">
                {renderProjectScreenshot(node.screenshot)}
                <h2 className={`${projectTitle} mt-2 mb-2`}>{node.name}</h2>
                <p>
                    {node.languages.map(language => (
                        <span
                            key={language}
                            className="badge text-bg-language me-1"
                        >
                            {language}
                        </span>
                    ))}
                    {node.frameworks.map(framework => (
                        <span
                            key={framework}
                            className="badge text-bg-framework me-1"
                        >
                            {framework}
                        </span>
                    ))}
                    {node.tools.map(tool => (
                        <span key={tool} className="badge text-bg-tool me-1">
                            {tool}
                        </span>
                    ))}
                </p>
                <p>{node.description}</p>
            </section>
        ),
    )
}

export default ProjectShowcase
