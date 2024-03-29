import React from "react";
import { app } from "../firebase/fb";
import "./Blog.css";
import Carousel from 'better-react-carousel'


function BlogComponent() {
  const [archivoUrl, setArchivoUrl] = React.useState("");
  const [docus, setDocus] = React.useState([]);
  let docusList;
  React.useEffect(() => {
    async function infoData() {
      docusList = await app.firestore().collection("archivos").get();
      setDocus(docusList.docs.map((doc) => doc.data()));
    }
    infoData();
    console.log(docusList, "docus");
  }, []);

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:", archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
      alert("coloca un nombre");
      return;
    }
    const coleccionRef = app.firestore().collection("archivos");
    const docu = await coleccionRef
      .doc(nombreArchivo)
      .set({ nombre: nombreArchivo, url: archivoUrl });
    console.log("archivo cargado:", nombreArchivo, "ulr:", archivoUrl);
    window.location = "/";
  };

  console.log(docus, "docus");
  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <input type="file" onChange={archivoHandler} />
        <input type="text" name="nombre" placeholder="nombra tu archivo" />
        <button>Enviar </button>
      </form> */}
      <div>
        {/* <ul>
          {docus.map((doc) => (
            <div className="fotospace">
              <div className="imageContainer">
              <h3>{doc.nombre}</h3>
              <div className="picturesingle">
              <img className="img"src={doc.url}/>
              </div>
              </div>
              </div>
          ))}
        </ul> */}

<div className="gallery">
<ul>
          {docus.map((doc) => (
            <div className="probando">
           {/* <Carousel cols={1}  gap={5} arrowLeft   >
          <Carousel.Item > */}
          {/* <h3 className="titleport">{doc.nombre}</h3> */}
            <img className="fotopart" src={doc.url} alt={doc.nombre} />
          {/* </Carousel.Item>
          </Carousel> */}

          </div>
          ))}
        </ul>

</div>



      </div>
    </>
  );
}

export default BlogComponent;
