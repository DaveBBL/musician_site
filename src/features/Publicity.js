import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import styles from "./Publicity.module.css";
import PublicityPhoto from "../app/assets/img/radu-florin-V8H6hXhmoqI-unsplash.jpg";

const Publicity = () => {
  return (
    <>
      <h1 className={styles.tuttle}>Frank Tuttle</h1>
      <Card inverse>
        <CardImg src={PublicityPhoto} alt="Guitarist" />
        <CardImgOverlay style={{ justifyContent: "space-between" }}>
          <CardText>
            "Music is the divine way to tell beautiful, poetic things to the
            heart. And when it hits you, you feel no pain. If you lose that
            dream, you just might lose your mind."
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
};

export default Publicity;
