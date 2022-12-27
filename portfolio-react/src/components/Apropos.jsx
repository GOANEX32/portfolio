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
                            <p>Salut, je suis Abdrahamne, ravie de te rancontre, jete un oeil autour.</p>
                        </div>
                        <div>
                            <p>J'aime cree des application qui ont une utilité 
                                autour pour les gens, pour une perssone ou une entreprise,
                            </p>
                        </div>

                    </div>

                


            </div>

        </div>
    )
}

export default Apropos