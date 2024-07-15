import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contato.module.css'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";



function Contato() {
    const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dop1grb', 
      'template_ned1clx', 
      form.current, 
      'vCa46ILUwcq_QxNB5'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('Sucesso! Mensagem enviada.');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Ops! Algo deu errado: ' + error.text);
      });
  };

    return (
        <>
           
            <div className={styles.contatoContainer}>
          <h2 className={styles.contatoTitle}>Entre em Contato</h2>

          <form ref={form} onSubmit={sendEmail} className={styles.contatoForm}> 
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="titulo">Título:</label>
              <input type="text" id="titulo" name="titulo" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            </div>

            <button type="submit">Enviar Mensagem</button>
            {status && <p>{status}</p>} 
          </form>

          <div className={styles.sigaNosCard}>
            <h3>Siga-nos:</h3>
            <div className={styles.icons}>

              <a href="https://www.instagram.com/" target="_blank" >
              <FaInstagram /></a>
              <a href="https://www.x.com/" target="_blank" >
              <FaTwitter /></a>
              <a href="https://www.youtube.com/" target="_blank" >
              <FaYoutube /></a>
              <a href="https://www.facebook.com/" target="_blank" >
              <FaFacebook /></a>
            
            </div>
          </div>
        </div>
           
        </>
    )
}
export default Contato