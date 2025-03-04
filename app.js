// https://www.omdbapi.com/?apikey=74a7591a&s=fast

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=74a7591a&s=fast")
    const moviesData = await movies.json();
    console.log(
    moviesData
    .map( 
        (movie) => `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg" alt="">
    </figure>
    <div class="movie__wrapper--bg"></div>
    <div class="movie__description">
     <div class="movie__description--title">
      <a href="#"><i class="fa-solid fa-film"></i></a>
        <h3 class="movie__title">
          The Fast And The Furious
        </h3>
        </div>
        <div class="movie__release--date">
          <a href="#"><i class="fa-solid fa-calendar-days"></i></a>
            <h2 class="release__date">
                2001
            </h2>
     </div>
    </div>
</div>
</div>`)
.join("")
    );
}
main();
