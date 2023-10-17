export default function Images() {
    return (
        <>
            <section>
                <img src="http://lorempixel.com.br/800/200/?1" className="img-fluid" alt="Lorem picsum image" />
                <hr />
                <img src="http://lorempixel.com.br/300/200/?2" className="img-thumbnail" alt="Lorem picsum image" />
                <br /><br />

                <figure>
                    <img src="http://lorempixel.com.br/500/400/?3" className="rounded float-start img-fluid" alt="Lorem Ipsum Image" />

                    <img src="http://lorempixel.com.br/500/400/?4" className="rounded float-end img-fluid" alt="Lorem Ipsum Image" />
                </figure>
            </section>
        </>
    )
}