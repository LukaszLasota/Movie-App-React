import React from 'react';

const MovieListHeading = (props) =>{
    return(
        <div className="row pl-5 p-3">
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading;