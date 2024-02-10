import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img width="70"src="/src/assets/images/anotherone.png" alt='logo'  className='w-18 h-18 object-contain shadow-md rounded-lg' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Lời mở đầu
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Sản phẩm đầu tay
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
