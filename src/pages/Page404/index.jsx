import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import styles from './Page404.module.css'

function Page404(){
    return(
        <>

        <h2 className={styles.titulo}>
            Algo de errado aconteceu com esta página!
        </h2>
        <div className={styles.textos}>
            <span className={styles.erro}>404</span> <br/>
            <strong className={styles.erro_pag}>Página nao localizada</strong>
        </div>
 
        </>
    )
}
export default Page404