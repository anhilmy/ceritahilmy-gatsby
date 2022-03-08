import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
    const post = data.allWpPost.nodes[0]
    console.log(post)
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </Layout>
    )
}

export default BlogPost;

export const query = graphql`
    query($slug: String!) {
        allWpPost(filter: {slug: {eq : $slug}}){
            nodes {
                title
                content
            }
        }
    }
`