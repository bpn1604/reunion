import React, { useState ,useEffect} from "react";
import axios from "axios";
import SingleHome from "./SingleHome";
const Home = () => {
  const [data , setData ] = useState([])
   function getData(){
    axios.get("https://json-server-test-bipin.herokuapp.com/data").then((res)=>{
      //console.log(res.data)
      setData(res.data)
    })
  }
  useEffect(() => {
    getData()
  
    
  }, [])
const handlePropertyType=(e)=>{
  let values =(e.target.value)
  //console.log(data)
  let filteredData = data.filter((el)=>el.propertry_Type===values)
  console.log("f",filteredData)
  setData(filteredData)
}
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <h1>Search properties to rent</h1>
        <input
          placeholder="search with search bar"
          style={{ height: "20px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px 20px",
          justifyContent: "space-between",
        }}
      >
        <div>Location

        </div>
        <div>When</div>
        <div>Price</div>
        <div>Property Type
          <select onChange={handlePropertyType}>
            <option value="Bunglow">Bunglow</option>
            <option value="House">House</option>
            <option value="">Hotel</option>
            
          </select>
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
        {
          data.map((el)=>(
            <div style={{display:"grid" , gridTemplateColumns:"20px 20px 20px 20px"}}>
              <SingleHome key={el.id} el={el} />
            </div>
            
          ))
        }
    </>
  );
};

export default Home;
