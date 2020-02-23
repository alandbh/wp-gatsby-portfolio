import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import Img from 'gatsby-image';

class Work extends Component {
  render() {
      const post = this.props.data.wordpressWpWorks

      console.log(post.featured_media.localFile.childImageSharp.fixed)

      // Setting the image parameters manually
      const imageSrcManual = {
        src: post.featured_media.localFile.childImageSharp.fixed.src,
        width: 360,
        height: 360,
        srcSet: post.featured_media.localFile.childImageSharp.fixed.src
      }

      // Setting the image loading parameters automatically via GatsbyImageSharp
      const imageSrcAuto = post.featured_media.localFile.childImageSharp.fixed
      
    return (
      <Layout>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <h2>Image manually set</h2>
        <Img style={{backgroundColor: 'red'}} fixed={imageSrcManual} />
        
        <h2>Image automatially set</h2>
        <Img fixed={imageSrcAuto} />
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
          childImageSharp {
            fixed(width: 360, height: 360) {
              ...GatsbyImageSharpFixed
              src
            }
          }
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
