# Ver Deslike e Estatísticas do Vídeo

Uma extensão para navegadores baseados em Chromium (Chrome, Brave) que permite visualizar o número de **deslikes** de vídeos no YouTube, mesmo após a remoção pública desse contador, além de mostrar outras estatísticas como **likes** e **rating**.

## Funcionalidade

- **Visualizar** a quantidade de **likes**, **deslikes** e **rating** de vídeos do YouTube.
- **Exibir as estatísticas** em um **pop-up** diretamente no navegador.
- Dados em tempo real fornecidos pela [ReturnYouTubeDislikeAPI](https://returnyoutubedislikeapi.com/).

## Instalação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/JonathanFreitas/mostrar-deslikes-youtube.git
    ```

2. **Carregue a extensão**:
    - Acesse `chrome://extensions/` (ou `brave://extensions/` no Brave ou chrome).
    - Ative o **Modo de Desenvolvedor**.
    - Clique em **Carregar sem compactação** e selecione a pasta do repositório.

3. **Teste a extensão**:
    - Clique no ícone da extensão e, ao abrir qualquer vídeo do YouTube, clique no botão para **obter os dislikes**.

## Como Funciona

1. A extensão usa a **ReturnYouTubeDislikeAPI** para coletar dados de **likes** e **deslikes**.
2. O **content script** extrai o `videoId` da URL do YouTube.
3. A **extensão** exibe os dados em um **pop-up**.

## Estrutura do Projeto
