# Rick and Morty Explorer 

O "Rick and Morty Explorer" é uma aplicação React desenvolvida em Javascript que utiliza a API do seriado de TV Rick and Morty (https://rickandmortyapi.com/documentation/) com a finalidade de criar uma lista de personagens que permitem ao usuário utilizar recursos de busca, ferramentas como filtragem de locais e episódios, além da opção de favoritar personagem. A aplicação inclui uma tela de detalhes com informações e curiosidades para cada personagem listado. A utilização do Redux para gerenciar o estado global da aplicação e do React Router DOM para definir as rotas entre os componentes garantem uma experiência de usuário fluida e consistente.

## TECNOLOGIAS
Esse projeto foi desenvolvido com as seguintes tecnologias:
- **React** 
- **ViteJs**
- **Typescript** 
- **Styled Components** 
- **Axios** 

## Estrutura do projeto
```brash

src/
  ├── @types/ - Diretório que contém os arquivos de definições de tipagens
  ├── assets/ - Diretório que contém os arquivos com imagens e gif usados na aplicação
  ├── components/ - Diretório que contém os componentes React da aplicação
  ├── context/ - Diretório que contém as funções do ContextApi da aplicação
  ├── layouts/ - Diretório que contém arquivos para definição do layout
  ├── pages/ - Diretório que contém os arquivos referentes a páginas da aplicação
  ├── services/ - Diretório que contém os arquivos referentes a configuração de conexão com a API
  ├── styles/ - Diretório que contém os arquivos referentes aos estilos da aplicação
  ├── App.tsx - Componente principal da aplicação
  ├── main.tsx - Arquivo que renderiza a aplicação na página HTML
  └── Router.txs - Arquivo que define a Rotas da Aplicação
```

## Como executar o projeto
```bash
# Clone este repositório
$ git clone https://github.com/EstevaoH/rickAndMortyExplore.git

# Acesse a pasta do projeto no seu terminal
$ cd api-rick-morty

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev
```

---
<p align="center">Feito com :blue_heart: por Estevão Ferreira</p>
