import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate";
import RecommendIcon from '@mui/icons-material/Recommend';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard= forwardRef(({ movie }, ref) => {
  return (
    <div  ref={ref} className='videoCard'>
        <img
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt='movie poster'
        />

        <TextTruncate
             line={1}
             element="p"
             truncateText="..."
             text={movie.overview}
        />
           
        <h2> {movie.title || movie.orginal_name} </h2>

        <p className='videoCard__stats'>
            <p> 
                {movie.media_type && `${movie.media_type} *`}
                { movie.release_date || movie.first_airdate} *
                <RecommendIcon/>{" "}
                {movie.vote_count} 
            </p>
        </p>
        
    </div>
  );
});

export default VideoCard