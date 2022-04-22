import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    let aux = { name: "" };
    if (localStorage.getItem("user")) {
      aux = localStorage.getItem("user");
      aux = JSON.parse(aux);
    }
    return(
        <div>
            <section className={styles.navbar}>
                <div className={styles.link}>
                <Link to={'/'}>
                    {
                        <img className={styles.img} src={logo} alt="logo"/>
                    }
                </Link>
                </div>
                <div className={styles.menu}>
                    {
                        aux.id?<Link to={'/home'}>
                        {
                            <h1 className={styles.title}>Home</h1>
                        }
                    </Link>:<Link to={'/login'}>
                        {
                            <h1 className={styles.title}>Home</h1>
                        }
                    </Link>
                    }
                    <div className={styles.divlogin}>
                    {
                        aux.id?<Link to={'/account'}>
                        {
                            <FontAwesomeIcon className={styles.user} icon={faUser} />
                        }
                        </Link>:<Link to={'/login'}>
                    {
                        <FontAwesomeIcon className={styles.user} icon={faUser} />
                    }
                    </Link>
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavBar;