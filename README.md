<a name="readme-top"></a>

![image](https://github.com/GuiGarciaDev/NLW-Expert-polls/assets/121461039/6976c999-256b-4e88-af86-04aa4476bcd5)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li><a href="#rodando-o-projeto">Rodando o projeto</a></li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

PollEase é basicamente um sistema de votação de enquete com funcionalidade de acompanhar a votação rem tempo real desenvolvido durante a NLW Expert da Rocketseat em fevereiro de 2024 enquanto eu acompanhava a trilha de Nodejs. Aqui o usuário pode criar enquetes com até no máximo 5 opções de resposta, compartilhar o link com seus amigos e acompanhar a votação em tempo real.

É importante ressaltar que esse projeto é para fins educativos e não gera qualquer renda para mim. O objetivo aqui é me aperfeiçoar e chamar atenção na comunidade, afinal eu também estou procurando um emprego. Portanto, tanto o deploy do frontend, dessa API e do PostgreSQL na Vercel quanto o do Redis na Redislab utilizam de recursos muito limitados por serem gratuitos e como estou utilizando a Vercel como host, os websockets estão desligados. 

Caso haja instabilidade no servidor e você não consiga acessar, você também pode rodar o projeto localmente na sua máquina conforme explicado na seção de uso. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Tecnologias

As tecnologias utilizadas para desenvolver esse projeto são:

#### Frontend
* React js
* Next js
* TailwindCSS
* TypeScript
* ShadcnUI
* AceternityUI

#### Backend
* Fastify
* PostgreSQL
* Redis

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Rodando o projeto

Caso você opte por rodar o projeto localmente na sua máquina, siga estas instruções.

Obs: Os websockets estarão disponíveis apenas nesta versão local. Para isso use somente a branch websocketlocal para rodar código.

### Pré-requisitos

Para rodar localmente você vai precisar do Docker para subir os bancos de dados utilizados (Redis e PostgreSQL).
  

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/GuiGarciaDev/NLW-Expert-polls.git
   ```
   
2. Selecione a branch websocket e adicione um arquivo .env na root do projeto com as seguintes variáveis
   ```sh
   POSTGRES_PRISMA_URL="postgresql://docker:docker@localhost:5200/polls?schema=public"
   NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000/"
   NEXT_PUBLIC_API_URL="http://localhost:3333/"
   ```

3. Instale as dependencias
   ```sh
   npm install
   ```
   
4. Rode os containers do docker
   ```sh
   docker compose
   ```

5. Suba as migrations para o banco de dados
    ```sh
   npx prisma migrate dev
   ```

6. E finalmente, rode o projeto com
   ```sh
   npm run dev
   ```

   

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## API

Vamos entender um pouco sobre essa simples API.

### Criar enquete

#### Requisição

<mark>POST /polls</mark>

#### Resposta

```
{
  title: "título da enquete",
  options ["Array com as opções"]
}
```

Onde

* title é uma string e representa o título da enquete.
* options é um array de strings e cada elemento é uma opção de voto. (máx 5 opções)

### Enquete

#### Requisição

<mark>GET /polls/:pollId</mark>

#### Resposta

```
{
  poll: {
    id: "uuid",
    title: "título",
    options: ["opção1", "opção2", "opção3",]
  }
}
```
Onde

* id e [:pollId] são o id de identificação único de cada enquete no formato de um uuid.

### Votar em uma enquete

#### Requisição

<mark>POST /polls/:pollId/votes</mark>

```
{
    "pollOptionId": "eef760bc-6491-48a9-9677-f077d9a5f862"
}
```

Onde 

* pollOptionId é a id única da opção que você votou.

#### Resposta

Vai responder uma mensagem de erro ou ok.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Uso

TEXTO PERSONALIZADO

### Crie enquetes

![image](https://github.com/GuiGarciaDev/NLW-Expert-polls/assets/121461039/799def54-b0d6-461b-85bc-7ac70799af63)

### Compartilhe com quem quiser

![image](https://github.com/GuiGarciaDev/NLW-Expert-polls/assets/121461039/2fca5880-e5b3-475a-891b-f56a7f22117d)

### Vote na melhor opção

![image](https://github.com/GuiGarciaDev/NLW-Expert-polls/assets/121461039/a97aa40e-bb80-4519-89c2-38972a5aae5b)


### Acompanhe o resultado

![image](https://github.com/GuiGarciaDev/NLW-Expert-polls/assets/121461039/66e366fc-b4ca-4ca3-a9df-21681331bf83)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contato

Guilherme - [@GuiGarciaDev](https://twitter.com/GuiGarciaDev) - [GuiGarciaDev](https://linkedin.com/in/GuiGarciaDev) - guilherme.garcia1136@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
