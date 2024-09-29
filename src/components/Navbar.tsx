import styles from './styles/Navbar.module.scss';
import imgLogo from '../assets/images/Logo/logo.png';
import IconPhone from './icons/IconPhone';

const Navbar = () => {
  return (
    <div>
      <div>
        <div className={styles.ctn__logo}>
          <img
            src={imgLogo}
          />
        </div>

        <div className={styles.ctn__phone}>
          <span className={styles.description}>
            ¿Tienes alguna duda?
          </span>
          <IconPhone />
          <a href="tel:(01) 411 6001">
            (01) 411 6001
          </a>
          <span className={styles.callUs}>
            Llámanos
          </span>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
