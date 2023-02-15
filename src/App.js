import React, { useState , useEffect} from "react";
import "./App.css"

const JsonPlaceHoler = "https://jsonplaceholder.typicode.com/posts"

const JsonPlaceHolerList = () => {
    const [jsonList,setJsonList]=useState([])

    useEffect(()=>{
        fetch(JsonPlaceHoler).then(response=>response.json()).then(data=>setJsonList(data))
    },[])

    return(
        <div className="post">
            {jsonList.map((post)=>(
                <div key={post.id} className="post-card">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
export default JsonPlaceHolerList;