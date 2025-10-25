/**
 * Dev portfolio | main content page
 */

import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import ProfileHeader from "../components/header/profileHeader"
import ProjectShowcase from "../components/showcase/projectShowcase"
import { showcaseContainer } from "./index.module.css"

import "../utils/bootstrapImport.scss"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main className="container">
            <ProfileHeader />
            <div className="d-flex justify-content-center">
                <div className={showcaseContainer}>
                    <ProjectShowcase />
                </div>
            </div>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
