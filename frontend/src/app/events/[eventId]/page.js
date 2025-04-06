import EventPage from "@/components/EventPage";

export default async function EventDetails({ params: { eventId } }) {
  console.log("🧪 API URL:", process.env.NEXT_PUBLIC_API_URL);

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
      gear={event.whatToBring}
    />
  );
}
