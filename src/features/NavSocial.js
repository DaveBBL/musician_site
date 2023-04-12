import { Button } from "reactstrap";
import styles from './NavSocial.module.css'

const NavSocial = () => {
  return (
    <div className={`m-2 ${styles.centered}`}>
      <Button className="ms-1 me-1 btn btn-social-icon btn-twitter">
        <span className="fa fa-twitter"></span>
      </Button>
      <Button className="ms-1 me-1 btn btn-social-icon btn-facebook">
        <span className="fa fa-facebook"></span>
      </Button>
      <Button className="ms-1 me-1 btn btn-social-icon btn-instagram">
        <span className="fa fa-instagram"></span>
      </Button>
      <Button className="ms-1 me-1 btn btn-social-icon btn-youtube">
        <span className="fa fa-youtube"></span>
      </Button>
      <Button className="ms-1 me-1 btn btn-social-icon btn-soundcloud">
        <span className="fa fa-soundcloud"></span>
      </Button>
      <Button className="ms-1 me-1 btn btn-social-icon btn-apple">
        <span className="fa fa-apple"></span>
      </Button>
    </div>
  );
};

export default NavSocial;
