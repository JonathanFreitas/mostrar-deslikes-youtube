document.getElementById('fetchDislikes').addEventListener('click', async function() {
  // Envia uma mensagem para o content script da aba ativa buscando o videoId
  chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
    const tab = tabs[0];
    const videoId = await getVideoIdFromTab(tab.id);
    
    if (!videoId) {
      document.getElementById('result').innerHTML = 'Vídeo não encontrado.';
      return;
    }

    try {
      const response = await fetch(`https://returnyoutubedislikeapi.com/Votes?videoId=${videoId}`);
      const data = await response.json();

      // Exibe os dados no popup
      document.getElementById('result').innerHTML = `
        <strong>Likes:</strong> ${data.likes.toLocaleString()}<br>
        <strong>Deslikes:</strong> ${data.dislikes.toLocaleString()}<br>
        <strong>Rating:</strong> ${data.rating.toFixed(2)} / 5
      `;
    } catch (err) {
      document.getElementById('result').innerHTML = 'Erro ao buscar deslikes.';
      console.error("Erro ao buscar deslikes:", err);
    }
  });
});

async function getVideoIdFromTab(tabId) {
  return new Promise((resolve, reject) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        func: getVideoIdFromUrl
      },
      (injectionResults) => {
        const videoId = injectionResults[0].result;
        resolve(videoId);
      }
    );
  });
}

function getVideoIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('v');
}