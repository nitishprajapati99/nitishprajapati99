const searchBtn = document.getElementById('search-btn');
const SearchMovie = document.getElementById('search-box')
const movie_List = document.getElementById('movie-list');



const apiKey = "7908bcc8";


const getmovies = async()=>{
    const movieName = SearchMovie.value.trim(); 
    if (!movieName) {
        alert("Please enter a movie name!");
        return;
    }
    const apiUrl = `https://omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    try{
        movie_List.innerHTML ='<h1>Loading....</h1>';
        const response = await fetch(apiUrl);
        const data = await response.json();
         if (data.Response === "False") {
      movie_List.innerHTML = "<h1>Movie not found!</h1>";
      return;
    }
        console.log(data);
          movie_List.innerHTML = `
  <div class="movie-card">
    <img src="${data.Poster}" alt="${data.Title}">
    <div class="movie-info">
      <h2>${data.Title}</h2>
      <p><strong>Year:</strong> ${data.Year}</p>
      <p><strong>Runtime:</strong> ${data.Runtime}</p>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
    </div>
  </div>
`;


     
    }
    catch(error){
         movie_List.innerText = "An error happened, try again later.";
        console.log(error);
    }
    

}
// getmovies();

searchBtn.addEventListener("click", getmovies);
