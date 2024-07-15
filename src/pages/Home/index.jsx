import styles from './Home.module.css'

function Home() {
    return (
        <>
            
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <span>Procurando por <br /> uma receita?</span>
                    <p>Ache receitas com os ingredientes que você <br />
                        tem disponível na sua casa! Aproveite e veja a <br />
                        tabela nutricional do seu prato.</p>
                        <button className={`${styles.btn} ${styles.btn_orange}`}>Clique aqui</button>
                </div>
                <figure>
                    <img src='../public/feijoada.png'></img>
                </figure>


            </section>
          
        </>
    )
}
export default Home