/**
 * Dev portfolio | used technologies badges component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type WeightedTechnology = {
    name: string
    count: number
}

const TechnologiesUsed = () => {
    const data = useStaticQuery(graphql`
        query ProjectTechnologiesQuery {
            allProjectsJson {
                edges {
                    node {
                        languages
                        frameworks
                        tools
                    }
                }
            }
        }
    `)

    const languages: WeightedTechnology[] = []
    const frameworks: WeightedTechnology[] = []
    const tools: WeightedTechnology[] = []

    data.allProjectsJson.edges.forEach((edge: any) => {
        const project = edge.node

        project.languages.forEach((language: string) => {
            const existing = languages.find(l => l.name === language)
            if (existing) {
                existing.count += 1
            } else {
                languages.push({ name: language, count: 1 })
            }
        })

        project.frameworks.forEach((framework: string) => {
            const existing = frameworks.find(f => f.name === framework)
            if (existing) {
                existing.count += 1
            } else {
                frameworks.push({ name: framework, count: 1 })
            }
        })

        project.tools.forEach((tool: string) => {
            const existing = tools.find(t => t.name === tool)
            if (existing) {
                existing.count += 1
            } else {
                tools.push({ name: tool, count: 1 })
            }
        })
    })

    languages.sort((a, b) => b.count - a.count)
    frameworks.sort((a, b) => b.count - a.count)
    tools.sort((a, b) => b.count - a.count)

    return (
        <>
            <p>
                I had the chance to gain experience with the following
                technologies:
            </p>
            <p>
                {languages.map(language => (
                    <span
                        key={language.name}
                        className="badge text-bg-language me-1 mb-1"
                    >
                        {language.name}
                    </span>
                ))}
                {frameworks.map(framework => (
                    <span
                        key={framework.name}
                        className="badge text-bg-framework me-1 mb-1"
                    >
                        {framework.name}
                    </span>
                ))}
                {tools.map(tool => (
                    <span
                        key={tool.name}
                        className="badge text-bg-tool me-1 mb-1"
                    >
                        {tool.name}
                    </span>
                ))}
            </p>{" "}
        </>
    )
}

export default TechnologiesUsed
