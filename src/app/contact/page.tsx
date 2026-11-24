import type { Metadata } from "next";
import {
  CollaborationOpportunities,
  ContactHero,
  ContactSignoff,
  OnlineChannels,
} from "@/components/contact/ContactSections";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <ContactHero />
      <CollaborationOpportunities />
      <OnlineChannels />
      <ContactSignoff />
    </>
  );
}
