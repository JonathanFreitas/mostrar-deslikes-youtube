(async function getDislikes() {
    const videoId = new URLSearchParams(window.location.search).get('v');
    console.log("Buscando dados para o vídeo ID: " + videoId);

    try {
        const response = await fetch(`https://returnyoutubedislikeapi.com/Votes?videoId=${videoId}`);
        const data = await response.json();

        console.log("--- ESTATÍSTICAS REAIS (via RYD API) ---");
        console.log("Likes: " + data.likes.toLocaleString());
        console.log("Deslikes: " + data.dislikes.toLocaleString());
        console.log("Rating: " + data.rating.toFixed(2) + " / 5");
        
    } catch (err) {
        console.error("Erro ao buscar deslikes: O servidor da API pode estar fora do ar.");
    }
})();