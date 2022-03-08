import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import AuthorBio from "../components/author-bio";

const WpPost = ({
    data: {
        wpPost: { title, id, content, author },
    },
}) => {
    return (
        <Layout>
            <div className={`post-${id}`}>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                <AuthorBio author={author.node}></AuthorBio>
            </div>
        </Layout>
    )
}

export default WpPost

export const query = graphql`
    query ($id: String!) {
        wpPost(id: {eq: $id}){
            id
            title
            content
            author {
                node {
                    ...AuthorBio
                }
            }
        }

    }
`