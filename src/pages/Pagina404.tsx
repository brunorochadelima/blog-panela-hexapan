import React from "react";
import imagem404 from "assets/img-404.png";

export default function Pagina404() {
  return (
    <div>
      <h1>OOOPS!!!</h1>
      <img src={imagem404} alt="Erro 404" />
      <p>Não encontramos esta página</p>
    </div>
  );
}
