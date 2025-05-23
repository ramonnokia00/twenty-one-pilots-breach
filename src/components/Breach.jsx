import imagemBreach from "../assets/top_breach.svg"
import imagemCardDoubtDemo from "../assets/Promocardoubtcinza.jpeg"
import iconespotify from   "../assets/boxiconsspotify.svg"


const Breach = () => {
    return (
        <>
            <div className="flex justify-center">
                <img src={imagemBreach} alt="" />
            </div>
            <h1 className="text-center text-4xl text-red-600 mt-6 mb-6">Disponivel em Toda as Plataformas em Setembro De 2025</h1>
            <div className=" w-full h-[450px] bg-[#424651]/20">
                <div className="justify-center flex gap-6 ">
                    <button className="bg-[#FFD900] p-6 mt-6 rounded cursor-pointer hover:bg-yellow-400 hover:underline">Faça pre-order</button>
                    <button className="bg-[#FFD900] p-6 mt-6 rounded cursor-pointer hover:bg-yellow-400 hover:underline">Faça pre-order</button>
                </div>
                <div className="flex justify-between">
                    <p className="text-red-600 pt-6 bg-black mt-6 rounded-[20px] w-[200px] p-5 ml-8">De surpresa, Twenty One Pilots, banda estadunidense <br />formada por Tyler Joseph e Josh Dun, anunciou o oitavo <br /> disco de estúdio da carreira,intitulado Breach e com data de lançamento <br /> marcada ainda para 2025.</p>
                    <div className=" bg-black w-[200px] rounded mt-6 gap-3">
                        <img src={imagemCardDoubtDemo} alt="" className="w-[200px] h-[150px] rounded "/><b className=" bg-[#FFD900] rounded hover:bg-yellow-500 duration-150 cursor-pointer justify-center flex mt-2">Ouça Agora!</b>
                        <p className=" text-red-600 flex">Enquanto o album não saiu ouça agora o ultimo EP lançado.</p>
                        <b className="w-[200px] h-[60px] bg-red-600 "></b>
                        
                        
                </div>
                <div className="bg-black w-[200px] h-[200px] mt-6 items-center">
                            <b className="bg-[#FFD900] justify-center flex mt-4 rounded cursor-pointer hover:bg-amber-400 "><img src={iconespotify} alt="" /></b>
                        </div>
                    <p className="text-red-600 bg-black mt-6 rounded-[20px] w-[200px] pt-5 pl-5 pr-5 mr-8">Afinal, o que a banda quis dizer com "vamos terminar isso"? Desde Blurryface (2015), o grupo começou a trazer uma narrativa nos discos — <br />e seguiu com Trench (2018), Scaled and Icy e Clancy (2024)</p>
                </div>
            </div >
        </>);
}

export default Breach;