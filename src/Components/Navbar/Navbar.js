import { GiHamburgerMenu } from "react-icons/gi";



const Navbar=({sidebar,setsidebar})=>{

const showsidebar=()=>{
    setsidebar(!sidebar)
}

    return(
        <div className="absolute top-0 left-0 w-full
        py-2 text-white z-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* logo-section */}
                    <h1 className="text-4xl font-bold
                    uppercase">
                        Orange <span className="font-normal
                    text-2xl">Mint</span></h1>
                    {/* navlinks section */}
                    <ul className="lg:flex hidden space-x-4
                    text-xl gap-10">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Where to find</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    {/* hamburgeer menu */}
                 
                    <div onClick={showsidebar}>
                        <GiHamburgerMenu className="text-3xl  cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
    export default Navbar;