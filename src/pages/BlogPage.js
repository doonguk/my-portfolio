import React from 'react';
import BlogTemplate from 'components/BlogTemplate';
import queryString from 'query-string'
const BlogPage = ({location, match}) => {

    const query = queryString.parse(location.search);
    return(
        <div>
            <BlogTemplate
             query={query}
             params={match.params}
             />
        </div>
    )
}

export default BlogPage;