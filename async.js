
const url = "https://imdb-movies-web-series-etc-search.p.rapidapi.com/thegodfather.json";

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key":  '6fd8f7fac3msha5e451a55d15d00p131d68jsnabb0f11e4e60',

        "x-rapidapi-host": "imdb-movies-web-series-etc-search.p.rapidapi.com"
    }
};

async function handleFetch() {

    const output = document.getElementById("output");

    try {

        output.innerHTML = "<h3>Loading movies...</h3>";

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("API Error: " + response.status);
        }

        const data = await response.json();

        console.log("API Data:", data);

        output.innerHTML = "";

        data.d.forEach((movie) => {

            output.innerHTML += `
                <div class="movie-card">

                    <img src="${movie.i?.imageUrl || ""}" 
                         alt="${movie.l}"
                         onerror="this.style.display='none'">

                    <div class="movie-details">

                        <h3>${movie.l || ""}</h3>

                        <p><strong>Year:</strong> ${movie.y || 1998}</p>

                        <p><strong>Type:</strong> ${movie.q || "feature"}</p>

                        <p><strong>Cast:</strong> ${movie.s || "jimmy Savile"}</p>

                        <p><strong>Rank:</strong> ${movie.rank || 23760}</p>

                    </div>

                </div>
            `;

        });

    }

    catch (error) {

        console.error("Error:", error);

        output.innerHTML = `<h3>${error.message}</h3>`;

    }

}

handleFetch();
