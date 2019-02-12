import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

export default () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" />
        {/* Google / Search Engine Meta Tags */}
        <meta itemprop="name" content={data.site.siteMetadata.author} /> />
        <meta
          itemprop="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
    )}
  />
);
