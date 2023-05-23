import Link from "next/link";
import Image from "next/image";
import {BsPerson, BsSearch, BsThreeDotsVertical} from 'react-icons/bs'     // pnpm i react-icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    return (
        // <div className="fixed h-12 w-full flex flex-nowrap items-center p-4 bg-[#ffffff] mb-[2px] z-10" >
        <div className="bg-[#ffffff] h-12 flex justify-between items-center p-4" >
            {/* Left Side */}
            {/* <div className="flex grow items-center justify-start"> */}
            <div className="flex gap-2">
                <Link href='/'>
                    <Image src="/assets/twitch_logo.png" alt='/' width='30' height='30' />
                    {/* <Image src={logo} alt='/' /> */}
                </Link>
                <Link href='/parcourir'>Parcourir</Link>
                <BsThreeDotsVertical width={40} />
{/* !!! Je ne px pas choisir la hauteur des img ! */}
                {/* <Image className="cursor-pointer" src="/assets/3dots.png" alt='/' width='30' height='20' /> */}
            </div>

            {/* Middle */}
            {/* caché sur ptit écran, flex à partir de médium (md:flex) */}
            {/* <div className=" hidden md:flex grox-[2] items-center justify-center "> */}
            <div className="">
                {/* <div className=" bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl "> */}
                {/* <div className="border-solid border-2 rounded-2xl flex"> */}
                <div className="flex">
                    <input
                        type='text'
                        // className=" bg-transparent border-none text-white focus:outline-none "
                        className="border-solid border-black border rounded-l-md pl-2"
                        placeholder="Rechercher"
                    />
                    <BsSearch className=" h-auto w-auto bg-slate-200 rounded-r-md p-2" />
                    {/* <Image className=" bg-slate-200 rounded-r-md p-1" src="/assets/loupe.png" alt='/' width='30' height='30' /> */}
                </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-2">
                <Link href='/'>
                    <button className=" px-4 py-[6px] rounded-lg  text-white bg-[#dfdfdf] ">Se connecter</button>
                </Link>
                <Link href='/'>
                    <button className=" px-4 py-[6px] rounded-lg  text-white bg-[#9147ff] ">S'inscrire</button>
                </Link>  
                <BsPerson size={30} />             
                {/* <Image className="cursor-pointer" src="/assets/membre.png" alt='/' width='20' height='10' /> */}
            </div>           
        </div>





        // <div className="flex gap-4" >
        //     <Link href="http://localhost:3001/">
        //         <Image
        //             src="/assets/logo.png"
        //             alt="Twitch Logo"
        //             className="dark:invert"
        //             width={100}
        //             height={24}
        //             priority
        //         />
        //     </Link>
        //     <NavItem text="Accueil" href='http://localhost:3001/' active={false} />
        //     <NavItem text="Parcourir" href='http://localhost:3001/parcourir/' active={false} />
        //     <NavItem text="Jeu Morpion" href='http://localhost:3001/morpion/' active={false} />
        // </div>








        // <header>
        //   <nav className={`nav`}>
        //     <Link href={"/"}>
        //       <a>
        //         <h1 className="logo">CodeWithMarish</h1>
        //       </a>
        //     </Link>
        //     <div
        //       //onClick={() => setNavActive(!navActive)}
        //       className={`nav__menu-bar`}
        //     >
        //       <div></div>
        //       <div></div>
        //       <div></div>
        //     </div>
        //     <div 
        //         //className={`${navActive ? "active" : ""} nav__menu-list`}
        //         >
        //       {MENU_LIST.map((menu, idx) => (
        //         <div
        //         //   onClick={() => {
        //         //     setActiveIdx(idx);
        //         //     setNavActive(false);
        //         //   }}
        //           key={menu.text}
        //         >
        //           <NavItem 
        //           //active={activeIdx === idx} {...menu} 
        //           />
        //         </div>
        //       ))}
        //     </div>
        //   </nav>
        // </header>
    );
};

export default Navbar;

