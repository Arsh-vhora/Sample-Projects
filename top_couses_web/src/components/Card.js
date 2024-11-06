import React from 'react'
import {FcLike} from "react-icons/fc";
import {toast} from "react-toastify";

export const Card = ({course},props) => {

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    //console.log(likedCourses);
/*
    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
            //already present
            setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else
        {
            //not liked
            //insert this course into liked course
            if(likedCourses.length === 0)
            {
                setLikedCourses([course.id]);
            }
            else
            {
                //non-empty
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }

    }
        */
  return (
    <div className="w-[300px] bg-slate-800 rounded-md overflow-hide">
        <div className="relative">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                            grid place-items-center">
                <button>
                  {
                    <FcLike fontSize="1.75rem"/>
                    /*
                    likedCourses.includes(course.id) ? 
                    (<FcLike fontSize="1.75rem"/>) :
                    (<FcLikePlaceholder fontSize="1.75rem"/>) */
                  }
                </button>
            </div>   
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                  {
                    course.description.length > 100 ?
                    (course.description.substr(0,100)) + "..." :
                    (course.description)
                  }
            </p>
        </div>
        
    </div>
  )
}

export default Card;
