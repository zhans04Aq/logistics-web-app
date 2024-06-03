/* eslint-disable no-unused-vars */

import React, { useState, useEffect,useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
    {
        title: "Расширение складских помещений",
        text: "Наша логистическая компания с радостью объявляет о расширении наших складских помещений. Благодаря увеличенной вместимости мы сможем разместить больше товаров и обеспечить более быструю и эффективную обработку заказов для наших клиентов. Это расширение является подтверждением нашего стремления к удовлетворению растущих потребностей наших клиентов и обеспечению бесперебойной логистики.",
        img: "https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/pexels-cottonbro-4046148.jpg",
        slideDate: ""
    },
    {
        title: "Введение экологически чистых транспортных средств для доставки",
        text: "В рамках нашей постоянной работы по снижению углеродного следа, мы с гордостью представляем парк экологически чистых транспортных средств для доставки. Эти транспортные средства работают на электричестве или гибридной технологии, что значительно снижает выбросы и способствует устойчивому транспорту. Принятие этих экологически чистых транспортных средств является нашим вкладом в более зеленое будущее и предоставлением экологически осознанных логистических решений нашим клиентам.",
        img: "https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/pexels-laura-tancredi-7078717.jpg",
        slideDate: ""
    },
    {
        title: "Новое партнерство для международных перевозок",
        text: "Мы с радостью объявляем о нашем новом партнерстве с глобальным поставщиком услуг по международным перевозкам, расширяя наши возможности для международных перевозок. Это сотрудничество позволит нам проникнуть на новые рынки, улучшить нашу сеть перевозок и предложить конкурентные тарифы для международных отправлений. С данной партнерской программой мы стремимся предоставить комплексные логистические решения для бизнесов, желающих расширить свою деятельность на международном уровне.",
        img: "https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/pexels-cottonbro-7437499.jpg",
        slideDate: ""
    },
];

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startTouch, setStartTouch] = useState(0);
    const [endTouch, setEndTouch] = useState(0);
    const form = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
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

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_wwkh8un', 'template_38z8wfq', form.current, {
            publicKey: 'ButAhbfR6s_QD-aJL',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className='w-full'>
            <div className="flex flex-col items-center justify-center mt-20 lg:h-screen">
                <div
                    className="absolute top-16 left-0 w-full h-screen bg-no-repeat bg-cover my-4"
                    style={{ backgroundImage: "url('https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/clay-banks-xvs-ukuouao-unsplash.jpg')" }}
                >
                    <div className="relative w-full h-full bg-whiteTint"></div>
                </div>
                <div className="flex flex-col items-center z-0 w-full justify-center my-14 space-y-10">
                    <h1 className="text-primaryNavy text-3xl font-normal font-Oswald lg:text-6xl text-center">Almaty Logistics: Превосходство в сфере транспортных услуг</h1>
                    <p className="font-Quicksand text-sm lg:text-lg text-center">
                        Откройте для себя стремление Almaty Logistics к эффективности, надежности и удовлетворенности клиентов в наших услугах.
                    </p>
                    <div className="flex w-2/3 flex-col items-center lg:flex-row lg:w-1/3 text-center gap-3">
                        <NavLink to='/About' className="bg-primaryNavy w-full lg:w-1/2 rounded py-2 my-1 font-bold font-Quicksand text-white border border-primaryNavy">УЗНАТЬ БОЛЬШЕ</NavLink>
                        <NavLink to='/Services' className="border-solid rounded border-primaryNavy w-full lg:w-1/2 py-2 border my-1 text-primaryNavy font-semibold">ЗАКАЗАТЬ СЕЙЧАС</NavLink>
                    </div>
                </div>
            </div>
            <div className='relative w-full overflow-hidden flex flex-col'>
                <div
                    className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="flex-shrink-0 w-full h-screen relative">
                            <img src={slide.img} alt="slide img" className="object-cover w-full h-full" />
                            <div className="absolute bottom-0 left-0 p-10 bg-white bg-opacity-75 w-full text-start min-h-min">
                                <div className='lg:w-1/2'>
                                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                                    <p className="mt-2">{slide.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='hidden lg:flex absolute justify-center items-center w-full h-3/4 px-5'>
                    <div className='flex w-full justify-between '>
                        <button onClick={prevSlide} className='rounded-full bg-primaryNavy p-2'><FaAngleLeft size={30} color='white' /></button>
                        <button onClick={nextSlide} className='rounded-full bg-primaryNavy p-2'><FaAngleRight size={30} color='white' /></button>
                    </div>
                </div>
            </div>
            <div className='bg-white w-full px-4'>
                <p className='font-Quicksand text-xs text-start mx-auto py-24 md:text-2xl md:w-2/3'>
                    Наши логистические услуги призваны обеспечить комплексные решения для оптимизации ваших бизнес-процессов. Используя современные технологии, мы предлагаем множество функций, которые помогут вам повысить производительность и удовлетворенность клиентов. С помощью нашей простой в использовании платформы управление вашими логистическими операциями становится проще и быстрее, чем когда-либо прежде. А благодаря неограниченной масштабируемости вы можете развернуть одно и то же решение в нескольких местах, не беспокоясь о совместимости или проблемах с производительностью.
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-1/2 py-5 pl-10 text-start ' >
                    <h3 className='text-3xl font-bold'>Свяжитесь с нами</h3>
                    <h1 className='text-6xl mt-2 mb-4 text-primaryNavy font-semibold'>Хотите задать вопрос?</h1>
                    <p className='mb-6'>
                        Свяжитесь с нами, когда у вас возникнут вопросы. Мы всегда здесь для тебя!
                    </p>
                    <form ref={form} onSubmit={sendEmail} className='w-5/6 xl:w-full max-w-lg text-start'>
                        <div className='flex flex-col md:flex-row md:space-x-4 mb-4'>
                            <div className='w-full'>
                                <label htmlFor="fname" className='block text-sm font-medium'>Имя</label>
                                <input type="name" name='user_fname' className='mt-1 p-2 border border-gray-300 w-full' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="lname" className='block text-sm font-medium'>Фамилия</label>
                                <input type="lastname" name='user_lname' className='mt-1 p-2 border border-gray-300 w-full' />
                            </div>  
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-sm font-medium'>Email</label>
                            <input type="email" name='user_email' className='mt-1 p-2 border border-gray-300 w-full' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="phone" className='block text-sm font-medium'>Телефон</label>
                            <input type="phone" name='user_phone_number' className='mt-1 p-2 border border-gray-300 w-full' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-sm font-medium'>Сообщение</label>
                            <textarea name="message" id="message" cols="30" rows="5" className='mt-1 p-2 border border-gray-300 w-full'></textarea>
                        </div>
                        <button type='submit' className='bg-primaryNavy text-white py-2 px-4 rounded'>
                            Отправить
                        </button>
                    </form>
                </div>
                <div className='w-full md:w-3/5'>
                <iframe className='w-full' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae33941f6c9165b5294fecd9c8581b4c186a6e133a07a1e7e47acfaeee858658c&amp;source=constructor" width="850" height="650"></iframe>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
