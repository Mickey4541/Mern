import React, { createContext } from 'react'



export const DataContext = createContext()

const UserContext = (props) => {

    //yaha bataa object pani pass garna milyo like name, age, city, phno etc.
    const userName = "Rajan_UserContext"
  return (
    <div>
        <DataContext.Provider value={userName}>
        {props.children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext