import Title from "../components/Title";
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardGroup } from "reactstrap";
import outdoorphoto from "../app/assets/img/radu-florin-XmyHJfZ-qDc-unsplash.jpg";

const Biography = () => {
  return (
    <div>
      <Title title="BIOGRAPHY" />
      <CardGroup>
        <Card>
          <CardTitle className="m-3" tag="h4">
            Frank's Story
          </CardTitle>
          <CardText className="m-3">
            Frank is an indie singer-songwriter and one of the Northwest's most
            recognized and celebrated artists, praised by The Seattle Pulp,
            WPR, USA Tomorrow, CutnPaste Magazine, The Capitalist Journal, Space
            Magazine, Schpin, and Gathering No Moss among many others. A thoughtful,
            clever lyricist with a tender voice, the Mount Bakerhamvilleton-based
            troubadour crafts songs that are catchy and relatable, and span the
            emotional gamut from poignant to heartrending.
          </CardText>
        </Card>
        <Card>
          <CardImg
            src={outdoorphoto}
            alt="Frank pensively leaning on a wall outside."
            width="100%"
          />
          <CardSubtitle className="m-3">
            <p>"He's a finger-style guitar wizard, with deft, witty lyrical chops to match." - WPR</p>
            <p>"Can he sing? Pretty much." - Schpin</p>
          </CardSubtitle>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Biography;
