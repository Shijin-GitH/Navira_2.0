import React from "react";
import Heading from "../components/Heading";
import { Calendar, MapPin, Clock, Users, Map } from "lucide-react";

const EventDetails = () => {
  const eventInfo = {
    days: "2",
    domains: "3",
    seats: "120",
  };

  const venue = {
    name: "COLLEGE OF ENGINEERING CHENGANNUR",
    branch: "IEEE Student Branch CEC",
    address: "College of Engineering Chengannur, Chengannur, Kerala 689121",
    timing: "9:00 AM - 5:00 PM",
    mode: "Offline - On Campus",
    mapLink: "https://maps.app.goo.gl/Wb2n2bJcWx2L9j8q9",
  };

  return (
    <section id="events" className="py-16 bg-background text-text">
      <Heading mainTitle={"EVENT"} highlightedTitle={"DETAILS"} />
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <DetailCard value={eventInfo.days} label="Days of Training" />
          <DetailCard value={eventInfo.domains} label="Parallel Workshops" />
          <DetailCard value={eventInfo.seats} label="Total Seats" />
        </div>

        <div className="mt-16">
          <div>
            <Heading mainTitle={"DATE"} />
            <div className="mt-6">
              <EventDate />
            </div>
          </div>
          <div className="mt-16">
            <Heading mainTitle={"VENUE"} />
            <div className="mt-6">
              <VenueCard {...venue} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailCard = ({ value, label }) => (
  <div className="bg-secondary border border-accent-1/50 text-text p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
    <div className="font-teko text-7xl font-bold text-primary">{value}</div>
    <div className="mt-2 text-lg font-oswald text-accent-2">{label}</div>
  </div>
);

const EventDate = () => (
  <div className="bg-secondary/50 border border-accent-1/50 p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30">
    <div className="flex justify-center items-baseline space-x-8">
      <div className="text-center">
        <p className="font-teko text-9xl text-primary leading-none">10</p>
      </div>
      <span className="font-oswald text-6xl text-accent-1/50">&</span>
      <div className="text-center">
        <p className="font-teko text-9xl text-primary leading-none">11</p>
      </div>
    </div>
    <p className="font-oswald text-5xl text-accent-1 mt-4">JANUARY 2026</p>
  </div>
);

const VenueCard = ({ name, branch, address, timing, mode, mapLink }) => (
  <div className="bg-secondary border border-accent-1/50 p-8 rounded-lg shadow-lg h-full flex flex-col">
    <h3 className="text-3xl font-oswald font-bold text-primary mb-2">{name}</h3>
    <p className="text-md text-accent-1 mb-6 font-teko">{branch}</p>
    <div className="space-y-4 text-accent-2/90 font-oswald flex-grow">
      <div className="flex items-start">
        <MapPin className="w-6 h-6 mr-4 mt-1 text-primary" />
        <span>{address}</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-6 h-6 mr-4 text-primary" />
        <span>{timing}</span>
      </div>
      <div className="flex items-center">
        <Users className="w-6 h-6 mr-4 text-primary" />
        <span>{mode}</span>
      </div>
    </div>
    <a
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center justify-center w-full bg-primary text-secondary font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-oswald text-lg"
    >
      <Map className="w-5 h-5 mr-3" />
      View on Maps
    </a>
  </div>
);

export default EventDetails;
