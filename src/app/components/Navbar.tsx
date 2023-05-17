import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    return (
        <div className="bg-[#ffffff] h-12 flex justify-between items-center p-4" >
            {/* Left Side */}
            <div className="flex gap-2">
                <Link href='/'>
                    <Image src="/assets/twitch_logo.png" alt='/' width='30' height='30' />
                </Link>
                <Link href='/parcourir'>Parcourir</Link>
{/* !!! Je ne px pas choisir la hauteur des img ! */}
                <Image className="cursor-pointer" src="/assets/3dots.png" alt='/' width='30' height='20' />
            </div>

            {/* Middle */}
            <div className="">
                <div className="flex">
                    <input
                        type='text'
                        className="border-solid border-black border rounded-l-md pl-2"
                        placeholder="Rechercher"
                    />
                    <Image className=" bg-slate-200 rounded-r-md p-1" src="/assets/loupe.png" alt='/' width='30' height='30' />
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
                <Image className="cursor-pointer" src="/assets/membre.png" alt='/' width='20' height='10' />
            </div>           
        </div>
    );
};

export default Navbar;

