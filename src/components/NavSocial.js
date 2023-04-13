import { Button } from "reactstrap";
import styles from "./NavSocial.module.css";

const NavSocial = () => {
  return (
    <div className={`m-2 ${styles.centered}`}>
      <Button
        className="ms-1 me-1 btn btn-social-icon btn-twitter"
        href="http://twitter.com/"
      >
        <i className="fa fa-twitter" />
      </Button>
      <Button
        className="ms-1 me-1 btn btn-social-icon btn-facebook"
        href="http://www.facebook.com/"
      >
        <i className="fa fa-facebook" />
      </Button>
      <Button
        className="ms-1 me-1 btn btn-social-icon btn-instagram"
        href="http://instagram.com/"
      >
        <i className="fa fa-instagram" />
      </Button>
      <Button
        className="ms-1 me-1 btn btn-social-icon btn-youtube"
        href="https://music.youtube.com/"
      >
        <i className="fa fa-youtube" />
      </Button>
      <Button
        className="ms-1 me-1 btn btn-social-icon btn-soundcloud"
        href="https://soundcloud.com/"
      >
        <i className="fa fa-soundcloud" />
      </Button>
      <Button
        className="ms-1 me-1 btn btn-social-icon btn-apple"
        href="https://www.apple.com/apple-music/"
      >
        <i className="fa fa-apple" />
      </Button>
    </div>
  );
};

export default NavSocial;
