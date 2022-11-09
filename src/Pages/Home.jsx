import React from 'react'

const Home = () => {
  return (
    <div style={{display:"flex" , alignItems:"center",justifyContent:"space-between" ,padding:"10px 20px"}}>
        <h1 >Search properties to rent</h1>
        <input placeholder='search with search bar' style={{height:"20px"}}/>
    </div>
  )
}

export default Home