YouTube Dislike Fetcher Extension

Uma extensão para Google Chrome, Brave e outros navegadores baseados em Chromium que permite visualizar o número de deslikes de vídeos no YouTube, mesmo após a remoção do contador público de deslikes pela plataforma.

Funcionalidade

Esta extensão oferece a possibilidade de:

Verificar a quantidade de likes e deslikes de qualquer vídeo no YouTube.

Exibir as estatísticas diretamente no navegador, no pop-up da extensão.

Obter dados em tempo real de forma simples e rápida, com informações fornecidas pela ReturnYouTubeDislikeAPI
.

Funcionalidades

Mostrar estatísticas de deslikes, likes e rating de vídeos do YouTube.

Popup Interativo para exibir os resultados diretamente na interface da extensão.

Suporte a múltiplas abas: Pega o videoId da aba ativa e exibe os dados corretamente.

Pré-requisitos

Para rodar esta extensão, você precisará de um navegador baseado em Chromium (como Google Chrome ou Brave) e o seguinte:

Permissões para acessar as abas do navegador.

Permissão de execução de scripts nas abas de vídeos do YouTube.

Instalação

Clone o repositório no seu computador:

git clone https://github.com/seu-usuario/youtube-dislike-fetcher.git

Acesse a página de extensões do navegador:

No Google Chrome ou Brave, vá para chrome://extensions/.

Ative o "Modo de desenvolvedor" no canto superior direito.

Carregue a extensão sem compactação:

Clique em "Carregar sem compactação" e selecione a pasta onde o repositório foi clonado.

Teste a extensão:

Agora você pode clicar no ícone da extensão na barra de ferramentas do navegador e, ao abrir qualquer vídeo no YouTube, clicar no botão para obter os dislikes.

Como funciona

A extensão usa a API ReturnYouTubeDislikeAPI para coletar os dados de likes e deslikes dos vídeos. Ela envia uma solicitação para a API passando o videoId do vídeo do YouTube na aba ativa e exibe os dados retornados diretamente no pop-up.

Fluxo

O pop-up envia uma mensagem para a aba ativa pedindo o videoId.

O content script extrai o videoId da URL do vídeo.

O pop-up usa o videoId para fazer uma solicitação à API e exibe os dados no pop-up.

Estrutura do Projeto
youtube-dislike-fetcher/
│
├── background.js      # Lógica de fundo da extensão (gerenciamento de abas)
├── content.js         # Script executado nas páginas do YouTube
├── popup.html         # Interface do pop-up
├── popup.js           # Lógica do pop-up para buscar dados e exibir
├── manifest.json      # Definições da extensão (permissões, background, etc.)
└── README.md          # Documentação do projeto
Exemplo de Uso

Abra um vídeo no YouTube.

Clique no ícone da extensão na barra de ferramentas do navegador.

Clique em "Obter Dislikes" para visualizar as estatísticas do vídeo.

Resultados serão exibidos no pop-up com o número de likes, dislikes e a classificação do vídeo.

Contribuindo

Se você deseja contribuir para o projeto, siga os passos abaixo:

Faça um fork deste repositório.

Crie uma branch para a sua feature (git checkout -b minha-feature).

Adicione suas mudanças (git add .).

Faça o commit das suas mudanças (git commit -m 'Adicionando nova feature').

Push para o repositório (git push origin minha-feature).

Abra um pull request no GitHub.

Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE
 para mais detalhes.
