import styles from './Home.module.css'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <span>Alerta! Cuidado! <br /> Fofura Máxima </span>
                    <p> Nossa enciclopédia felina contém níveis perigosos de fofura, se você não consegue <br/>
                        resistir a um ronronar ou a um par de olhos pidões, talvez seja melhor não entrar. <br/>
                        Prossiga por sua conta em risco! <br /></p>
                        <Link to="/racas" className={`${styles.btn} ${styles.btn_orange}`}>Clique aqui</Link>
                </div>
                <figure>
                    <img src='../public/la.png'></img>
                </figure>

                
            </section>
            
            
        </>
    )
}
export default Home