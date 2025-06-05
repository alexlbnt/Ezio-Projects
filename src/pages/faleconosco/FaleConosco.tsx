import './_faleConosco.scss';

const FaleConosco = () => {
  return (
    <div className="fale-conosco">
      <section className="container">
        <h1>Fale Conosco</h1>
        <p>Tem um projeto em mente? Entre em contato!</p>

        <form className="formulario">
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="seu@email.com" required />
          </div>

          <div className="campo">
            <label htmlFor="telefone">Telefone (opcional)</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" placeholder="Descreva seu projeto ou dúvida..." required />
          </div>

          <button type="submit" className="btn primary">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  );
};

export default FaleConosco;
