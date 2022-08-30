import React from "react";

function Form() {
  return <form action="">
    <h1>Cadastro</h1>
    <label htmlFor="">Nome</label>
    <input type="text" />
    <label htmlFor="">Sobrenome</label>
    <input type="text" />
    <label htmlFor="">Email</label>
    <input type="email" />
    <label htmlFor="">Telefone</label>
    <input type="tel"/>
  </form>;
}

export default Form;
