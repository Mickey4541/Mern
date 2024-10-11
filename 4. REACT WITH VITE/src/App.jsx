
//Changing the name by clicking a button.


// import React, { useState } from 'react'

// const App = () => {

//   const [user, setuser] = useState("Ramesh")
//   const changeUser = ()=>{
//     setuser("Ram")


//   }
//   return (
//     <div>
//       <h1>Username is {user}.</h1>
//       <button onClick={changeUser}>Change user</button>
//     </div>
//   )
// }

// export default App






//increasing and decreasing the number by 1 by clicking button. 


// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>The number is {num}</h1>
//       <button onClick={()=>{setnum(num + 1)}}>Increment</button>
//       <button onClick={()=>{setnum(num - 1)}}>Decrement</button>
//     </div>
//   )
// }

// export default App







// //Making form in react with tailwind css::

// import React from 'react'

// const App = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black">
//       {/* Form */}
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********"/>
//         </div>
//         <div className="flex items-center justify-between">
//           <button 
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
//             type="button">Sign In</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default App






// // //form handeling:::::::::::::::
// import React, { useState } from 'react'

// const App = () => {
//   const [username, setusername] = useState("")


// // yaha e receive garekoo
//   const submitHandler = (e)=>{
//     e.preventDefault()
//     console.log("Form Submitted");

//     // jaba aauta username submit garevani tyo field feri empty hunxa
//     setusername("");
    
//   }
//   return (
//     <div>
//               {/* yaha bata e pass gareko */}
//       <form className= 'flex justify-center items-center flex-col' onSubmit= {(e)=>{submitHandler(e)}} action=""> 

//         {/* yaha hamile mathi usestate maa username variable banako ani yaha input maa value maa username pass gareko. tespaxi input field maa kehi type gardaa input field change vairako hunxa ni ta tyo onchange maa (e.target.value ) means j type gareko xa tesailai username set gar vaneko. yaha hamile jaba input field maa kehi lekhi rako xam, hamile react lai vanirako xam ki setusername. username set gardey e.target.value lai set gardey username maa. yeso garda hamile lekhi rako pani xam ra react lai pani taha xa ki yaha hamile k lekhirako xam vanera. in fact hamile yo react ko through nai lekhirako xam. this is called two way binding. */}
//         <input value = {username} onChange={(e)=>{setusername(e.target.value)}} className='px-4 py-3 text-xl m-5 rounded  text-black' type="text" name="" id="" placeholder='Enter Your name' />

//         <button className='px-4 py-3 bg-yellow-300 m-4 text-xl rounded'type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App







// Components::::::::::::::::::::::::::::::::

{/* <></>  =>  They are called fragments */}

// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <>
//       <Header/>
//       <div className='flex flex-wrap justify-center'>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         </div>

//         <Footer/>
      
//     </>
//   )
// }

// export default App




//Props and props drilling::::::::::::::::::::
//means we can pass data on components:::::::

// import React from 'react'
// import PropsCard from './components/PropsCard'

// const App = () => {
//   const user = "Rajan"
//   return (
//     <>
//       <PropsCard user = "Ramesh"/>
//       <PropsCard user = {user}/>
//     </>
//   )
// }

// export default App



//PAssing data through props:::::::::::::::::::::::::::::
// import React from 'react'
// import CardThird from './components/CardThird'

// const App = () => {
//   return (
//     <>
//       <div className='p-10'>
//        <CardThird user = "Rajan" lastname = "Bhandari" age ='25' city = "Dang"/>
//       </div>
//     </>
//   )
// }

// export default App





// //fetching user data through JSON and showing it on cards.
// import React from 'react'
// import CardFour from './components/CardFour'

// const App = () => {

//   const users = [
//     {
//       "username": "Rajan",
//       "lastname": "Bhandari",
//       "age": 23,
//       "city": "Dang",
//       "profession": "Web Developer",
//       "profile_photo": "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       "username": "Sachin",
//       "lastname": "Chaudhari",
//       "age": 24,
//       "city": "Kathmandu",
//       "profession": "Software Engineer",
//       "profile_photo": "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       "username": "Alohin",
//       "lastname": "Oli",
//       "age": 22,
//       "city": "Pokhara",
//       "profession": "Data Analyst",
//       "profile_photo": "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       "username": "Bipana",
//       "lastname": "Chaudhari",
//       "age": 25,
//       "city": "Butwal",
//       "profession": "Graphic Designer",
//       "profile_photo": "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       "username": "Rajan",
//       "lastname": "Khadka",
//       "age": 26,
//       "city": "Biratnagar",
//       "profession": "Cybersecurity Specialist",
//       "profile_photo": "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//     }
//   ]
  

//   return (
//     <>
//       <div className='p-5 flex items-center justify-center'>
//         {users.map(function(elem, index){
//           return <CardFour key={index}username={elem.username} lastname={elem.lastname} age={elem.age} city={elem.city} Profession = {elem.profession} photo={elem.profile_photo} />
//         })}
//       </div>
//     </>
//   )
// }

// export default App








//Question is: How to give props to child?
//We can only pass data from parent to children.
//app.jsx bata CardFive maa name pass garera receive gareko ra CardFive bata CardFive1 maa feri tei data pass gareko. app.jsx bata name pass gareko CardFive maa user variable maa receive gareko ra tei user feri CardFive1 bata receive gareko.
// import React from 'react'
// import CardFive from './components/CardFive'

// const App = () => {
//   return (
//     <div>
//       <CardFive name="Cardfiverajan"/>
//     </div>
//   )
// }

// export default App






// //How to show data in frontend coming from api?
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

// const [data, setdata] = useState([])
//   const getData = async()=>{
//     const response = await axios.get('https://picsum.photos/v2/list')
//     setdata(response.data);
//     //console.log(response.data);

//   }

//   //useeffect automatically fetch data from api without clicking a button.
//   // useEffect(() => {
//   //   getData()
//   // }, [])
  
//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded-xl active:scale-90 '>Get Data</button>
//       <div className='p-5 mt-5  bg-slate-500 w-full'>{data.map(function(elem, index){return <div key={index} className='bg-gray-400 text-black items-center flex justify-between w-full px-7 py-6 rounded mb-10'>
//             <img className= "h-40"src={elem.download_url} alt="" />
//             <h1>{elem.author}</h1>
//       </div>
//       })}</div>
//     </div>
//   )
// }

// export default App





// ###### REACT ROUTER DOM ######

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Header from './components/Header'



// const App = () => {
//   return (
   
//     <div>
//       <Header/>
//       <Routes>
//         <Route path='/home' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/contact' element={<Contact />}/>
//         <Route path='/product' element={<Product />}/>
//         <Route path='/home' element={<Home />}/>
//       </Routes>
//     </div>
//   )
// }

// export default App






//  ####### CONTEXT API ##########
//  Detail in readme ###################

import React, { useContext } from 'react'
import Header from './components/Header'
import { DataContext } from './context/UserContext'

const App = () => {
  const data = useContext(DataContext)
  console.log(data);
  
  return (
    <div>
      <Header/>
      <h1>This is app.jsx   {data}</h1>
    </div>
  )
}

export default App
