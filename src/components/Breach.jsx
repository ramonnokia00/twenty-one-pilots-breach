import imagemBreach from "../assets/top_breach.svg"

const Breach = () => {
    return (
        <>
            <div className="flex justify-center">
                <img src={imagemBreach} alt="" />
            </div>
            <h1 className="text-center text-4xl text-red-600 mt-6 mb-6">Disponivel em Toda as Plataformas em Setembro De 2025</h1>
            <div className=" w-full h-[450px] bg-gradient-to-l from-[#424651] to-[]">
            <div className="justify-center flex gap-6 ">
                <button className="bg-[#FFD900] p-6 mt-6 rounded">Faça pre-order</button>
                <button className="bg-[#FFD900] p-6 mt-6 rounded">Faça pre-order</button>
            </div>
            <div className="flex justify-between">
                <p className="text-red-600 pt-6">De surpresa, Twenty One Pilots, banda estadunidense <br />formada por Tyler Joseph e Josh Dun, anunciou o oitavo disco de estúdio da carreira, <br />intitulado Breach e com data de lançamento marcada ainda para 2025.</p>
                <p className="text-red-600 pt-6">Afinal, o que a banda quis dizer com "vamos terminar isso"? <br />Desde Blurryface (2015), o grupo começou a trazer uma narrativa nos discos — <br />e seguiu com Trench (2018), Scaled and Icy e Clancy (2024)</p>
            </div>
        </div >
        </>);
}

export default Breach;