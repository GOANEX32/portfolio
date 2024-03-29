import React from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImg from "../assets/react.png"
import Node from "../assets/node.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import mongo from "../assets/mongo.png"


const Competence = () => {

    return(
        <div name="competence" className="w-full h-screen bg-[#0a192f] text-gray-300" >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Compétences</p>
                    <p className="py-4">// les technologies avec lesquelles je travaille</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={html} alt="html icone"/>
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={css} alt="css icone"/>
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={javascript} alt="javascript icone"/>
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={reactImg} alt="react icone"/>
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={github} alt="github icone"/>
                        <p className="my-4">GITHUB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="node icone"/>
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={mongo} alt="mongo icone"/>
                        <p className="my-4">MONGO DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={tailwind} alt="tailwind icone"/>
                        <p className="my-4">TAILWIND</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Competence