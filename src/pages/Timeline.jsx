import React, { useState } from "react";
import childhood from "../assets/images/childhood.jpg";
import education from "../assets/images/education.jpg";
import washington from "../assets/images/washington.jpg";
import nyc from "../assets/images/nyc.jpg";
import protestToPolitics from "../assets/images/politics.jpg";
import laborMovement from "../assets/images/labor.jpg";        
import foreignPolicy from "../assets/images/foreign.jpg";
import sovietJewry from "../assets/images/soviet.jpg";
import gayRights from "../assets/images/gay_rights.jpg";
import death from "../assets/images/death.jpg"; // Placeholder for death image
import timeline_bg from "../assets/images/timeline_bg.avif"; // Background image for the timeline

const timelineEvents = [
  {
    date: "1912",
    title: "Birth",
    description:
      "Bayard Rustin was born on March 17, 1912, in West Chester, Pennsylvania. Raised by his grandparents, he was instilled with Quaker values emphasizing equality and nonviolence.",
    image: childhood,
  },
  {
    date: "1930s",
    title: "Education",
    description:
      "Rustin attended Wilberforce University and Cheyney State Teachers College, both historically Black institutions. He later studied at City College of New York, engaging in civil rights activism during his academic years.",
    image: education,
  },
  {
    date: "1963",
    title: "March on Washington",
    description:
      "As the chief organizer of the 1963 March on Washington, Rustin orchestrated one of the largest peaceful demonstrations in U.S. history, advocating for civil and economic rights for African Americans.",
    image: washington,
  },
  {
    date: "1964",
    title: "New York City School Boycott",
    description:
      "Rustin coordinated a massive one-day boycott involving over 460,000 students and teachers, protesting de facto segregation in New York City's public schools.",
    image: nyc,
  },
  {
    date: "1965",
    title: "From Protest to Politics",
    description:
      "In his influential essay 'From Protest to Politics,' Rustin advocated for a shift from civil rights protests to political engagement, emphasizing the need for economic justice and policy reform.",
    image: protestToPolitics,
  },
  {
    date: "1965",
    title: "Labor Movement",
    description:
      "Rustin founded the A. Philip Randolph Institute to bridge the labor and civil rights movements, promoting the integration of unions and advocating for workers' rights.",
    image: laborMovement,
  },
  {
    date: "1970s",
    title: "Foreign Policy",
    description:
      "Rustin engaged in international human rights work, supporting democratic movements and opposing authoritarian regimes, reflecting his commitment to global justice.",
    image: foreignPolicy,
  },
  {
    date: "1970s",
    title: "Soviet Jewry Movement",
    description:
      "He became a vocal advocate for Soviet Jews, leading efforts to highlight their persecution and urging the international community to support their right to emigrate and practice their religion freely.",
    image: sovietJewry,
  },
  {
    date: "1980s",
    title: "Gay Rights",
    description:
      "Later in life, Rustin became an outspoken advocate for gay rights, drawing parallels between the civil rights and LGBTQ+ movements, and emphasizing the importance of human rights for all.",
    image: gayRights,
  },
  {
    date: "1987",
    title: "Death",
    description:
      "Bayard Rustin passed away on August 24, 1987, leaving behind a legacy as a tireless advocate for civil rights, nonviolence, and social justice.",
    image:death,
  },
];

const headingStyle = {
  fontSize: "2.5rem",
  padding: "2rem",
  fontFamily: "'Playball', cursive",
  color: "#3a1f05",
};

const Timeline = () => {
const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="timeline"
  className="relative bg-cover bg-center bg-no-repeat py-20 px-6 font-serif text-[#3a1f05]"
  style={{
    minHeight: "150vh", // 1.5x viewport height
backgroundImage: `url(${timeline_bg})`
  }}
>
      {/* Big Title */}
      <h2 style={headingStyle} className="text-center select-none">
        Timeline of Bayard Rustin
      </h2>

      {/* Vertical Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#5c4b3a]"
        style={{ width: "3px", height: "80%" }}
      ></div>

      {/* Timeline Items */}
      <div className="max-w-3xl mx-auto relative" style={{ padding: "3rem 1rem" }}>
        {timelineEvents.map((event, i) => {
          const isLeft = i % 2 === 0;
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={i}
              className="relative flex justify-center items-center w-full mb-40"
              style={{ paddingBottom: "5rem" }}
            >
              {/* Date text on the line */}
              <span
                className="absolute text-xs font-mono text-[#5c4b3a]"
                style={{
                  left: "50%",
                  transform: "translateX(-150%)",
                  top: "50%",
                  translateY: "-50%",
                }}
              >
                {event.date}
              </span>

              {/* Timeline Dot */}
              <div
                onClick={() => toggleExpand(i)}
                className={`relative z-20 flex justify-center items-center w-12 h-12 rounded-full mx-6 cursor-pointer border-4 border-[#5c4b3a] bg-[#5c4b3a] 
                  ${isExpanded ? "bg-[#998779]" : ""}
                  hover:ring-4 hover:ring-[#998779] transition`}
                title={`${event.date} - ${event.title}`}
                aria-expanded={isExpanded}
                aria-controls={`event-box-${i}`}
                role="button"
                tabIndex={0}
                style={{ padding: "0.5rem",  margin: "0 1rem" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleExpand(i);
                  }
                }}
              >
                {/* Inner small dot */}
                <div className={`w-4 h-4 rounded-full bg-[#e6d8c3]`}></div>
              </div>

              {/* Expanded Content Box */}
              {isExpanded && (
                <div
                  id={`event-box-${i}`}
                  className={`absolute top-0 p-6 rounded-lg shadow-lg bg-[#998779] text-[#2e1b0f] select-text flex gap-4 items-start ${
                    isLeft ? "left-0 -translate-x-[50%]" : "right-0 translate-x-[50%]"
                  }`}
                  style={{
                    maxWidth: "40%",
                    padding: "1rem",
                  }}
                >
                  <img
                    src={event.image}
                    alt={`${event.title} image`}
                    style={{
                      height: "100",
                      maxHeight: "180px",
                      objectFit: "cover",
                      padding: "0.9rem",
                    }}
                    className="w-28 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">{event.title}</h3>
                    <p className="text-sm font-mono mb-4">{event.date}</p>
                    <p className="text-base leading-relaxed">{event.description}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
