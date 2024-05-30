import { NavLink, Outlet } from "react-router-dom"
import { FiMenu } from "react-icons/fi";

function Layout() {
    return ( 
        <>
            <header className="flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <h1 className="text-3xl font-semibold">Logo</h1>
                    <nav className="hidden lg:block space-x-4 text-xl font-medium">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/About">About Us</NavLink>
                        <NavLink to="/Services">Services</NavLink>
                    </nav>
                </div>
                <FiMenu className="lg:hidden"/>
            </header>

            <main >
                <Outlet/>
            </main>

            <footer>
                Footer
            </footer>
        </>
    );
}

export {Layout};