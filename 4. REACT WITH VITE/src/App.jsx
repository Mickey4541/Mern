
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





// //form handeling:::::::::::::::
import React, { useState } from 'react'

const App = () => {
  const [username, setusername] = useState("")


// yaha e receive garekoo
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form Submitted");

    // jaba aauta username submit garevani tyo field feri empty hunxa
    setusername("");
    
  }
  return (
    <div>
              {/* yaha bata e pass gareko */}
      <form className= 'flex justify-center items-center flex-col' onSubmit= {(e)=>{submitHandler(e)}} action=""> 

        {/* yaha hamile mathi usestate maa username variable banako ani yaha input maa value maa username pass gareko. tespaxi input field maa kehi type gardaa input field change vairako hunxa ni ta tyo onchange maa (e.target.value ) means j type gareko xa tesailai username set gar vaneko. yaha hamile jaba input field maa kehi lekhi rako xam, hamile react lai vanirako xam ki setusername. username set gardey e.target.value lai set gardey username maa. yeso garda hamile lekhi rako pani xam ra react lai pani taha xa ki yaha hamile k lekhirako xam vanera. in fact hamile yo react ko through nai lekhirako xam. this is called two way binding. */}
        <input value = {username} onChange={(e)=>{setusername(e.target.value)}} className='px-4 py-3 text-xl m-5 rounded  text-black' type="text" name="" id="" placeholder='Enter Your name' />

        <button className='px-4 py-3 bg-yellow-300 m-4 text-xl rounded'type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App


