export default function Card() {
    return (
        <div className="d-md-flex mt-4 justify-content-around">
            <div className="card col-md-5">
                <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?2" alt="" />
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <a className="link-success text-center mb-4" href="#">Veja mais</a>
            </div>

            <div className="card col-md-5">
                <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?2" alt="" />
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <a className="link-success text-center mb-4" href="#">Veja mais</a>
            </div>
        </div>
    )
}