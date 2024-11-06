import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className='absolute bg-white rounded-[1.1rem] w-11/12  text-center mt-[40px]  px-10 py-4 text-3xl font-bold '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full mt-[9rem] items-center gap-y-10'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
