"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { SocialMediaQueryResult } from "sanity.types";

export async function SocialMediaList() {
  const SocialMediaQuery = groq`*[_type == "socialMedia"] {
  _id,
  URL,
  platform,
  }`;

  const socials = await client.fetch<SocialMediaQueryResult>(SocialMediaQuery);

  return (
    <ul className="flex flex-col items-center space-y-1">
      {socials.map((social) => (
        <li key={social._id}>
          <a
            href={social.URL!}
            target="_blank"
            className="flex items-center gap-2"
          >
            {social.platform === "Facebook" && (
              <FacebookIcon className="h-5 w-5" />
            )}
            {social.platform === "Instagram" && (
              <InstagramIcon className="h-5 w-5" />
            )}
            {social.platform}
          </a>
        </li>
      ))}
    </ul>
  );
}
