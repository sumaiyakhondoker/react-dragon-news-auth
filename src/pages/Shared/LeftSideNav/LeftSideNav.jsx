import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl ">All Category</h2>
            {
                categories.map(category => <NavLink 
                    className='block text-xl font-semibold ml-3'
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;