import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Dev Portfolio",
        description: "Development portfolio showcasing my projects and skills.",
        siteUrl: "https://www.yourdomain.tld",
        name: "Jarne",
        bio: "👨‍💻 JavaScript PHP Swift | 🧱 React Next.js Gatsby Docker | 📚 Business Informatics student",
        location: "Germany",
        email: "dev@jarne.rocks",
        githubProfileUrl: "https://github.com/jarne",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
                ignore: ["**/\.*"],
                fastHash: true,
            },
        },
    ],
}

export default config
