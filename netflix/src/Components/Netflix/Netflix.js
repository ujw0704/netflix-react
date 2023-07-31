import React, { useState } from 'react'
import axios from "axios"
import "./Netflix.css"
function Netflix() {
  const [movieName, setMovies] = useState('');
  const [data, setdata] = useState([])
  const [ tariler, setTrailer]=useState(" ")

  function movie() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ea85630803e293cff396198c4410a67b&language=en-US&query=${movieName}&page=1&include_adult=false`)
      .then(response => {
        console.log(response)
        setdata(response.data.results)
        console.log(response.data.results)
      })

  }

  // function  handeleSubmit(movie){
  //   if(tariler)(taril){

  //   }
    
  // }

  // console.log(data)

  let url = "https://image.tmdb.org/t/p/original"
  return (
    <div className="movieCnt">
      <div className='searchDiv'>
        <input type="text" placeholder='search' value={movieName} onChange={(e => setMovies(e.target.value))}></input>
        <button onClick={movie}>Submit</button>
      </div>

      <div className='movies'> 
      {
        data.map((prduct, index) => {
          return <div className="movie" key={index}>
            {(prduct.backdrop_path)?
            <img className='movie-img' src={url + prduct.backdrop_path} alt='' />:
            <img className='movie-img' src={''} alt='EMPTY' />

        }
            <h4>{prduct.original_title}</h4>
            {
              console.log(url + prduct.backdrop_path)

            }

{/* 
onClick={()=>handeleSubmit(movie)}   */}

          </div>

})
}
       </div>
    </div>
  )
}


export default Netflix