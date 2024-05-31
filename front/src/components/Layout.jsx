import { NavLink, Outlet } from "react-router-dom"
import { FiMenu } from "react-icons/fi";

import { useState } from "react";

function Layout() {
    return ( 
        <>
            <header className="flex justify-between items-center max-w-7xl mx-auto my-0">
                <div className="flex gap-8 items-center">
                    <h1 className="text-3xl font-semibold">Logo</h1>
                    <nav className="hidden lg:block space-x-4 text-xl font-medium">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/About">О нас</NavLink>
                        <NavLink to="/Services">Сервисы</NavLink>
                    </nav>
                </div>
                <div className="flex gap-3 text-xl border border-primaryNavy px-3 py-3">
                    <button className="font-bold hover:text-primaryNavy">Войти</button>
                    или
                    <button className="font-bold hover:text-primaryNavy">Регистрация</button>
                </div>
                <FiMenu className="lg:hidden"/>
            </header>
            <div className="absolute w-2/3 h-2/3 top-1/2 left-1/2 z-20 bg-white" style={{}}>

            </div>
            <main className="w-full">
                <Outlet/>
            </main>
            <footer></footer>
        </>
    );
}

export {Layout};