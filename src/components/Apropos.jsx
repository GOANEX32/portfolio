import React from "react";


const Apropos = () => {
    return(
        <div name="apropos" className="w-full h-screen bg-[#0a192f] text-gray-300" >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">A propos</p>
                    </div>
                    <div>

                    </div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>Salut, je suis Abdrahamane, ravi de te rencontrer, jette un oeil autour.</p>
                        </div>
                        <div>
                            <p>J'ai obtenu mon diplôme en informatique et j'ai depuis travaillé sur plusieurs projets personnels 
                                pour améliorer mes compétences en développement web, et j'ai toujours été passionné par les nouvelles technologies et les tendances du marché.
                            </p>
                        </div>

                    </div>

                


            </div>

        </div>
    )
}

export default Apropos