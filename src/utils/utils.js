const omdbURL="https://www.omdbapi.com/?";

export const getMovieDetailsById= async(movieID)=>{
    const fetchData= await fetch(
        `${omdbURL}apikey=${process.env.REACT_APP_OMDB_API}&i=${movieID}`
    );
    const jsonData = await fetchData.json();
    return jsonData;

}

export const getMoviesBySearchTerm= async(searchTerm)=>{
    const res= await fetch(
        `${omdbURL}apikey=${process.env.REACT_APP_OMDB_API}&s=${searchTerm}`
    );
    if(!res.ok){
        return Promise.reject(res.statusText);
    }
    const movies=await res.json();
    if(movies){
        return movies
    }
    
}