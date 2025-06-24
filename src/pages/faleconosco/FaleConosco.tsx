import React, { useState } from 'react';
import type { FormEvent } from 'react';
import './_faleConosco.scss';
import emailjs from '@emailjs/browser';

const FaleConosco: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const serviceID = 'service_end8f8c';
    const templateID = 'template_4jnw2ly';
    const publicKey = 'XGBNzzjnFI08o9MIO';

    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      mensagem: formData.mensagem,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: '',
          });
        },
        (error) => {
          console.error('Erro ao enviar mensagem:', error);
          alert('Ocorreu um erro. Tente novamente mais tarde.');
        }
      );
  };

  return (
    <div className="fale-conosco">
      <section className="container">
        <h1>Fale Conosco</h1>
        <p>Tem um projeto em mente? Entre em contato!</p>

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              required
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor="telefone">Telefone (opcional)</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Descreva seu projeto ou dúvida..."
              required
              value={formData.mensagem}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn primary">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
};

export default FaleConosco;
