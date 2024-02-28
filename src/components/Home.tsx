import React from 'react'; 
import { Link } from "react-router-dom"; 
 
function Home() { 
  return ( 
 <div  className="w-full h-40 py-10 bg-red-200 flex-col gap-3  text-black  text-4xl flex items-center justify-center" > 
 <h1>Home</h1> 
 <p>Welcome to the Home Page!</p> 
<Link className="px-6 py-3 bg-blue-300" to="/about" > go to About</Link > 
</div  > 
); 
} 
 
export default Home; 
