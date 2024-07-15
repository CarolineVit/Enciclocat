import styles from './Ajuda.module.css'

function Ajuda() {
    return (
        <>

            
                <section className={styles.ajuda}>
                    <h3 className={styles.ajudaTitle}>Ajuda</h3>
                    <div className={styles.ajudaContent}>
                        <p>
                            Precisa de ajuda para encontrar a receita perfeita? Não se preocupe, estamos aqui para te ajudar!
                        </p>
                        <span>Passo a Passo</span>
                        <p>
                            1- Digite os ingredientes que você tem em casa, separados por vírgula, na barra de pesquisa <br/>
                            2- Clique em uma receita que te agrada <br/>
                            3- Bônus ratinho de academia: Veja as informações nutricionais dessa receita
                        </p>
                    </div>
                    </section>
            

        </>
    )
}
export default Ajuda