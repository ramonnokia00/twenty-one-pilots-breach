
import { NavLink } from "react-router"
import logomaisnome from "../assets/logomaisNome.webp"
import { useState } from "react";
const Header = () => {
    const [classeAtiva , setClasseAtiva] = useState(false);
    const alternarClasse = () => {
        setClasseAtiva(!classeAtiva)
    }

    return (<>
        <div className=" text-red-600 w-full h-[450px]">
            <div className="flex justify-center"><img src={logomaisnome} alt="" className="h-[275px] flex"/></div>
            
            <div className="flex items-center justify-center gap-6">
            <h2 className="text-3xl uppercase text-center hover:underline hover:text-red-700 "><a href="">Albuns</a></h2>
            <h2 
            onClick={Sobre}
            className={`hover:text-red-700 text-3xl hover:underline uppercase ${classeAtiva ? "text-red-600" : "text-blue-600"}`} id="#Sobre" > <NavLink to={"/"}>Sobre</NavLink></h2>
            <h2 className="text-red-600 hover:text-red-700 text-3xl hover:underline uppercase"> <a href="">Youtube</a></h2>
            <h2 className="text-red-600 hover:text-red-700 text-3xl hover:underline uppercase"> <a href="">Site Oficial</a></h2>
            
            </div>
            
<h1 className=""></h1>

        </div>
    </>);
}

export default Header;