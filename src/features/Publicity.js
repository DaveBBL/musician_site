import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";
import PublicityPhoto from "../app/assets/img/radu-florin-V8H6hXhmoqI-unsplash.jpg";

const Publicity = () => {
  return (
    <Card inverse>
      <CardImg src={PublicityPhoto} alt="Guitarist" />
      <CardImgOverlay>
        <CardText>
          "Music is the divine way to tell beautiful, poetic things to the
          heart. And when it hits you, you feel no pain. If you lose that
          dream, you just might lose your mind.
        </CardText>
        <CardTitle className="m-2">
          <h1>Frank Tuttle</h1>
        </CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default Publicity;
