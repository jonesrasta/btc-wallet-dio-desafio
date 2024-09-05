# Bitcoin Wallet Desafio Dio

![Wallet DIO](https://github.com/user-attachments/assets/8d1410e4-c1a9-47e0-9ac6-8b29b5a885cb)



Este projeto é uma aplicação de criar carteiras de bitcoin. Abaixo estão as instruções para configurar e rodar o projeto em sua máquina local.

## Requisitos

- Node.js (versão 19.9.0)
- npm (versão 9.6.3)

## Como Rodar o Projeto

### Passos para Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/jonesrasta/btc-wallet-dio-desafio.git
   cd btc-desafio-dio

2. Instale as dependências do projeto:

    ```bash
    npm install

3. Para iniciar o servidor de desenvolvimento do frontend, execute:

   ```bash
   npm run dev
   
 O frontend estará disponível em: http://localhost:5173

### Rodando o Backend

4. Para iniciar o servidor backend, vá para o diretório do backend e execute:
   Instale as dependências do projeto:
   
   ```bash
   npm install
   
6. Para iniciar o servidor de desenvolvimento do frontend, execute:
   
   ```bash
   node src/index.js

O backend estará disponível em: http://localhost:3000

Você pode adicionar as instruções de alteração da URL para rodar o backend localmente e também incluir a URL do deploy no `README.md`. Aqui está uma sugestão de como estruturar as informações com as alterações necessárias:

---

# Bitcoin Wallet Desafio Dio

![Wallet DIO](https://github.com/user-attachments/assets/8d1410e4-c1a9-47e0-9ac6-8b29b5a885cb)

Este projeto é uma aplicação de criar carteiras de Bitcoin. Abaixo estão as instruções para configurar e rodar o projeto em sua máquina local, além da URL para acessar o deploy de produção.

## Requisitos

- Node.js (versão 19.9.0)
- npm (versão 9.6.3)

## Como Rodar o Projeto

### Passos para Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/jonesrasta/btc-wallet-dio-desafio.git
   cd btc-desafio-dio
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Para iniciar o servidor de desenvolvimento do frontend, execute:

   ```bash
   npm run dev
   ```

   O frontend estará disponível em: [http://localhost:5173](http://localhost:5173)

### Rodando o Backend

4. Para iniciar o servidor backend, vá para o diretório do backend e instale as dependências:

   ```bash
   cd bitcoin-wallet-backend
   npm install
   ```

5. Inicie o servidor backend:

   ```bash
   node src/index.js
   ```

   O backend estará disponível em: [http://localhost:3000](http://localhost:3000)

### Alterando a URL para Rodar Localmente

Se você estiver rodando o backend localmente, será necessário alterar a URL da API no código do frontend. Por padrão, a URL está apontando para a versão em produção:

```javascript
const generateWallet = async () => {
  try {
    const response = await fetch("https://btc-wallet-dio-desafio.onrender.com/generate-wallet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  ...
};
```

Para rodar localmente, altere a URL para:

```javascript
const generateWallet = async () => {
  try {
    const response = await fetch("http://localhost:3000/generate-wallet", {  // Altere para localhost
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  ...
};
```

### Acessando a Aplicação em Produção

A aplicação em produção está disponível no seguinte link:

- URL do frontend (deploy): [https://btc-wallet-dio-desafio.vercel.app/](https://btc-wallet-dio-desafio.vercel.app/)
- URL do backend (deploy): [https://btc-wallet-dio-desafio.onrender.com/](https://btc-wallet-dio-desafio.onrender.com/)

---

Com isso, seu `README.md` estará atualizado com as instruções sobre como rodar o projeto localmente e com a URL da versão em produção.
