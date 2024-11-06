import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import { Spinner } from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    const [blog,setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoading,loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);     
        let url = `${newBaseUrl}?blogId=${blogId}`;   
        try{
            //console.log(blogId);
            //console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }catch(error){
            console.log("Error!!");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname]);
  return (
    <div>
        <Header/>
        <div>
            <button
                onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
        {
            loading ? (<Spinner/>) : (blog ? 
                (<div>
                    <BlogDetails post={blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map((post) => (
                            <div key={post.id}>
                                <BlogDetails post={post}/>
                            </div>
                        ))
                    }
                </div>) : (<div>No Blog Found</div>))
        }
    </div>
  )
}

export default BlogPage