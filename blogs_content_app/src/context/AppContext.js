import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step1 context creation
export const AppContext = createContext();

//step2 context provider function
export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    //data filling
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            if (!result.ok) {
                // Handle HTTP errors (e.g., 404, 500)
                const errorData = await result.json(); // Try to get error details
                console.error("HTTP Error:", result.status, errorData);
                // Display an error message to the user
                // You can set a specific error state for your UI
                throw new Error(`HTTP Error: ${result.status}`);
              }
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(error){
            console.error("Error fetching data:", error);
            // Display a user-friendly error message
            // You might want to show a retry button or a message like "Failed to load posts"
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }finally {
            setLoading(false);
          }
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    //step2
    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}