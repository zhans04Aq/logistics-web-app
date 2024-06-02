/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


// -------------------------- //
import { AnimatePresence, motion } from "framer-motion";

// -------------------------- //

import { IoIosClose } from "react-icons/io";
// -------------------------- //
const modalAnimSttgs= {
    initial:{
        scaleX:0,
    },
    animate:{
        scaleX:1,

    },
    exit:{
        scaleX:0,
    }
}

const ModalLogin = ({ loginModalState, loginModalFunc}) => {

    const closeHandler =()=>{
        return !loginModalState
    }

    return (
        <div className="">
            <AnimatePresence>
                {loginModalState  && (
                    <motion.div
                        variants={modalAnimSttgs}
                        initial = "initial" animate = "animate" exit="exit"
                        className="fixed lg:w-1/4 lg:h-2/4 w-full h-screen bg-white rounded-xl z-20 right-0 lg:left-2/4 origin-right lg:origin-center border ">
                        <div className="flex flex-col p-10">
                            <IoIosClose className="self-end" size={40} onClick={()=>loginModalFunc()}/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
  };

const ModalRegister = ({ regModalState,regModalFunc }) => {
    return (
        <div className="">
            <AnimatePresence>
                {regModalState  && (
                    <motion.div
                    variants={modalAnimSttgs}
                    initial = "initial" animate = "animate" exit="exit"
                    className="fixed lg:w-1/4 lg:h-2/4 w-full h-screen bg-white rounded-xl z-20 right-0 lg:left-2/4 origin-right lg:origin-center border">
                        <div className="flex flex-col p-10">
                            <IoIosClose className="self-end cursor-pointer" size={40} onClick={()=>regModalFunc()}/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export {ModalLogin, ModalRegister};
