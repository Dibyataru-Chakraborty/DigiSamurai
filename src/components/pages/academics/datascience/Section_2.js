import Link from "next/link";

export default function Section_2() {
  const courses = [
    {
      title: "Cybersecurity Awareness",
      duration: "30 hours",
      level: "Beginner",
      description:
        "This course offers a comprehensive introduction to key cybersecurity principles, aimed at enhancing your understanding and readiness against cyber threats. It covers essential topics from basic concepts to advanced practices, equipping participants with the knowledge to safeguard against digital threats effectively.",
      features: [
        "Hands-on training with real-world scenarios",
        "Covers essential tools: firewalls, IDS, encryption",
        "Prepares for industry certifications",
        "Teaches threat detection and incident response",
        "Includes latest trends: cloud, mobile, and compliance",
      ],
      link: "/academics/cybersecurity",
    },
    {
      title: "Certified Associate Pentester",
      duration: "60 hours",
      level: "Beginner",
      description:
        "This is a premier security credential designed to build a strong foundation in penetration testing. It will equip you with essential skills and hands-on experience to excel in modern penetration testing across diverse IT environments. This course offers an immersive, real-world training experience, focusing on the core concepts and methodologies required to effectively assess and secure infrastructures, operating systems, and applications.",
      features: [
        "Quick, focused introduction to cybersecurity basics",
        "Learn key threats like phishing and malware",
        "Understand firewalls, VPNs, and secure networks",
        "Covers best practices for personal and workplace security",
        "Ideal for beginners and non-technical professionals",
      ],
      link: "/academics/cybersecurity",
    },
    {
      title: "PG in Information Security",
      duration: "600 hours",
      level: "Intermediate",
      description:
        "This Post-Graduation program is crafted to elevate your skills, offering hands-on experience with real-world projects and guidance from industry experts. This career-focused course is designed to equip you with the advanced knowledge and practical experience necessary to excel in high-impact cybersecurity roles and lead with confidence in a rapidly evolving digital landscape.This course offers a comprehensive introduction to key cybersecurity principles, aimed at enhancing your understanding and readiness against cyber threats. It covers essential topics from basic concepts to advanced practices, equipping participants with the knowledge to safeguard against digital threats effectively.",
      features: [
        "In-depth training from fundamentals to advanced topics",
        "Hands-on labs in ethical hacking, forensics, and defense",
        "Prepares for top certifications (CEH, CISSP, CompTIA)",
        "Real-world projects, simulations, and red vs. blue team exercises",
        "Career-ready skills for roles like analyst, pentester, and security engineer",
      ],
      link: "/academics/cybersecurity",
    },
  ];

  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="py-10 text-center">
          <h2
            className="xl:text-6xl text-4xl font-bold py-5 bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Available Programs
          </h2>
        </div>
        {courses.map((course, index) => (
          <div
            key={index}
            className="mx-auto bg-red-100 rounded-xl shadow-2xl px-8 py-8 relative my-11"
            style={{ boxShadow: "0 8px 10px rgb(0 0 0 / 0.1)" }}
          >
            <h2
              className="text-2xl lg:text-6xl text-[#4a0a0a] mb-4"
              style={{ fontFamily: "Josefin Sans" }}
            >
              {course.title}
            </h2>
            <div className="absolute top-8 right-8 text-right text-sm lg:text-2xl text-gray-700 font-[Jura]">
              <p>Duration: {course.duration}</p>
              <p>Level: {course.level}</p>
            </div>
            <p className="text-gray-900 text-sm lg:text-2xl font-[Jura] mb-6">
              {course.description}
            </p>
            <ul className="list-disc list-inside text-gray-900 text-sm lg:text-2xl font-[Jura] space-y-1 mb-8">
              {course.features.map((feature, fIndex) => (
                <li key={fIndex}>{feature}</li>
              ))}
            </ul>
            <div className="absolute bottom-8 right-8">
              <Link
                href={course.link}
                download
                className="bg-red-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 mx-auto shadow-md hover:bg-red-800 transition justify-center group relative overflow-hidden"
              >
                <span className="group-hover:translate-x-40 transition duration-500">
                  Download Brochure
                </span>
                <div className="absolute inset-0 flex items-center justify-center -translate-x-40 group-hover:translate-x-0 transition duration-500 z-10">
                  <i className="fas fa-download"></i>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
