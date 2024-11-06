import logo from './logo.svg';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    //fetchBlogPosts();
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      //this will display tag wala page
      const tag = location.pathname.split("/ ").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    if(location.pathname.includes("categories")){
      //this will display category wala page
      const category = location.pathname.split("/ ").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
      
  },[location.pathname, location.search]);
  return (
    <div className="">
    {/* <Header/>
      <Blogs/>
      <Pagination/>
    */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
