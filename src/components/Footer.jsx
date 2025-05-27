import { NavLink } from "react-router";
import logosvg from "../assets/logosvg.svg"

const Footer = () => {
    return (<>
        <div className="text-red-600">
            <div className="justify-center flex py-4">
                <img src={logosvg} alt="" className="w-[30px]" />
            </div>
            <table className="flex ml-10 text-start hover:text-center my-6 custom-max:gap-[40px] min-xl:gap-[60px] ">
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-white duration-200 hover:underline text-2xl">Twenty One Pilots(2009)</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-white duration-200 hover:underline">Musicas</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-white duration-200 hover:underline">Sobre o Disco</li>
                </ul>
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-azul-vessel duration-200 hover:underline text-2xl"><NavLink to="/">Vessel(2013)</NavLink></li>
                    <li className="cursor-pointer hover:ml-4 hover:text-azul-vessel duration-200 hover:underline">Musicas</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-azul-vessel duration-200 hover:underline">Sobre o Disco</li>
                </ul>
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-blurryface duration-200 hover:underline text-2xl">Blurryface(2015)</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-blurryface duration-200 hover:underline">Musicas</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-blurryface duration-200 hover:underline">Sobre o Disco</li>
                </ul>
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-amarelo-trench duration-200 hover:underline text-2xl">Trench(2018)</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-amarelo-trench duration-200 hover:underline">Musicas</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-amarelo-trench duration-200 hover:underline">Sobre o Disco</li>
                </ul>
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-rosa-scaleandicy duration-200 hover:underline text-2xl">Scaled And Icy(2022)</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-rosa-scaleandicy duration-200 hover:underline">Musicas</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-rosa-scaleandicy duration-200 hover:underline">Sobre o Disco</li>
                </ul>
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline text-2xl">Clancy(2024)</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline">Musicas</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline">Sobre o Disco</li>
                </ul>
                <ul>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline text-2xl">Breach(2025)</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline">Musicas - Em Breve!</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline">Sobre o Disco - Em Breve!</li>
                    <li className="cursor-pointer hover:ml-4 hover:text-vermelho-clancy duration-200 hover:underline">Em Breve!</li>
                </ul>
            </table>
            <div className="border-t-1 text-center">
            <h1 className=" py-4">@2025 - Ramon Soares</h1>
            </div>
        </div>
    </>);
}

export default Footer;