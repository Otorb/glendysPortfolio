import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="shade">
      <div className="blackboard">
        <div className="formas">
          <p className="pClass" >
            <label className="labelClas">Nombre: </label>
            <input className="inputClas"  type="text" />
          </p>
          <p className="pClass" >
            <label className="labelClas">Correo: </label>
            <input className="inputClas" type="text" />
          </p>
          <p className="pClass" >
            <label className="labelClas">Mensaje: </label>
            <textarea></textarea>
          </p>
          <p className="wipeout">
            <input className="inputClas"  type="submit" value="Send" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
