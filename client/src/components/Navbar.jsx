import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore";
import { LogOut, Menu, Search } from "lucide-react";
import { useContentStore } from "../store/content";

const Navbar=()=>{
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const  {user, logout}=useAuthStore();

    const toggleMobileMenu=()=>{
        setIsMobileMenu(!isMobileMenu)
    }

    const { setContentType } = useContentStore();
    
    return(
        <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
            <div className="flex items-center gap-10 z-50">
                <Link to="/">
                    <img src="/netflix-logo.png" alt="Netflix Logo" className="w-32 sm:w-40"></img>
                </Link>

                {/*desktop navbar items*/}
                <div className="hidden sm:flex sm:gap-2 gap-4 items-center">
                    <Link to="/" className="hover:underline" onClick={()=> setContentType("movie")}>
                        Movies
                    </Link>
                    <Link to="/" className="hover:underline" onClick={()=> setContentType("tv")}>
                        Tv Shows
                    </Link>
                    <Link to="/history" className="hover:underline">
                        Search History
                    </Link>
                </div>
            </div>

            <div className="flex gap-6 items-center z-50">
                <Link to={'/search'}>
                    <Search className="size-6 cursor-pointer" />
                </Link>
                <img src={user.image} alt="Avatar" className="h-8 rounded cursor-pointer" />
                <LogOut className="size-6 cursor-pointer" onClick={logout} />
                <div className="sm:hidden">
                    <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu}></Menu>
                </div>
            </div>

            {/*mobile navbar items*/}
            {isMobileMenu &&(
                <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
                    <Link to={"/"} className="block hover:underline p-2" onClick={toggleMobileMenu}>Movies</Link>
                    <Link to={"/"} className="block hover:underline p-2" onClick={toggleMobileMenu}>Tv Shows</Link>
                    <Link to={"/history"} className="block hover:underline p-2" onClick={toggleMobileMenu}>Search History</Link>
                </div>
            )}
            
        </header>
    )
}

export default Navbar;