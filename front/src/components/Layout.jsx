/* eslint-disable no-unused-vars */

import { useState } from "react";

//----------------------------//
import { IoIosClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";

//----------------------------//
import { NavLink, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

//----------------------------//

import {ModalLogin, ModalRegister} from './Modal';



//----------------------------//
function Layout() {

    const [open, setOpen] = useState(false);
    const toggleMenu = ()=>{
        setOpen((prevOpen)=>!prevOpen)
    };

    const [loginModal, setLoginModal] = useState(false)
    const [regModal, setRegModal] = useState(false)

    const toggleLoginModal = () =>{
        if(regModal){
            setRegModal(prevReg => !prevReg)
            setLoginModal(prevLog=> !prevLog)
        } else {
            setLoginModal(prevLog=> !prevLog)
        }
    }

    const toggleRegModal = () =>{
        if(loginModal){
            setLoginModal(prevLog=> !prevLog)
            setRegModal(prevReg => !prevReg)
        } else {
            setRegModal(prevReg => !prevReg)
        }
    }
 
    const menuVars = {
        initial:{
            scaleX: 0,
        },
        animate:{
            scaleX:1,
            transition:{
                duration:0.5,
                ease:[0.12, 0, 0.39, 0],
            }
        },
        exit:{
            scaleX:0,
            transition:{
                duration:0.5,
                ease:[0.12, 0, 0.39, 0],
            }
        }
    };

    return ( 
        <>
            <header className="sticky top-0 z-20 bg-mainBg py-2">
                <div className="flex justify-between items-center max-w-7xl px-10 my-0 mx-auto">
                    <div className="flex gap-8 items-center">
                        <h1 className="text-3xl font-semibold">Logo</h1>
                        <nav className="hidden lg:block space-x-4 text-xl font-medium">
                            <NavLink to="/">Главная</NavLink>
                            <NavLink to="/About">О нас</NavLink>
                            <NavLink to="/Services">Сервисы</NavLink>
                        </nav>
                    </div>
                    <div className="lg:flex gap-3 text-xl items-center hidden">
                        <button onClick={()=>toggleLoginModal()} className="font-bold hover:text-primaryNavy">Войти</button>
                        или
                        <button onClick={()=>toggleRegModal()} className="font-bold hover:text-primaryNavy border border-primaryNavy rounded-lg px-3 py-3">Регистрация</button>
                    </div>
                    <FiMenu className="lg:hidden" onClick={()=>toggleMenu()}/>
                    <AnimatePresence>
                    {
                        open&&(
                        <motion.div
                        variants={menuVars} 
                        initial = "initial" animate = "animate" exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-right bg-white text-black p-10 z-10 ">
                            <div className="flex h-full flex-col">
                                <div className="flex justify-end">
                                    <IoIosClose size={40} onClick={()=>toggleMenu()}/>
                                </div>
                                <div className="flex flex-col items-center">
                                <NavLink to="/">Главная</NavLink>
                                <NavLink to="/About">О нас</NavLink>
                                <NavLink to="/Services">Сервисы</NavLink>
                                <div className="flex flex-col gap-3 text-md items-center my-10">
                                    <button onClick={()=>toggleLoginModal()} className="font-bold hover:text-primaryNavy ">Войти</button>
                                    <button onClick={()=>toggleRegModal()} className="font-bold hover:text-primaryNavy border border-primaryNavy rounded-lg px-3 py-3">Регистрация</button>
                                </div>
                                </div>
                            </div>
                        </motion.div>
                        )
                    }

                    </AnimatePresence>
                </div>
            </header>
            <ModalLogin loginModalState={loginModal} loginModalFunc={toggleLoginModal}/>
            <ModalRegister regModalState={regModal} regModalFunc={toggleRegModal}/>
            <main className="w-full">
                <Outlet/>
            </main>
            <footer className="flex flex-col md:flex-row items-center md:items-start w-full justify-center md:justify-between border-t-2">
                <div className="flex items-center justify-around w-3/4 flex-wrap gap-3">
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-bold text-primaryNavy">Logo</h1>
                        <div className="flex items-center justify-center space-x-5 my-5 w-full">
                            <a href=""><FaFacebookF color="#213F99 " size={20}/></a>
                            <a href=""><CiInstagram color="#213F99" size={20}/></a>
                            <a href=""><IoLogoYoutube color="#213F99" size={20}/></a>
                        </div>
                    </div>
                    <div className="flex flex-col text-start xs:text-xl">
                        <NavLink  to="/">Главная</NavLink>
                        <NavLink to="/About">О нас</NavLink>
                        <NavLink to="/Services">Сервисы</NavLink>
                    </div>
                    <div className="text-primaryNavy text-center my-5 md:text-start">
                        <h1 className="text-2xl font-semibold">Рабочие дни</h1>
                        <p>ПН - СБ</p>
                        <p>09:00 - 19:30</p>
                    </div>
                </div>

                <img  className="relative right-0 w-full md:w-1/3 object-cover" src="https://img2.hocoos.com/cache/img-pack/1/w-620/h-285/ww-620/wh-285/img-pack/1/default-footer-bg.png" alt=""/>
            </footer>
        </>
    );
}

export {Layout};