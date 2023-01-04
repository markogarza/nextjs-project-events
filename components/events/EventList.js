import EventItem from "./EventItem";

function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => {
        return <EventItem key />;
      })}
    </ul>
  );
}

export default EventList;
