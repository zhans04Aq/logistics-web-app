
import { useState } from "react";

//----------------------------//
import { NavLink, Outlet } from "react-router-dom"
import { FiMenu } from "react-icons/fi";

//----------------------------//
import Modal from "./Modal";



//----------------------------//
function Layout() {
    return ( 
        <>
            <header className="flex justify-between items-center max-w-7xl my-0 mx-auto">
                <div className="flex gap-8 items-center">
                    <h1 className="text-3xl font-semibold">Logo</h1>
                    <nav className="hidden lg:block space-x-4 text-xl font-medium">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/About">О нас</NavLink>
                        <NavLink to="/Services">Сервисы</NavLink>
                    </nav>
                </div>
                <div className="lg:flex gap-3 text-xl items-center hidden">
                    <button className="font-bold hover:text-primaryNavy">Войти</button>
                    или
                    <button className="font-bold hover:text-primaryNavy border border-primaryNavy rounded-lg px-3 py-3">Регистрация</button>
                </div>
                {/* <FiMenu className="lg:hidden"/> */}
                {/* <Modal/> */}
            </header>
            <main className="w-full">
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    );
}

export {Layout};