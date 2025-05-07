import NavBar from "@/components/utils/NavBar";
import FOOter from "@/components/utils/FOOter";
import Hero from "@/components/pages/services/sub/Hero";
import Section_1 from "@/components/pages/services/sub/Section_1";
import Section_2 from "@/components/pages/services/sub/Section_2";
import Section_4 from "@/components/pages/services/sub/Section_4";
import Section_3 from "@/components/pages/services/sub/Section_3";

import ISO from "@/assets/logo/iso.jpg"
import EU from "@/assets/logo/eugdpr.jpg"
import AICPA from "@/assets/logo/aicpa.jpg"
import HIPAA from "@/assets/logo/hipaa.jpg"
import DSS from "@/assets/logo/dss.jpg"

import NIST from "@/assets/logo/nist.jpg"
import OWASP from "@/assets/logo/owasp.jpg"
import PTES from "@/assets/logo/ptes.jpg"
import OSSTMM3 from "@/assets/logo/osstmm3.jpg"
import ISSAF from "@/assets/logo/issaf.jpg"

import MSIP from "@/assets/logo/MSIP.png"
import WAZUH from "@/assets/logo/WAZUH.png"
import ELASTIC from "@/assets/logo/ELASTIC.png"
import CORTEX from "@/assets/logo/cortex.png"
import HIVE from "@/assets/logo/HIVE.png"

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
        {
          title: "Active Directory VAPT",
          description: "Assessment of Active Directory environments to identify vulnerabilities and misconfigurations.",
          link: "#",
        },
        {
          title: "Cloud VAPT",
          description: "Vulnerability assessment and penetration testing for cloud environments like AWS, Azure, and GCP.",
          link: "#",
        },
        {
          title: "WiFi VAPT",
          description: "Testing of wireless networks to identify risks such as rogue access points or weak encryption.",
          link: "#",
        },
        {
          title: "Mobile Application VAPT",
          description: "Security assessment of mobile apps for vulnerabilities on Android and iOS platforms.",
          link: "#",
        },
        {
          title: "Secure Config. Review",
          description: "Evaluation of system configurations against security best practices and compliance standards.",
          link: "#",
        },
        {
          title: "Secure Code Review (SAST)",
          description: "Static analysis of source code to detect security flaws early in the development lifecycle.",
          link: "#",
        },
        {
          title: "Network VAPT",
          description: "Penetration testing of internal and external networks to uncover security gaps.",
          link: "#",
        },
        {
          title: "API VAPT",
          description: "Security testing of APIs to identify issues like improper authentication or data exposure.",
          link: "#",
        },
        {
          title: "Web Application VAPT",
          description: "Comprehensive testing of web applications for OWASP Top 10 and other vulnerabilities.",
          link: "#",
        },
      ]
    },
    section_3: {
      heading1: "Compliances",
      heading2: "Approach",
    },
    section_3: {
      sections: [
        {
          heading: "Compliances",
          items: [
            { name: "ISO 27001", logo: ISO },
            { name: "EU GDPR", logo: EU },
            { name: "AICPA SOC 2", logo: AICPA },
            { name: "HIPAA", logo: HIPAA },
            { name: "PCI DSS", logo: DSS },
          ]
        },
        {
          heading: "Approach",
          items: [
            { name: "NIST", logo: NIST },
            { name: "OWASP", logo: OWASP },
            { name: "PTES", logo: PTES },
            { name: "OSSTMM3", logo: OSSTMM3 },
            { name: "ISSAF", logo: ISSAF },
          ]
        }
      ]
    }
    
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
        {
          title: "SIEM",
          description: "Security Information and Event Management system for real-time monitoring and threat detection.",
          link: "#",
        },
        {
          title: "Threat Intel. Service",
          description: "Provides actionable threat intelligence to proactively defend against cyber threats.",
          link: "#",
        },
        {
          title: "Case Management",
          description: "Centralized handling and tracking of security incidents and investigations.",
          link: "#",
        },
        {
          title: "DLP",
          description: "Data Loss Prevention solutions to protect sensitive data from unauthorized access or leaks.",
          link: "#",
        },
        {
          title: "Digital Forensic",
          description: "Investigation of cyber incidents through forensic analysis of digital evidence.",
          link: "#",
        },
      ]      
    },
    section_3: {
      sections: [
        {
          heading: "Tools",
          items: [
            { name: "MSIP", logo: MSIP },
            { name: "WAZUH", logo: WAZUH },
            { name: "ELASTIC", logo: ELASTIC },
            { name: "CORTEX", logo: CORTEX },
            { name: "HIVE", logo: HIVE },
          ]
        }
      ]
    }
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
