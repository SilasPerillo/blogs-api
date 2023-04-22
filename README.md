# Blogs API

Nesta API RESTful simulando um blog, um usuário autenticado pode publicar um novo post de blog com um título, conteúdo e categorias relacionadas. Também é possível criar, excluir e listar usuários, criar e listar categorias e criar. A API usa o JWT (Json Web Token) para autenticação.

Neste projeto, o MySQL é usado como gerenciador de banco de dados, e as comunicações entre ele e o aplicativo são feitas com o ORM Sequelize. Todos os modelos e migrações foram desenvolvidos por mim.

Este projeto foi construído com uma arquitetura de software em três camadas: a camada Model, responsável por se comunicar com o banco de dados, a camada Service no meio, que valida as regras de negócio, e a camada Controller, que recebe e responde a solicitações HTTP.

Este projeto foi desenvolvido enquanto estudava desenvolvimento web Back-end na @betrybe. Os arquivos em que trabalhei estão na pasta /src. Recebi aprovação em 100% dos requisitos deste projeto.

## Diagrama do banco de dados

![EER Diagram](https://user-images.githubusercontent.com/75266925/203593073-41acb414-3a4e-4bf2-95fc-78aa08276c38.png)

## Principais linguagens e ferramentas utilizadas

- Node.js
- Express.js
- Sequelize
- MySQL
- Joi para validação de dados de entrada
- Json Web Token (JWT) para autenticação
- Docker
- Arquitetura de software em três camadas

## Instalação

### Com Docker

1. Inicie os contêineres blogs_api e blogs_api_db com o comando `docker-compose up -d --build`
2. Acesse o terminal do contêiner blogs_api com `docker exec -it blogs_api bash`
3. No terminal, instale as dependências com `npm install`
4. Todos os outros comandos do node devem ser executados dentro do contêiner

### Sem Docker

1. Instale as dependências com `npm install` (requer node na versão 16)
2. Configure um arquivo `.env` com base no `.env.example` disponível.

## Comandos

- Execute o aplicativo com `npm start` ou `npm run debug` (reload ao vivo)
- Para executar os testes de requisitos do projeto, use `npm test` para todos os testes ou `npm test <test-name>` para um requisito específico (ex. `npm test req01`)
- Use `npm run drop` para excluir o banco de dados
- Use `npm run prestart` para criar o banco de dados e suas tabelas
- Use `npm run seed` para popular as tabelas
