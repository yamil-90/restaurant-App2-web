import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <>
        <div className='md:w-2/5 xl:w-1/5 bg-gray-800'>
            <div className='p-6'>

            <p className='uppercase text-white text-2xl text-center font-bold'>Restaurant App</p>
            <p className='mt-3 text-white'>Administer restaurant:</p>
            
            <nav className='mt-10'>
                <NavLink className={({isActive})=>'p-1 text-white block hover:bg-yellow-500 hover:text-gray-900'+(isActive? ' text-yellow-500':'')}   to='/'>Orders</NavLink>
                <NavLink className={({isActive})=>'p-1 text-white block hover:bg-yellow-500 hover:text-gray-900'+(isActive? ' text-yellow-500':'')}   to='/menu'>Menu</NavLink>
            </nav>
            </div>
        </div>
        </>
     );
}
 
export default Sidebar;