// https://www.omdbapi.com/?apikey=74a7591a&s=fast
function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }
  
let hasMovies;


async function renderMovies(filter) {
    const movieTitle = document.querySelector(".movie__Title").value
    const movies = await fetch(`https://www.omdbapi.com/?apikey=74a7591a&s=${movieTitle}`);
    const moviesData =  await movies.json();
    const moviesList = document.querySelector(".movies");
    
    // console.log(moviesData);


    // moviesList.classList += ' movies__loading'

    if(!movies === true) {
       moviesList.classList += ' movies__loading'
    }
        moviesList.classList.remove('movies__loading')

    // moviesList.classList.remove('movies__loading')

    if(filter === 'OLD_TO_NEW') {
        moviesData.Search.sort((a,b) => (a.Year) - (b.Year));
    }
    else if(filter === 'NEW_TO_OLD') {
        moviesData.Search.sort((a,b) => (b.Year) - (a.Year));
    }

    moviesList.innerHTML = moviesData.Search.slice(0,6).map((movie) =>
         `<div class="movie">
        <figure class="movie__img--wrapper">
            <img class="movie__img" src="${movie.Poster}" alt="">
        </figure>
        <div class="movie__wrapper--bg"></div>
        <div class="movie__description">
         <div class="movie__description--title">
          <a href="#"><i class="fa-solid fa-film"></i></a>
            <h3 class="movie__title">
             ${movie.Title}
            </h3>
            </div>
            <div class="movie__release--date">
              <a href="#"><i class="fa-solid fa-calendar-days"></i></a>
                <h2 class="release__date">
                   ${movie.Year}
                </h2>
         </div>
        </div>
    </div>
    </div>`
)
    .join("")
};
function filterMovies(event) {
    renderMovies(event.target.value);
  }

  setTimeout(() => {
    renderMovies();
  });

//   function renderMovies() {
//     return new Promise((resolve) => {
//         setTimeout (() => {
//             resolve([

//             ]);
//         },1000);
//     });
//   }


const textbox = document.getElementById("searchText");
textbox.addEventListener("keypress", function renderMovies(event) {
    if(KeyboardEvent.keyCode === '13') {
        document.getElementById("searchBtn").click();
        
    }
    else if(KeyboardEvent.keyCode !== '13') {
        return false;
    }
});



 
 