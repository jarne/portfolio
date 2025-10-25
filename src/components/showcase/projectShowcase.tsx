/**
 * Dev portfolio | project showcase component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image"

import {
    projectTitle,
    technologyBadgesLine,
    featureHeading,
} from "./projectShowcase.module.css"

type Project = {
    name: string
    slogan: string
    description: string
    license: string
    screenshot: string
    languages: string[]
    frameworks: string[]
    tools: string[]
    urls: {
        source: string
    }
    features: {
        title: string
        description: string
    }[]
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
                        slogan
                        description
                        license
                        screenshot
                        languages
                        frameworks
                        tools
                        urls {
                            source
                        }
                        features {
                            title
                            description
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
                <a
                    href={node.urls.source}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {renderProjectScreenshot(node.screenshot)}
                    <h3 className={`${projectTitle} mt-2 mb-2`}>
                        {node.slogan}
                    </h3>
                </a>
                <p className={technologyBadgesLine}>
                    {node.languages.map(language => (
                        <span
                            key={language}
                            className="badge text-bg-language me-1 mb-1"
                        >
                            {language}
                        </span>
                    ))}
                    {node.frameworks.map(framework => (
                        <span
                            key={framework}
                            className="badge text-bg-framework me-1 mb-1"
                        >
                            {framework}
                        </span>
                    ))}
                    {node.tools.map(tool => (
                        <span key={tool} className="badge text-bg-tool me-1 mb-1">
                            {tool}
                        </span>
                    ))}
                </p>
                <p>{node.description}</p>
                <div className="row">
                    {node.features.map((feature, featIndex) => (
                        <div key={featIndex} className="col-6 col-md-3">
                            <h5 className={featureHeading}>{feature.title}</h5>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        ),
    )
}

export default ProjectShowcase
