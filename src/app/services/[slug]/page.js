import NavBar from "@/components/utils/NavBar";
import FOOter from "@/components/utils/FOOter";
import Hero from "@/components/pages/services/sub/Hero";
import Section_1 from "@/components/pages/services/sub/Section_1";
import Section_2 from "@/components/pages/services/sub/Section_2";
// import Section_3 from "@/components/pages/services/sub/Section_3";
import Section_4 from "@/components/pages/services/sub/Section_4";
import Section_3 from "@/components/pages/services/sub/Section_3";

// Mock service data - Ideally from CMS or API
const SERVICES = {
  offensive_security: {
    hero: {
      title: "Offensive Security",
      heading:
        "Expose Hidden Threats, Strengthen Defenses – Comprehensive VAPT for a Safer Digital Future",
      broucher: "#",
      service_request: "#",
    },
    section_1: {
      heading: "DETECT, PROTECT & PREVENT",
      points: [
        "Comprehensive Security Assessment",
        "Tailored Testing Approach",
        "Actionable Remediation Guidance",
        "Regulatory Compliance Support",
        "Realistic Threat Simulation",
        "Expert Consultation & Support",
        "Enhanced Client Trust & Confidence",
      ],
    },
    section_2: {
      heading: "Offensive security services we provide",
      services: [
        "Active Directory VAPT",
        "Cloud VAPT",
        "WiFi VAPT",
        "Mobile Application VAPT",
        "Secure Config. Review",
        "Secure Code Review (SAST)",
        "Network VAPT",
        "API VAPT",
        "Web Application VAPT",  
      ],
    },
    section_3: {
      heading1: "Compliances",
      heading2: "Approach",
      services: [
        "Active Directory VAPT",
        "Cloud VAPT",
        "WiFi VAPT",
        "Mobile Application VAPT",
        "Secure Config. Review",
        "Secure Code Review (SAST)",
        "Network VAPT",
        "API VAPT",
        "Web Application VAPT",  
      ],
    },
  },

  defensive_security: {
    hero: {
      title: "Defensive Security",
      heading:
        "Monitor Threats and ensure Continuous Security Resilience via Proactive Cyber Defence",
      broucher: "#",
      service_request: "#",
    },
    section_1: {
      heading: "SHIELDING SYSTEMS, SAFE-GUARDING SUCCESS",
      points: [
        "Real-Time Threat Monitoring & Detection",
        "Faster Incident Response",
        "Improved Threat Intelligence",
        "Enhanced Compliance",
        "Centralized Security Operations",
        "Reduced Business Downtime",
        "Cost Efficiency",
        "Continuous Improvement",
        "Insider Threat Protection",
        "Advanced Technology Utilization",
        "Increased Customer Trust",
        "Scalability and Flexibility",
      ],
    },
    section_2: {
      heading: "Defensive security services we provide",
      services: [
        "SIEM",
        "Threat Intel. Service",
        "Case Management",
        "DLP",
        "Digital Forensic",
        "Secure Code Review (SAST)",
        "Network VAPT",
        "API VAPT",
        "Web Application VAPT",  
      ],
    },
  },
};

export default async function ServicePage({ params }) {
  const { slug } = params;

  const serviceData = SERVICES[slug] || {
    hero: {
      title: "Our Services | Cyber Security",
      heading: "Explore Our Comprehensive Cyber Security Services",
      broucher: "#",
      service_request: "#",
    },
  };

  return (
    <>
      <NavBar />
      <Hero {...serviceData.hero} />
      <Section_1 {...serviceData.section_1} />
      <Section_2 {...serviceData.section_2} />
      <Section_3 {...serviceData.section_3}/>
      <Section_4/>
      <FOOter />
    </>
  );
}
