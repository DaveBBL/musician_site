import Title from "../components/Title";
import GigList from "../components/GigList";
import { EVENTS } from "../data/events";

const TourDates = () => {
  return (
    <>
      <Title title="TOUR DATES" />
      <GigList events={EVENTS} />
    </>
  );
};

export default TourDates;

// TODO: Integrate Bandsintown widget and API 
