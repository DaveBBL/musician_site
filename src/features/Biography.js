import Title from "../components/Title";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardGroup } from "reactstrap";
import outdoorphoto from "../app/assets/img/radu-florin-XmyHJfZ-qDc-unsplash.jpg";

const Biography = () => {
  return (
    <div>
      <Title title="BIOGRAPHY" />
      <CardGroup>
        <Card>
          <CardTitle tag="h4">Frank's Story</CardTitle>
          <CardText>
            Frank is a very interesting man. He plays Guitar and sings. He
            writes all his own songs.
          </CardText>
        </Card>
        <Card>
          <CardImg
            src={outdoorphoto}
            alt="Frank pensively leaning on a wall outside."
            width="100%"
          />
        </Card>
      </CardGroup>
    </div>
  );
};

export default Biography;
