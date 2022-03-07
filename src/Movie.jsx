import React from 'react'

const Movie = ({ movie: {imdbID, Title, Type, Year, Poster}}) => {
  return (
    <div className='movie' key={imdbID}>
        <div>
            <p>{Year}</p>
        </div>

        <div>
            <img src={Poster} alt={Title} />
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
    </div>
  )
}

export default Movie