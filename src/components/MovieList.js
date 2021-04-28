import React from 'react';

const MovieList = (props) =>{
    
        const FavouriteComponent = props.favouriteComponent;

        return(
            <>
            {
                    props.movies.map((movie, index) => 
                    <div className='image-container d-flex justify-contetnt-start m-3' key={index} >
                        <img src={movie.Poster} alt="movie" /> 
                        <div onClick={() =>props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-contetnt-center">
                            <FavouriteComponent />
                        </div>
                    </div>
                )
            }
            </>
        );
    
    
}

export default MovieList;