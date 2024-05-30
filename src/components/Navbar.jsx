import logo_white from '../assets/logos/logo_white.svg';
import menu from '../assets/icons/menu.svg';

export default function Navbar() {
    return (
        <nav className="bg-[#5C5C5C] h-[70px] flex items-center justify-between shadow-[0px_10px_10px_0px_rgba(0,0,0,0.3)]">
            <img src={logo_white} className='w-[200px] phone:w-[250px] ml-[20px] mt-[15px] shadow-img' alt="Healthy Challenge" />
            <img src={menu} className='phone:hidden shadow hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.2)] inline w-[40px] mr-[20px]' alt="Menu" />
            <div className='hidden h-[70px] w-[200px] phone:flex items-center justify-center text-[#FFFFFF] mr-[20px]'>
                <button className='w-full h-[50%] border-r-[2px] hover:text-[#FF5733] text-shadow'> Sign in </button>
                <button className='w-full h-[50%] border-l-[2px] hover:text-[#FF5733] text-shadow'> Sign up </button>
            </div>
        </nav>
    )
}