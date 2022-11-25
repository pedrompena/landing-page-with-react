import React from "react";

const Jumpbotron = () => {
    return ( 
        <div className="p-5 mb-4 bg-secondary rounded-3 mt-4">
            <div className="container-fluid py-4">
                <h1 className="display-5 fw-bold">Bello!</h1>
                <p className="col-md-8 fs-4">
                    Somos pequeñas criaturitas amarillas dispuestas al servicio del villano mas despreciable de todos los tiempos.
                    <br />
                    Eres tu? pincha el siguiente botón!
                </p>
                <a href="mailto: minions@gru.com">
                    <button className="btn btn-warning btn-lg" type="button">Para Tu!</button>                    
                </a>
            </div>
        </div>
     );
}
 
export default Jumpbotron;