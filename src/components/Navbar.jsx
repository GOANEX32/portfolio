import React,{useState} from "react";
import {FaBars, FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../assets/logo.png"
import {Link} from "react-scroll"


const Navbar = () =>{
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav)


return(
<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
 <div>
    <img src={Logo} alt="logo ab" style={{width:'50px'}}/>
 </div>

 {/*menu*/}
 <div>
    <ul className="hidden md:flex ">
        <li>
        <Link  to="home"  smooth={true}  duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link  to="apropos"  smooth={true}  duration={500}>
          A propos
        </Link>
        </li>
        <li>
        <Link  to="competence"  smooth={true}  duration={500}>
          Compétences
        </Link>
        </li>
        <li>
        <Link  to="projets"  smooth={true}  duration={500}>
          Projets
        </Link>
        </li>
       <li>
        <Link  to="contact"  smooth={true}  duration={500}>
            Contact
        </Link>
        </li>
    </ul>
 </div>

 {/*conpress*/}
 <div onClick={handleClick} className="md:hidden z-10">
    {!nav ? <FaBars/> : <FaTimes/>}
 </div>
    {/*mobile menu*/}
    <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="apropos"  smooth={true}  duration={500}>
          A propos
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="competence"  smooth={true}  duration={500}>
          Compétence
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="projets"  smooth={true}  duration={500}>
          Projets
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="contact"  smooth={true}  duration={500}>
            Contact
        </Link>
        </li>
    </ul>
  {/*Social icons*/}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/abdrahamane-d-68ba90262/">
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/GOANEX32?tab=repositories">
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
           
            
        
                <Link  to="contact"  smooth={true}  duration={500} className="flex justify-between items-center w-full text-gray-300" href="mailto:abdbansky@gmail.com?subject=Sujet du message">
                    Email <HiOutlineMail size={30} />
                </Link>
                
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <Link  to="apropos"  smooth={true}  duration={500} className="flex justify-between items-center w-full text-gray-300" href="/">
                    Resumer <BsFillPersonLinesFill size={30} />

                </Link>
            </li>
        </ul>


    </div>

</div>
)}

export default Navbar