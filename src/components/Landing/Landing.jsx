import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import mainimg from './assets/mainimg.png';
import styles from './Landing.module.css';

const Landing = () => {
    let aux = { name: "" };
    if (localStorage.getItem("user")) {
      aux = localStorage.getItem("user");
      aux = JSON.parse(aux);
    }
    return(
        <div className={styles.all}>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.textland}>
                    <h1 className={styles.titleone}>Welcome to your</h1>
                    <h1 className={styles.ttdash}>dashboard</h1>
                    <p className={styles.text}>You must login in order to see all</p>
                    <p className={styles.text}>the interactions of the bots</p>
                    {
                        aux.id?<Link to="/home">
                            <button className={styles.button}>Get started</button>
                        </Link>:<Link to="/login">
                            <button className={styles.button}>Get started</button>
                        </Link>
                    }
                </div>
                <div className={styles.imgdiv}>
                    <img className={styles.img} src={mainimg} alt="mainimg"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;