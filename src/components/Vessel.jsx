import vesselcapa from "../assets/imagemmelhor_vessel.webp"
import play from "../assets/bx-play.svg"
const Vessel = () => {
    return (
        <>
            <div className=" text-azul-vessel w-full h-full flex justify-center gap-6">
                <div>
                    <img src={vesselcapa} alt="" className="w-[400px] rounded" />
                </div>
                <div className="bg-black w-[220px] rounded-[20px] text-blue-600">
                    <p className="text-center p-[20px]">Vessel é o terceiro álbum de estúdio do duo Twenty One Pilots, lançado em 8 de janeiro de 2013 pela gravadora Fueled by Ramen. O álbum estreou na posição 58 na parada Billboard 200 e atingiu o pico na posição 21 em 2016. Em julho de 2019, Vessel vendeu mais de dois milhões de unidades equivalentes de álbuns nos EUA. Todas as suas faixas foram certificadas pelo menos Ouro pela RIAA, tornando o Twenty One Pilots o primeiro grupo ou artista a alcançar esse feito com dois álbuns separados.</p>
                </div>
                <div className="text-blue-600 bg-gray-500 w-[350px]">
                <label>
                    <h1 className="text-center text-3xl border-b-2">Albums</h1>
                    <ol className="px-8">
                        <a href=""><img src={play} alt="" /></a>
                    </ol>
                </label>

                </div>
            </div>
        </>
    );
}

export default Vessel;