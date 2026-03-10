# Simple Node API

Uma API simples em **Node.js + Express + MongoDB** para gerenciamento de pedidos.

O objetivo desse projeto é demonstrar uma API REST organizada em camadas (**controller, service e repository**), com persistência em MongoDB, autenticação com e execução simplificada via **Docker Compose**.

A ideia foi manter o projeto **simples, legível e fácil de rodar**, sem frameworks pesados.

## Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Docker / Docker Compose
* Pino (logger)
* MongoDB Driver oficial
* SwaggerJS-DOC
* Zod (validação)
* Bcrypt
* JWT

## Estrutura do projeto

A aplicação está organizada por responsabilidade, que ajuda a manter o código organizado e facilita futuras mudanças:

```
src/
 ├─ controllers/      # Camada HTTP (req/res)
 ├─ services/         # Regras de negócio
 ├─ repositories/     # Acesso ao banco de dados
 ├─ database/         # Conexão com o banco de dados
 ├─ routers/          # Definição das rotas da API
 ├─ middleware/       # Middlewares (auth, error handling, etc.)
 ├─ docs/             # Configuração e definição do Swagger/OpenAPI
 ├─ app.js            # Configuração do Express e middlewares
 └─ server.js         # Inicialização da aplicação
```

## Executando o projeto

A forma mais simples de rodar o projeto é usando Docker.

Basta:

Configurar o arquivo .env de acordo com o exemplo:

```
cp .env.example .env
nano .env
```

Executar o docker compose:

```
docker compose up --build
```

Isso irá:

1. Subir o MongoDB
2. Construir a imagem da API
3. Iniciar a aplicação

A API, por padrão, ficará disponível em:

```
http://localhost:3000
```

## Observações

Este projeto foi desenvolvido com foco em simplicidade e clareza, evitando abstrações desnecessárias e utilizando apenas o driver oficial do MongoDB para acesso ao banco.

O objetivo principal é demonstrar a organização básica de uma API REST e boas práticas iniciais de estruturação.
