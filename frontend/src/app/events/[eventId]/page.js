import EventPage from "@/components/EventPage";

export default async function EventDetails({ params }) {
  const { eventId } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`
  );
  const event = await res.json();

  return (
    <EventPage
      name={event.name}
      host={event.host[0]?.firstName || "N/A"}
      image="/hiking.png"
      details={event.eventDetails}
      datetime={event.date}
      location={event.location}
      gear={event.whatToBring}
    />
  );
}
