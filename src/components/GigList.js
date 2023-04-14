import Gig from "./Gig"

const GigList = (props) => {
  const gigList = props.events;

  return (
    <div>
        {gigList.map((gig) => {
          return (
            <Gig gig={gig} />
          );
        })}
    </div>
  )
}

export default GigList;