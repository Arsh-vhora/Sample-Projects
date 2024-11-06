import React, {useState} from 'react';
import Card from './Card.js';

export const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    //returns you a list of all courses recieved from api response
    const getCourses = () => {
      console.log(category);
      if (category === 'All')
        {
          let allCourses = [];
          Object.values(courses).forEach((courseCategory) => {
              courseCategory.forEach((course) => {
                  allCourses.push(course);
              })
          });
        return allCourses;
      }
      else{
        //will pass only specific category cards
        return courses[category];
      }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    { getCourses().map((course) => {
            return <Card key={course.id} 
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                         />
        })
    }
    </div>
  )
}

export default Cards;
