function anime() {
    fetch('https://animechan.xyz/api/random')
        .then(response => response.json())
        .then(quote => {
            let animeName = quote.anime;
            let character = quote.character;
            let quotes = quote.quote;

            document.getElementById('animee').innerHTML = `
                       
        <h2>Anime: ${animeName}</h2>
        <p>Character: ${character}</p>
        <p>Quote: ${quotes}</p>`
        })
}


