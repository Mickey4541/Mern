# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# Process:::::::::::::::::
- npm create vite@latest(From CRA(create react app::: npx create-react-app))
- Need to install the following packages: Click Y.
- Project name : (your project name). 
- If you want not to give project name: ./
- package name: give a same name as project name or    simply click enter.
- select a framework: if you doing react: click react from keyboard.
- select a variant : select javascript.
- npm install
- npm run dev


> We see html code here, but it is not html, it is jsx.(javascript and xml(extensible markup language). It is basically html + js = jsx)


> Inside public folder: we store site logo, favicon, images etc.

> Src is main folder.

> src/App.jsx is main file.

> app.css lai delete gardey hunxa kina vani app.jsx maa app.css lageko hunxa ra index.css chai main.jsx maa laageko hunxa. so, index.css lai app.jsx and main.jsx duiotaa mai inport garni and we are good to go.


> HMR is hot module replacement. React reload na vayera jun kura change gareko tyo matra change garauna yei HRM technology use vako hunxa.

>  inside package.json::::  "dev": "vite", replace with "start": "vite", . Now we can start our app by typing npm start.

> Compilation converts high-level programming code (like C++ or Java) into machine code or bytecode that can be directly executed by a computer or an interpreter, optimizing it for specific hardware or platforms.Example:C++ code is compiled into machine code that the computer can run directly, like creating an executable file (.exe) from the C++ code.


>  Transpilation changes code from one version of a language (like modern JavaScript to older JavaScript) or from one language to another, so it can work on different platforms or browsers. transpilation keeps the code in a form that is still readable and usable by other systems.Modern JavaScript (ES6) is transpiled into older JavaScript (ES5) so that it can work in older browsers that don't support the latest version.


> ES5 (ECMAScript 5): Released in 2009, ES5 is the older version of JavaScript that brought improvements like Array.prototype.map(), filter(), and forEach(), as well as strict mode ('use strict';), which helps write more secure JavaScript code.

> ES6 (ECMAScript 6): Released in 2015, also known as ECMAScript 2015, it introduced major new features like let and const for block-scoped variables, arrow functions (() => {}), template literals (using backticks ` `), default parameters, classes, and promises for handling asynchronous code.


- Babel : Browser does understand html, css and js but it doesn't understand jsx. so, jsx should be transpiled into older version of js(ES5) so that the browser can understand it. This ensures that even older browsers can run the code correctly while you get the benefits of using modern syntax and features.

- Actual Code:
<span className="raj">RajanBhandari</span>

- Babel makes it browser compatible code as:
React.createElement("span", { className: "raj" }, "RajanBhandari");

# cases of letters:
- CamelCase: rajanBhandari
- PascalCase: RajanBhandari
- Kebab-case: rajan-bhandari
- snake_case: rajan_bhandari


> CRA is for large scale apps and website like ERP and vite is for intermediate and basics web and apps.

> CRA : whole project bundle garera dinchha.
> Vite: server on demand or serve on demand.


# UseState Hook:::
Hooks are special typeof functions. see examples inside src/assets/React drill Screenshots folder. React maa variable vaneko usestate ho.


# Integration of Tailwindcss in React.
- tailwindcss.com
- inside docs.
- inside Framework Guide, select vite.
- using react selected
- if you already make project, follow from step 2:
  > npm install -D tailwindcss postcss autoprefixer
  > npx tailwindcss init -p

- Inside tailwind.config.js:
 <!-- /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} -->



- inside ./src/index.css:
<!-- @tailwind base;
@tailwind components;
@tailwind utilities; -->


- npm run dev
- Testing.



# Components:::::::::::::::::::;;;;;

> Important: We made a component folder inside src folder. Keep in mind that whenever we are making a component, always start with a capital letter like: making a navbar as: (Navbar not navbar)

# Props and Props Drilling:
# Axios::::::
- Showing data in frontend coming from APIS.
- APIS are like waiter.
- Lorem Picsum is fake api. we can use it.
- npm i axios


# REACT ROUTER DOM:::::
- inside src folder, make pages folder.
- inside pages, Make pages like Home.jsx etc.
- inside terminal, npm i react-router-dom
- Inside main.jsx, import browser router and wrap app inside it::
> import { BrowserRouter } from "react-router-dom"

<!-- <BrowserRouter>
      <App />
    </BrowserRouter> -->

- we use Linkto tag instead of a href:
<!-- <Link to = "/home" className="text-xl cursor-pointer">Home</Link> -->


