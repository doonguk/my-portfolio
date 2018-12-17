import React from 'react';
import { withRouter } from 'react-router-dom';
import MainBlog from 'components/MainBlog';

const MainBlogContainer = ({history}) => {
    const handlePush = (category) => {
        history.push(`/tag/${category}`);
    }
    return(
        <MainBlog
        onPush={handlePush}
        />
    )
}

export default withRouter(MainBlogContainer);