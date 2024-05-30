/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
    {
        title: "Some Title",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore adipisci voluptatum sunt sequi, autem fugiat. Soluta praesentium inventore est saepe debitis adipisci quos deleniti, fugiat, incidunt aut mollitia corrupti laborum.",
        img: "https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/pexels-cottonbro-4046148.jpg",
    },
    {
        title: "Some Title",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore adipisci voluptatum sunt sequi, autem fugiat. Soluta praesentium inventore est saepe дебitis adipisci quos deleniti, fugiat, incidunt aut mollitia corrupti laborum.",
        img: "https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/pexels-laura-tancredi-7078717.jpg"
    },
    {
        title: "Some Title",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore adipisci voluptatum sunt sequi, autem fugiat. Soluta praesentium inventore est saepe debitis adipisci quos deleniti, fugiat, incidunt aut mollitia corrupti laborum.",
        img: "https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/pexels-cottonbro-7437499.jpg"
    },
];

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startTouch, setStartTouch] = useState(0);
    const [endTouch, setEndTouch] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 7000); 
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleTouchStart = (e) => {
        setStartTouch(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setEndTouch(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startTouch - endTouch > 50) {
            nextSlide();
        } else if (startTouch - endTouch < -50) {
            prevSlide();
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center my-20 lg:h-full">
                <div className="bg-firstSectionBg absolute w-full top-16 left-0 bg-no-repeat bg-cover h-3/4 my-4">
                    <div className="relative top-0 left-0 w-full h-full bg-whiteTint"></div>
                </div>
                <div className="flex flex-col items-center z-0 w-full justify-center my-14 space-y-10">
                    <h1 className="text-primaryNavy text-3xl font-normal font-Oswald lg:text-6xl">Almaty Logistics: Превосходство в сфере транспортных услуг</h1>
                    <p className="font-Quicksand text-sm lg:text-lg">
                        Откройте для себя стремление Almaty Logistics к эффективности, надежности и удовлетворенности клиентов в наших услугах.
                    </p>
                    <div className="flex w-full flex-col items-center lg:flex-row lg:w-1/3 gap-3">
                        <button className="bg-primaryNavy w-1/2 py-2 my-1 font-bold font-Quicksand text-white border border-primaryNavy">LEARN MORE</button>
                        <button className="border-solid border-primaryNavy w-1/2 py-2 border my-1">BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 w-full h-screen overflow-hidden flex flex-col">
                <div
                    className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="flex-shrink-0 w-full h-screen relative justify-center">
                            <img src={slide.img} alt="slide img" className="object-cover w-full h-3/4 lg:h-1/2" />
                            <div className="absolute left-0 p-10 bg-white bg-opacity-75 w-full text-start min-h-min">
                                <div className='lg:w-1/2'>
                                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                                    <p className="mt-2">{slide.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='hidden lg:flex absolute justify-center items-center w-full h-2/4 px-5'>
                    <div className='flex w-full justify-between'>
                        <button onClick={prevSlide} className='rounded-full bg-primaryNavy p-2'><FaAngleLeft size={30} color='white' /></button>
                        <button onClick={nextSlide} className='rounded-full bg-primaryNavy p-2'><FaAngleRight size={30} color='white' /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
