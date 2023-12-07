

export const fetchGenres = async ()=>{
    try{
        const res= await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1105341b426cb5e8ab3e1d7689a8a4a5&language=ko-KR');
        const data = await res.json();
        const genreMap = data.genres.reduce((acc,genre)=>{
            acc[genre.id]=genre.name;
            return acc
        },{})
        return genreMap
    }catch(error){
        console.error(error);
    }
}