/**
 * Dev portfolio | main content page
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"

import ProfilePicture from "../components/profilePicture"

import "../utils/bootstrapImport.scss"

type Project = {
    name: string
    description: string
}
type ProjectsEdge = {
    node: Project
}
type DataQuery = {
    allProjectsJson: {
        edges: ProjectsEdge[]
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
                    }
                }
            }
        }
    `)

    return (
        <main>
            <h1>Test 123</h1>
            <ProfilePicture />
            <ul>
                {data.allProjectsJson.edges.map(
                    ({ node }: ProjectsEdge, index: number) => (
                        <li key={index}>
                            <h2>{node.name}</h2>
                            <p>{node.description}</p>
                        </li>
                    ),
                )}
            </ul>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
