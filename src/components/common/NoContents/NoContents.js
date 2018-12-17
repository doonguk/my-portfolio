import React from 'react';
import { Link } from 'react-router-dom';

const NoContents = () => {
    const style={
        textDecoration : 'none'
    }
    return(
        <>
            <h1>Sorry</h1>
            <h3>No results were found.. <Link to="/search" style={style}>try research</Link></h3>
        </>
    )
}

export default NoContents;