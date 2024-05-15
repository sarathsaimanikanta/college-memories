let movies = [
    {
        name:"vishnu 2019",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.35_d4872f0b.jpg?v=1714760537238",
        year:2019,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },



    {
        name:"vishnu 2020",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.35_4c204bd2.jpg?v=1714760522395",
        year:2020,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },



    {
        name:"vishnu 2021 ",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.35_232bb7e6.jpg?v=1714760530206",
        year:2021,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },



    {
        name:"vishnu 2022",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.36_1c9b476a.jpg?v=1714760542893",
        year:2022,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },



    {
        name:"vishnu 2023",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.36_8da70442.jpg?v=1714760546457",
        year:2023,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },



    {
        name:"vishnu 2024",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.36_71ec0f4b.jpg?v=1714760553641",
        year:2024,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },
    {
        name:"vishnu 2018",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.34_21b2ec5b.jpg?v=1714760505488",
        year:2018,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },
    {
        name:"vishnu 2017",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.34_c5e11e8b.jpg?v=1714760516436",
        year:2017,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },
    {
        name:"vishnu 2015",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.33_f0ea9597.jpg?v=1714760486338",
        year:2015,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },
    {
        name:"vishnu 2016",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.34_5b6465d5.jpg?v=1714760500239",
        year:2016,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },

    {
        name:"vishnu 2015",
        poster:"https://cdn.glitch.global/02f7fe55-1b3a-4e22-a2eb-e26cc6fd2fb6/WhatsApp%20Image%202024-05-03%20at%2016.13.33_f0ea9597.jpg?v=1714760486338",
        year:2015,
        events:"freshers,fest,farewells,annual day",
        video:"https://youtu.be/6iCJ7FlkaB8?si=cZkkiKxwetAReUQZ"
    },

]




function searchMovie(){
    const movieName = document.getElementById("search").value;
    //console.log(movieName);
    if(movieName!==""){
        let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
}

function displayMovies(data){
    /*let movie = document.createElement("div");
    movie.classList.add("movie");


    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    movie.appendChild(overlay);

    console.log(movie);*/

    let htmlString = ``;

    for(let i=0;i<data.length;i++){
        htmlString = htmlString+`
        <div class="movie">
        <div class="overlay">
            <div class="video"></div>
            <div class="details">
            <video width="320" height="140" controls>
            <source src="${data[i].video}" type="video/mp4">
          </video>
                <h1>${data[i].name}</h1>
                <h2>${data[i].year}</h2>
                <p>${data[i].events}</p>
                <button><a href="home1.html"#>Open</a></button>
            </div>
        </div>
        <img class="poster" src="${data[i].poster}">
    </div>
    `;
    }

    //console.log(htmlString);

    document.getElementById("movies").innerHTML =htmlString;
}

displayMovies(movies)