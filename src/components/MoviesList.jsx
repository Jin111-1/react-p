import { movies } from "./data/Movies";

function MoviesList (){
    return(
        <div>
            {movies.map((item ,title)=>{
                return(
                    <div key={title}>
                        
                        <div >
                        title : {item.title} ({item.year})
                        </div>
                        
                        <div >
                        director : {item.director}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default MoviesList