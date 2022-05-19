import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post/Post';
import Pagination from './Components/Pagination/Pagination';

const App = () => {

  const [posts,setPost] = useState([])
  const [load,setLoad] = useState(false)
  const [currentpost,setCurrentPost] = useState(1)
  const [postPerPage] = useState(10)

    useEffect(()=>{
      const FetchPost = async ()=>{
        setLoad(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(res.data)
        setLoad(false)
      }
      FetchPost()

    },[])
    // get current post 
    const indexOfLastPage = currentpost * postPerPage;
    const indexOfFastPage = indexOfLastPage - postPerPage;
    const imidieatePost = posts.slice(indexOfFastPage , indexOfLastPage)

    // change page 
    const paginate = (pageNumber)=> setCurrentPost(pageNumber)

  return (
    <div>
      <h1 className='text-center text-primary'>Total Post </h1>
      <Post load={load} posts={imidieatePost} />
      <Pagination postPerPage={postPerPage} totalPost={posts.length}paginate={paginate}></Pagination>
    </div>
  );
};

export default App;