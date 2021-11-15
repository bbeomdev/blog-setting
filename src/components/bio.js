/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)
  
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <p>
          Written by <strong>{author.name}</strong>
          </p>
          <p>{author?.summary || null}
          {` `}
          </p>
          <p>
          <a href='https://www.github.com/enjoywave' target > {/*${social?.github || ``}`}>*/} GitHub </a>
          <a href='https://www.instagram.com/oiii.ov/'> Instagram </a>
          </p>
        </p>
      )}
    </div>
  )
}

export default Bio
