import { useState } from "react";

export function Formulario() {
  const [Cedula, setCedula] = useState("");
  const [Contraseña, setContraseña] = useState("");

  function procesarFormulario(e) {
    e.preventDefault();
    console.log("procesar formulario");
  }

  return (
    <>
      <section className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <img src="../../src/assets/logo.png" alt="" className="img-fluid" />
            <form className="border rounded p-4" onSubmit={procesarFormulario}>
              <h2>Controla tu salud</h2>

              <div className="input-group mb-3 mt-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numero cedula"
                  id="identificacion"
                  value={Cedula}
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>
              <div className="input-group mb-3 mt-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-file-lock2"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="contraseña"
                  value={Contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
