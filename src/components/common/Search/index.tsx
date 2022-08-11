import React, {FC} from 'react'
import "./index.css"

interface SearchPropTypes {
    onChange: Function
    handleSearchClick: Function
}

const Search : FC <SearchPropTypes> = ({onChange, handleSearchClick}) => {
    return <div className='search'>
        <input type ="text" placeholder='Search for movie, tv shows and person' onChange={(e)=>onChange(e.target.value)}/>
       
        <button className='search-button' onClick={()=>handleSearchClick()}>
            Search
        </button>
       
    </div>
} 

export default Search