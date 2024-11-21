# Projeto Imersão Back-end Alura (nov/2024)

[![Static Badge](https://img.shields.io/badge/license-GNU-green)](https://github.com/wagnerchc/chess-system-java/blob/master/LICENSE)

# Sobre o projeto

Aplicação backend em Node.JS e Mongo Atlas.

Esse projeto foi desenvolvido com base nas aulas da <a href="https://www.alura.com.br/podcast/hipsterstech-carreira-back-end-e-imersao-node-js-hipsters-ponto-tech-436-a9476?srsltid=AfmBOoqXp63wTXx3FgJK6_BuSWV-vPheJo61gCYjuqREoaESkoaxwwCB" target="_blank">Imersão Back-end da Alura</a>

# Tecnologias utilizadas

## Back end

- Node.Js
- Express
- Mongo Atlas

# Como executar o projeto

## Back end

Pré-requisitos: Node.Js, Mongo Atlas

```bash
# clonar repositório
git clone https://github.com/wagnerpch/imersao-back-end-alura

# acessar a pasta bin
cd imersao-back-end-alura

#crie um arquivo .env.development.local na raiz do projeto
crie um arquivo .env.development.local na raiz do projeto e adicione a propriedade 'MONGO_URI'

#crie uma pasta na raiz do projeto com o nome 'uploads'
crie a pasta 'uploads' que será utilizada para salvar as imagens dos posts

# executar o projeto
npm run dev
```

# Endpoints

- Listar todos os posts = http://localhost:3000/posts
- Criar post = http://localhost:3000/post
- Adicionar imagem = http://localhost:3000/post/upload-image

# Recursos adicionais

- Exemplo de .env.development.local.example com as variáveis de ambiente a serem configuradas
- Limitar os tipos de extensões de arquivos com a função renameImage(), lançando erro se a extensão do arquivo não for permitida
- Aplicação de outras técnicas de código limpo e reuso

# Autor

Wagner Pereira Chequeleiro

https://www.linkedin.com/in/wagnerpch/
