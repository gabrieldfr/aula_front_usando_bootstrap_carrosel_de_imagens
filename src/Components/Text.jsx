export default function Banner() {
    return (
        <div id="carouselNaveg" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="http://lorempixel.com.br/1117/300/?2" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="http://lorempixel.com.br/1117/300/?1" className="d-block w-100" alt="..." />
                </div>
            </div>

            {/* botao de navegação */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNaveg" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNaveg" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}