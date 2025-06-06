import imagemtwenty2009 from "../assets/2009.png"
import imagemtwenty22009 from "../assets/2009pt2.jpg"
import imagemtwenty32009 from "../assets/2009pt3.png"

const Twenty2009 = () => {
    return (<>
        <div className=" text-azul-vessel w-full h-full flex justify-center gap-6">
            <div>
            <div className="carousel w-full max-w-lg mx-auto">
                  <div id="slide1" className="carousel-item relative ">
                    <img src={imagemtwenty2009} className="w-full" alt="Slide 1" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative ">
                    <img src={imagemtwenty22009} className="w-full" alt="Slide 2" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative ">
                    <img src={imagemtwenty32009} className="w-full" alt="Slide 3" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
            </div>
            <div className=" w-[220px] rounded-[20px] bg-[#40965b]">
                <p className="text-center p-[20px] text-[#fff85d]">Álbum de estreia da banda americana Twenty One Pilots, lançado em 29 de dezembro de 2009. Gravação caseira em Columbus, Ohio, com Tyler Joseph, Nick Thomas e Chris Salih. Mistura indie pop, emo e rock alternativo, abordando temas como angústia existencial e crítica social. Vendeu 115 mil cópias e alcançou a posição 139 na Billboard 200.
                </p>
            </div>
            <div className=" bg-[#ff9baa] w-[350px] rounded-[24px] text-[#fff85d]">
                <label>
                    <h1 className="text-center text-3xl border-b-2">Albums</h1>

                </label>

            </div>
        </div>
    </>);
}

export default Twenty2009;