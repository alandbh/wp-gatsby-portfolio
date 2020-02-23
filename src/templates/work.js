import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/layout'

class Work extends Component {
  render() {
      const post = this.props.data.wordpressWpWorks

      console.log(post)
      
    return (
      <Layout>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <h2>Abs path</h2>
        <img src={post.featured_media.localFile.absolutePath} alt=""/>
        <h2>url</h2>
        <img src={post.featured_media.localFile.url} alt=""/>
        <h2>Relative path</h2>
        <img src={post.featured_media.localFile.relativePath} alt=""/>
      </Layout>
    )
  }
}

Work.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Work

export const postQuery = graphql`
  query($id: String!) {
    wordpressWpWorks(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
            absolutePath
            url
            relativePath
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
