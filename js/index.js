document.addEventListener('DOMContentLoaded', function () {
    showDivs(0, 0);
    showDivs(0, 1);
    showDivs(0, 2);
    showDivs(0, 3);
});
var slideIndex = [1, 1];
var slideId = ["popularMoviesSlides", "recomendedMoviesSlides", "trendingMoviesSlides", "awardWinningMoviesSlides"]
function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}


function showVideo(movieCard) {
    var movie = movieCard.querySelector(".movie");
    var myVideo = movieCard.querySelector("#movieTeaser");
    movie.style.display = "none";
    myVideo.style.display = "block";
    myVideo.play();
}

function hideVideo(movieCard) {
    var movie = movieCard.querySelector(".movie");
    var myVideo = movieCard.querySelector("#movieTeaser");
    movie.style.display = "block";
    movie.style.justifyContent = "flex-end";
    myVideo.style.display = "none";
    myVideo.pause();
}


const headLineVideo = document.getElementById('headlineMovieteaser');
const mutedVideoButton = document.getElementById('muted-button');
const unmutedVideoButton = document.getElementById('unmuted-button');

mutedVideoButton.addEventListener('click', function () {
    console.log("muted clicked")
    headLineVideo.muted = false;
    mutedVideoButton.style.display = "none";
    unmutedVideoButton.style.display = "block";
})
unmutedVideoButton.addEventListener('click', function () {
    console.log("unmuted clicked")
    headLineVideo.muted = true;
    mutedVideoButton.style.display = "block";
    unmutedVideoButton.style.display = "none";
})
