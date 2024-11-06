import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div key={post.id}>
        <NavLink to={`/blog/${post.id}`}>
            <span className='font-bold text-lg'>{post.title}</span>
        </NavLink>
        {
           // console.log("Blog_id:" + post.id)
        }
        <p className='text-sm mt-[4px]'>
            By 
            <span className='italic'>
                {post.author}
            </span> on{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
        <p className='text-md mt-[14px]'>{post.content}</p>
        <div>
            {post.tags.map((tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
    /*<p className='font-bold text-lg'>{post.title}</p>
        <p className='text-sm mt-[4px]'>
                 By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
        </p>
        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
        <p className='text-md mt-[14px]'>{post.content}</p>
        <div className='flex gap-x-3'>
                {post.tags.map((tag, index) => {
                    return <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                })}
        </div>
    </div> */
        
}

export default BlogDetails