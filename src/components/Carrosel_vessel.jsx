import imagemvessel1 from "../assets/imagemmelhor_vessel.webp";
import imagemvessel2 from "../assets/imagemvessel2.webp";
import imagemvessel3 from "../assets/imagemvessel3.webp";

const Carrosel_vessel = () => {
  return (
    <div className="carousel w-full max-w-lg mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={imagemvessel1} className="w-full" alt="Slide 1" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={imagemvessel2} className="w-full" alt="Slide 2" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={imagemvessel3} className="w-full" alt="Slide 3" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carrosel_vessel;
