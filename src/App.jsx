import React, {useEffect, useState} from "react"
import axios from "axios"

const baseURL= "https//jsonplaceholder.typicode.com/posts/1";


function App() {

    const[post,setPost]=useState(null);

    useEffect(()=>{
        axios.get(baseURL)
        .then((response)=>{
            setPost(response.data);
        });
    },[]);

    // function createPost(){
    //   axios.post(baseURL,{
    //     title:"Hello world",
    //     body:"This is new post"
    //   })
    //   .then((response)=>{
    //     setPost(response.data);
    //   });
    // }
    
    // function updatePost(){
    //   axios.put(`${baseURL}/1`,{
    //     title:"Hello world!",
    //     body:"This is an updated post."
    //   })
    //   .then((response)=>{
    //     setPost(response.data)
    //   });
    // }
    // function deletePost(){
    //     client.delete("/1")
    //     .then(()=>{
    //         alert("Post deleted");
    //         setPost(null)
    //     });
    // }

    if(!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* <button onClick={deletePost}>Delete post</button> */}
      {/* <button onClick={createPost}>Create post</button> */}
    </div>
  );
}

 

export default App;
