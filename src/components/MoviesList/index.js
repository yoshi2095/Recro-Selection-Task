import React from 'react'
import Tabs from '../common/Tabs'
import "./index.css"
import Carousel from 'react-grid-carousel';
import { Rating } from 'react-simple-star-rating'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export default function MoviesList({movies=[], selectedType, setSelectedType, query, searchClicked, showResult}) {
    function calculateAverage(value) {
        return (value/10)*5
    }
    return <div className='movies-list' >
        {
            movies ? <>
                <div className='list-header'>
                    {
                        showResult ? <div className='list-header-text'>
                            Results
                        </div> : <div className='list-header-text'>
                            What's Popular
                        </div> 
                    }

                    {
                        showResult ? null :
                        <Tabs selectedType={selectedType} setSelectedType={(type)=>{
                            setSelectedType(type)
                        }} />
                    }
                </div>
       
                <div className='list-items' key = {uuidv4()}>
                    <Carousel cols={6} rows={1} gap={16} loop >
                        {
                            movies.map(movie => {
                                return <Carousel.Item>
                                    <img className='movie-image' width="100%" src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`} />
                                    <div className='movie-name'>
                                        {movie.original_title || movie.name}
                                    </div>
                                    <div className='movie-date'>
                                        {moment(movie.release_date).format('MMM DD, YYYY')}
                                    </div>
                                    <div className='movie-rating' >
                                        <Rating initialValue={()=>{
                                            calculateAverage(movie.vote_average)
                                        }} size={15} />
                                    </div>
                            </Carousel.Item>
                            })
                        }
                    </Carousel>
                </div> 
            </> : null
        }
    </div>
}