"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Cadastro() {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    perfil: "",
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await fetch("/api/clientes", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),

    });

    alert("Cadastrado!");

    setForm({
      nome: "",
      email: "",
      senha: "",
      perfil: "",
    });

  }

  return (

    <div className={styles.container}>

      <div className={styles.card}>

        <h1 className={styles.title}>
          Cadastro
        </h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="text"
            name="perfil"
            placeholder="Perfil( Admin, Professor ou Aluno"
            value={form.perfil}
            onChange={handleChange}
            className={styles.input}
          />

          <button className={styles.button}>
            Cadastrar
          </button>

        </form>

      </div>

    </div>

  );

}