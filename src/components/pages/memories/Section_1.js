"use client";

import { useState } from "react";
import Image from "next/image";

export default function Section_1() {
  const eventData = [
    {
      year: 2023,
      events: [
        {
          title: "Orientation",
          date: "October",
          description:
            "Welcomed our new batch with energy and enthusiasm. The orientation marked the beginning of exciting learning journeys and team bonding.",
          images: [
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.30.55_76022ec9.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.03_477ef7c7.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.03_6cb1f081.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.04_091a6aab.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.05_93b4ee4c.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.05_c726dc67.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.05_fb77b647.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.06_5116e4c8.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.06_95bc6725.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.06_d803dddd.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.07_2bfdc1f4.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.07_b311d293.jpg",
            },
            {
              src: "/events/2023/October/Orientation/WhatsApp Image 2025-05-07 at 18.31.08_88e69807.jpg",
            },
          ],
        },
      ],
    },
    {
      year: 2024,
      events: [
        {
          title: "Birthdays 2024",
          date: "January",
          description:
            "Celebrating birthdays the Digi Samurai way—with laughter, cake, and heartfelt wishes. Every celebration brought us closer as a team.",
          images: [
            {
              src: "/events/2024/January/Birthdays 2024/WhatsApp Image 2025-05-07 at 18.44.28_8c4a146a.jpg",
            },
            {
              src: "/events/2024/January/Birthdays 2024/WhatsApp Image 2025-05-07 at 18.44.28_9ae5bdf0.jpg",
            },
          ],
        },
        {
          title: "Puja Vibes",
          date: "February",
          description:
            "Festive decorations, ethnic wear, and joyful moments defined our Puja celebrations. A perfect blend of tradition and togetherness.",
          images: [
            {
              src: "/events/2024/February/Puja Vibes/WhatsApp Image 2025-05-07 at 18.44.29_21f3aecd.jpg",
            },
          ],
        },
        {
          title: "Data Science Training Sessions",
          date: "March",
          description:
            "Hands-on sessions covering data analysis, visualization, and machine learning. Participants gained valuable, practical experience.",
          images: [
            {
              src: "/events/2024/March/Data Science Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_29e571fb.jpg",
            },
            {
              src: "/events/2024/March/Data Science Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_e38b019b.jpg",
            },
          ],
        },
        {
          title: "Cyber Security Training Sessions",
          date: "April",
          description:
            "Focused sessions on cybersecurity basics to advanced topics. Learners explored ethical hacking, network security, and more.",
          images: [
            {
              src: "/events/2024/April/Cyber Security Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_30796155.jpg",
            },
            {
              src: "/events/2024/April/Cyber Security Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_cbd24500.jpg",
            },
          ],
        },
        {
          title: "Training Certificate Distribution",
          date: "May",
          description:
            "A proud moment for learners as they received certificates acknowledging their hard work and dedication in various training programs.",
          images: [
            {
              src: "/events/2024/May/Training Certificate Distribution/WhatsApp Image 2025-05-07 at 18.38.36_0a323219.jpg",
            },
            {
              src: "/events/2024/May/Training Certificate Distribution/WhatsApp Image 2025-05-07 at 18.38.36_a60292dc.jpg",
            },
            {
              src: "/events/2024/May/Training Certificate Distribution/WhatsApp Image 2025-05-07 at 18.38.36_f8ca2892.jpg",
            },
          ],
        },
        {
          title: "Python Training Sessions",
          date: "July",
          description:
            "Participants learned the fundamentals of Python through interactive coding and real-world projects. A great start to programming!",
          images: [
            {
              src: "/events/2024/July/Python Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_017103b8.jpg",
            },
            {
              src: "/events/2024/July/Python Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_27f370d3.jpg",
            },
          ],
        },
        {
          title: "Web Development Training Sessions",
          date: "August",
          description:
            "Exploring the world of HTML, CSS, and JS! Students built their first web pages and developed responsive design skills.",
          images: [
            {
              src: "/events/2024/August/Web Development Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_290375ad.jpg",
            },
            {
              src: "/events/2024/August/Web Development Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_2ffb7dcb.jpg",
            },
          ],
        },
        {
          title: "Web Development Training Sessions",
          date: "September",
          description:
            "Advanced sessions with hands-on projects, introducing Bootstrap and JavaScript interactivity. Learning met creativity.",
          images: [
            {
              src: "/events/2024/September/Web Development Training Sessions/WhatsApp Image 2025-05-07 at 18.38.37_47a80752.jpg",
            },
          ],
        },
        {
          title: "Carrom Tournament",
          date: "November",
          description:
            "A thrilling face-off of precision and strategy! Our Carrom Tournament witnessed intense matches and cheerful camaraderie.",
          images: [
            {
              src: "/events/2024/November/Carrom Tournament/WhatsApp Image 2025-05-07 at 18.03.16_e27b85e9.jpg",
            },
            {
              src: "/events/2024/November/Carrom Tournament/WhatsApp Image 2025-05-07 at 18.03.17_2e8d93e8.jpg",
            },
            {
              src: "/events/2024/November/Carrom Tournament/WhatsApp Image 2025-05-07 at 18.03.22_c3a3704a.jpg",
            },
          ],
        },
        {
          title: "Interns Farewell",
          date: "November",
          description:
            "A warm goodbye to our talented interns. Their energy and contributions left a lasting impact on our projects and team.",
          images: [
            {
              src: "/events/2024/November/Interns Farewell/WhatsApp Image 2025-05-07 at 18.38.37_245b08c8.jpg",
            },
          ],
        },
        {
          title:
            "Cyber Security Training Global Institute of Management & Techology",
          date: "December",
          description:
            "A comprehensive training session empowering students with real-world cybersecurity skills. A successful collaboration with GIMT.",
          images: [
            {
              src: "/events/2024/December/Cyber Security Training Global Institute of Management & Techology/WhatsApp Image 2025-05-07 at 18.40.36_27698e51.jpg",
            },
            {
              src: "/events/2024/December/Cyber Security Training Global Institute of Management & Techology/WhatsApp Image 2025-05-07 at 18.44.28_299a5945.jpg",
            },
            {
              src: "/events/2024/December/Cyber Security Training Global Institute of Management & Techology/WhatsApp Image 2025-05-07 at 18.44.28_91855f5c.jpg",
            },
          ],
        },
        {
          title: "Last Minute Project Submission",
          date: "December",
          description:
            "A rush of code, coffee, and commitment! The spirit of teamwork shone as we raced to meet deadlines together.",
          images: [
            {
              src: "/events/2024/December/Last Minute Project Submission/WhatsApp Image 2025-05-07 at 18.38.37_557666d2.jpg",
            },
            {
              src: "/events/2024/December/Last Minute Project Submission/WhatsApp Image 2025-05-07 at 18.38.37_8f261bb1.jpg",
            },
            {
              src: "/events/2024/December/Last Minute Project Submission/WhatsApp Image 2025-05-07 at 18.38.37_a6e9c878.jpg",
            },
          ],
        },
      ],
    },
    {
      year: 2025,
      events: [
        {
          title: "Chhaya Animal Shelter Visit",
          date: "March",
          description:
            "A heartwarming day spent with rescued animals. Our team supported the shelter with donations and shared love with furry friends.",
          images: [
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6385.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6456.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6506.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6526.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6607.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6617.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6637.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6657.JPG",
            },
            {
              src: "/events/2025/March/Chhaya Animal Shelter Visit/_RNP6753.JPG",
            },
          ],
        },
        {
          title: "Cricket Images",
          date: "March",
          description:
            "A day full of sportsmanship and fun on the field. Boundaries were hit, wickets taken, and memories made!",
          images: [
            { src: "/events/2025/March/Cricket Images/_RNP6944.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7176.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7541.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7570.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7598.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7636.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7768.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7769.JPG" },
            { src: "/events/2025/March/Cricket Images/_RNP7775.JPG" },
          ],
        },
        {
          title: "Interns Farewell",
          date: "March",
          description:
            "Cheers, memories, and heartfelt goodbyes as we bid farewell to another amazing batch of interns who made their mark.",
          images: [
            {
              src: "/events/2025/March/Interns Farewell/WhatsApp Image 2025-05-07 at 18.38.37_2183582a.jpg",
            },
            {
              src: "/events/2025/March/Interns Farewell/WhatsApp Image 2025-05-07 at 18.38.37_8070ac04.jpg",
            },
          ],
        },
        {
          title: "Football",
          date: "April",
          description:
            "Kicks, goals, and high fives! The football match brought energy and excitement, strengthening our team spirit.",
          images: [
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 17.54.44_8eca2850.jpg",
            },
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 17.55.23_41912ee6.jpg",
            },
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 19.17.17_3040be64.jpg",
            },
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 19.17.17_571743bb.jpg",
            },
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 19.17.17_a8a57082.jpg",
            },
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 19.17.18_58ca6a49.jpg",
            },
            {
              src: "/events/2025/April/Football/WhatsApp Image 2025-05-07 at 19.17.18_5a00e61e.jpg",
            },
          ],
        },
        {
          title: "GNIT CTF",
          date: "April",
          description:
            "An engaging Capture The Flag event that challenged minds and sparked interest in ethical hacking among students.",
          images: [
            {
              src: "/events/2025/April/GNIT CTF/WhatsApp Image 2025-05-07 at 18.38.37_058a539c.jpg",
            },
            {
              src: "/events/2025/April/GNIT CTF/WhatsApp Image 2025-05-07 at 18.38.37_59e73c71.jpg",
            },
            {
              src: "/events/2025/April/GNIT CTF/WhatsApp Image 2025-05-07 at 18.38.37_a99cd5aa.jpg",
            },
          ],
        },
        {
          title: "With our Students",
          date: "May",
          description:
            "Moments of mentorship, laughter, and growth. Our students are at the heart of everything we do.",
          images: [
            { src: "/events/2025/May/With our Students/SSP00098.JPG" },
            { src: "/events/2025/May/With our Students/SSP00106.JPG" },
            { src: "/events/2025/May/With our Students/SSP09815.JPG" },
          ],
        },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const selectedYearGroup = eventData.find(
    (group) => group.year === selectedYear
  );

  return (
    <section className="pt-7 bg-white">
      <div className="container mx-auto text-left lg:w-5/6">
        {/* Year Tabs */}
        <div className="flex justify-center items-center space-x-6 pb-14 text-gray-500 select-none">
          {eventData.map((yearGroup, index) => (
            <button
              key={index}
              onClick={() => setSelectedYear(yearGroup.year)}
              className={`cursor-pointer transition-colors font-mono ${
                yearGroup.year === selectedYear
                  ? "text-red-600 font-semibold xl:text-6xl text-4xl"
                  : "xl:text-4x text-xl hover:text-red-400"
              }`}
              style={{ fontFamily: "Jura" }}
            >
              {yearGroup.year}
            </button>
          ))}
        </div>

        {/* Filtered Events */}
        {selectedYearGroup && (
          <div>
            {selectedYearGroup.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className="border-b border-gray-300 px-6 pt-6 pb-8"
              >
                <h2
                  className="xl:text-5xl text-3xl font-bold text-center mb-12 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "Josefin Sans",
                    backgroundImage:
                      "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
                  }}
                >
                  {event.title}
                </h2>
                <div
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-6 xl:text-3xl text-xl"
                  style={{ fontFamily: "Jura" }}
                >
                  {/* Text Section */}
                  <div className="sm:w-1/3 lg:w-4/5 font-mono mb-4 sm:mb-0">
                    <p className="mb-2 font-bold">{event.date}</p>
                    <p>{event.description}</p>
                  </div>

                  {/* Image Scroll Section */}
                  <div
                    className={`w-full ${event.images.length > 1 ? "overflow-x-auto" : ""} overflow-y-hidden no-scrollbar`}
                  >
                    <div
                      className={`flex items-center gap-6 ${
                        event.images.length > 2 ? "animate-scroll" : ""
                      } lg:${event.images.length === 1 ? "justify-center" : ""}`}
                    >
                      {event.images.map((img, index) => (
                        <Image
                          key={index}
                          alt="Gallery"
                          src={img.src}
                          width={200}
                          height={267}
                          className="w-[200px] h-[267px] object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
