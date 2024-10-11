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

# Context Api::
- Context Api is a state management tool which is used to make a data centralized so that everyone can use it. Like: There are 3 people rajan, ram and ramesh. Rajan has netflix password. Rajan can give ram a password and ram can give ramesh a password. but ramesh cannot give password to ram and ram cannot give a password to rajan. Means parent can give a password to child(hierarchy). So, context api store password in a centralized place where anyone can access that password. Here, Rajan, Ram, and Ramesh represent components in a React hierarchy, and the Netflix password is the shared state.

- Context API creates a "centralized" data source, allowing data (like the password) to be shared without the need for props drilling (passing data manually through multiple component levels).

first make a context folder inside src and inside that context folder, make a file UserContext.jsx. rafce inside usercontext and return ko thakkai mathi const userName = "Rajan" lekhni. aba yo username purai app maa access garna ko lagi main.jsx file maa <App/> vanni lai usercontext maa wrap garnu parxa jastai:
  <!-- <UserContext>
          <App />
        </UserContext> --> Like this.

- yesari hamile banako file UserContext.jsx ley App lai wrap garxa ra yo gardaa main.jsx bhitra usercontext import pani hunxa like:
<!-- import UserContext from './context/UserContext.jsx' -->


> Important:  aba yaha jaba usercontext ley app lai wrap garxam, usercontext parent vayo ra app child vayo. Browser maa aba app.jsx dekhidaina tesko thau maa usercontext.jsx dekhinxa.

- Aba tyo app.jsx dekhauna ko lagi props pass garda ni vayo yaa destructuring gardaa ni vayo like:

- Destructuring:::::::::::
<!-- import React from 'react'

const UserContext = ({children}) => {

    const userName = "Rajan_UserContext"
  return (
    <div>
        {children}
    </div>
  )
}

export default UserContext -->

- Passing props:::::::::::::::::::
<!-- import React from 'react'

const UserContext = (props) => {

    const userName = "Rajan_UserContext"
  return (
    <div>
        {props.children}
    </div>
  )
}

export default UserContext -->


-if maile aba app.jsx maa header.jsx use gare ra Aba tyo username= "Rajan" vanni data use vako harek component maa pathauna ko lagi context create garnu paryo:(inside usercontext.jsx)

<!-- import React, { createContext } from 'react'



export const DataContext = CreateContext()

const UserContext = (props) => {

    const userName = "Rajan_UserContext"
  return (
    <div>
        {props.children}
    </div>
  )
}

export default UserContext -->

- aba maile koi data tyo DataContext ko through bata pass garna ko lagi::

<!-- import React, { createContext } from 'react'



export const DataContext = createContext()

const UserContext = (props) => {

    const userName = "Rajan_UserContext"
  return (
    <div>
        <DataContext.Provider value={userName}>
        {props.children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext-->

- Aba  yeti garepaxi data pass vayo through context API. Now, aba maile app.jsx maa tyo pass vako data receive garna paryo vani:


<!-- import React, { useContext } from 'react'
import Header from './components/Header'
import { DataContext } from './context/UserContext'

const App = () => {
  const data = useContext(DataContext)
  console.log(data);
  
  return (
    <div>
      <Header/>
      <h1>This is app.jsx  {data}</h1>
    </div>
  )
}

export default App -->

- aba yaha samma app.jsx maa ta tyo data use garim . malai header.jsx component maa pani use garna paryo vani::

<!-- import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/UserContext";

const Header = () => {
  const data = useContext(DataContext)
  return (
    <>
      <nav className=" bg-emerald-800 flex py-5 px-10 items-center justify-between ">
        <h2 className="text-2xl cursor-pointer">LOGO{data}</h2>
        <div className="flex gap-9 items-center">
          <Link to = "/home" className="text-xl cursor-pointer">Home</Link>
          <Link to = "/product" className="text-xl cursor-pointer">Products</Link>
          <Link to = "/contact" className="text-xl cursor-pointer">Contact</Link>
          <Link to = "/about" className="text-xl cursor-pointer">About</Link>
        </div>
      </nav>
    </>
  );
};

export default Header; -->

- jaha use garepani process same ho. tei ek line lekhni:
  <!-- const data = useContext(DataContext) -->
- ani usecontext ra datacontext lai import vako xaina vani import garni. ani data name pass garera use garni. jastai maile mathi LOGO paxadi {data} garera pass garera use gareko xu:like:
  <!-- <h2 className="text-2xl cursor-pointer">LOGO{data}</h2> -->

  


