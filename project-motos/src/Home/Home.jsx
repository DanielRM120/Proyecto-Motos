const Home = () => {
    return(
        <><>
            <section id="hero">
                <h1>Pide los mejores<br />Técnicos</h1>
                <form>
                    <button className="btnHome">REGISTRATE YA!</button>
                </form>
            </section>
            <section id="hero2">
                <div className="container">
                    <div className="img-container"></div>
                    <div className="texto">
                        <h2>Somos <span className="color-titulo-hero2"> Motorbike upkeep!</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                            possimus temporibus minus nostrum iure pariatur eligendi vitae
                            labore illum qui autem voluptatum asperiores magni facilis,
                            molestias veniam ipsam ut.
                        </p>
                    </div>
                </div>
            </section>

            <section id="nuestros-beneficios">
                <div className="container">
                    <h2>Nuestros Planes</h2>
                    <div className="beneficios">
                        <div className="carta">
                            <h3>Basico</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                                enim nulla doloremque itaque aspernatur deleniti? Accusantium ex,
                                consectetur sint praesentium ab obcaecati, repellendus nam dolorem
                                placeat fugit eligendi blanditiis iusto.
                            </p>
                            <button className="btnHome">+ Info</button>
                        </div>

                        <div className="carta">
                            <h3>Gold</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                                enim nulla doloremque itaque aspernatur deleniti? Accusantium ex,
                                consectetur sint praesentium ab obcaecati, repellendus nam dolorem
                                placeat fugit eligendi blanditiis iusto.
                            </p>
                            <button className="btnHome">+ Info</button>
                        </div>

                        <div className="carta">
                            <h3>Platinum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                                enim nulla doloremque itaque aspernatur deleniti? Accusantium ex,
                                consectetur sint praesentium ab obcaecati, repellendus nam dolorem
                                placeat fugit eligendi blanditiis iusto.
                            </p>
                            <button className="btnHome">+ Info</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="caracteristicas">
                <div className="container">
                    <li>✔ Domicilio</li>
                    <li>✔ Tecnicos Verificados</li>
                    <li>✔ Certificacion</li>
                </div>
            </section>
        </><footer>
                <div className="container">
                    <h2>Contáctanos</h2>
                    <li>123-345-789</li>
                    <br />
                    <li>Carrera 13D 100-23 Bogota D.C</li>
                    <br />
                    <li>Lunes a Sábado de 7 AM a 5 PM</li>
                    <br />
                </div>
            </footer>
        </>
    )

}

export default Home;