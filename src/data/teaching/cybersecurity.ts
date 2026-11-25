import type { TeachingCaseStudy } from "@/types/teaching";

export const cybersecurityCases: TeachingCaseStudy[] = [
  {
    id: "06",
    title: "Preserving digital evidence during a suspected security incident",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    status: "delivered",
    problem:
      "After opening an unexpected attachment, a student notices unusual device behaviour and unfamiliar sign-in activity. An investigation needs to establish what happened while preserving the integrity of the evidence.",
    classroomActivity:
      "Students examine sample files and compare cryptographic hashes to see how a change affects the ability to verify a file’s integrity.",
    approach:
      "Structure the investigation around evidence identification, collection, preservation, analysis, and reporting. Discuss the investigator’s responsibility to document how evidence was handled.",
    learningOutcomes: [
      "Identify observations that warrant investigation.",
      "Explain why digital evidence needs to be preserved.",
      "Use a cryptographic hash to check whether a sample file has changed.",
      "Describe the importance of documentation and accountability during an investigation.",
    ],
    technologies: [
      "Digital Forensics",
      "SHA-256",
      "Malware Analysis",
      "CyberChef",
      "CrypTool",
      "Cyber Law",
    ],
    featured: true,
  },
  {
    id: "07",
    title: "Assessing cybersecurity risks in a manufacturing laboratory",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    status: "delivered",
    problem:
      "Unauthorised changes to machine programs in a manufacturing laboratory could result in incorrect production and create safety risks.",
    classroomActivity:
      "Students identify the laboratory’s assets, examine access controls, and consider how a security incident could affect equipment and operations.",
    approach:
      "Apply confidentiality, integrity, and availability to the scenario. Compare protective controls at the device, network, application, and organisational levels.",
    learningOutcomes: [
      "Identify important assets and assess risks in an industrial environment.",
      "Explain how changes to digital instructions could affect physical operations.",
      "Apply confidentiality, integrity, and availability when assessing a scenario.",
      "Justify protective controls based on the risks they address.",
    ],
    technologies: [
      "Industrial Cybersecurity",
      "CIA Triad",
      "CNC Systems",
      "Risk Assessment",
      "Defense in Depth",
    ],
    featured: false,
  },
  {
    id: "08",
    title: "Verifying confidentiality, integrity, and authenticity",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    status: "delivered",
    problem:
      "A document exchanged online may contain sensitive information. The recipient may also need to check whether it was modified and whether it came from the expected sender.",
    classroomActivity:
      "Students work through encryption and decryption examples, compare file hashes, and examine the role of digital signatures in verifying a document’s origin and integrity.",
    approach:
      "Ask who can read the document, how the recipient can tell whether it changed, and how the recipient can verify who signed it.",
    learningOutcomes: [
      "Distinguish the purposes of encryption, hashing, and digital signatures.",
      "Explain the difference between symmetric and asymmetric cryptography.",
      "Identify the controls needed for confidentiality, integrity, and authenticity.",
      "Explain the role of digital certificates in verifying a signer’s identity.",
    ],
    technologies: [
      "Cryptography",
      "AES",
      "RSA",
      "SHA-256",
      "Digital Signatures",
      "PKI",
    ],
    featured: false,
  },
];
