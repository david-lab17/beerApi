import React,{useState,useEffect} from 'react'
import axios from  'axios'
import Product from './components/Product'



function DataFetching() {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        axios
        .get("https://api.punkapi.com/v2/beers ")
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className=" bg-gray-100 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
           {posts.map(({id, image_url, name , description })=> (
               <Product 
                key={id}
                id={id}
                image_url={image_url}
                description={description}
                name={name} />
            
               
               
           ))}
          

        </div>
    );
}

export default DataFetching;