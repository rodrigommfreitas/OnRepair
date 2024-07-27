"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { WhatsappContactQueryResult } from "sanity.types";

export async function getWhatsappContactURL() {
  const WhatsappContactQuery = groq`*[_type == "whatsappContact"] { URL }`;

  try {
    const whatsappContact =
      await client.fetch<WhatsappContactQueryResult>(WhatsappContactQuery);
    return whatsappContact[0].URL;
  } catch (error) {
    console.error("Error fetching WhatsApp contact URL: ", error);
  }
}
