import Title from "../components/Title";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import outdoorphoto from "../app/assets/img/radu-florin-XmyHJfZ-qDc-unsplash.jpg";

const Biography = () => {
  return (
    <div>
      <Title title="BIOGRAPHY" />
      <Card>
        <CardImg
          src={outdoorphoto}
          alt="Frank pensively leaning on a wall outside."
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h4">Frank's Story</CardTitle>
          <CardText>
            Frank is a very interesting man. He plays Guitar and sings. He
            writes all his own songs.
          </CardText>
        </CardImgOverlay>
      </Card>
      <p></p>
    </div>
  );
};

export default Biography;
