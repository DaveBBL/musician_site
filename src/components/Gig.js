import {
  Card,
  CardHeader,
  CardLink,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import styles from "./Gig.module.css";

const Gig = (props) => {
  const rawDate = new Date(props.gig.date);
  const gigDate = `${rawDate.getMonth()}/${rawDate.getDate()}/${rawDate.getFullYear()}`;
  const options = { hour: "numeric", minute: "2-digit" };
  const gigTime = `${rawDate.toLocaleString("en-US", options)}`;

  const rawAddress = props.gig.address;
  let mapsAddress = rawAddress.replaceAll(" ", "+");
  mapsAddress = "https://maps.google.com/?q=" + mapsAddress;

  return (
    <div key={props.gig.id}>
      <Card className={styles.card}>
        <CardHeader>
          {gigDate} - {gigTime}
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <CardLink
              className={styles.cardLink}
              href={props.gig.website}
              target="_blank"
            >
              {props.gig.venue}
            </CardLink>{" :"}
            <CardLink
              className={styles.cardLink}
              href={mapsAddress}
              target="_blank"
            >
              {props.gig.address}
            </CardLink>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Gig;
