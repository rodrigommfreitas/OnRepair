"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { EmailsQueryResult } from "sanity.types";

export async function EmailList() {
  const EmailsQuery = groq`*[_type == "emailAddress"] {
    _id,
    emailAddress,
  }`;

  const emails = await client.fetch<EmailsQueryResult>(EmailsQuery);

  function getMailToLink(email: string) {
    return `mailto:${email}`;
  }

  return (
    <ul className="space-y-1">
      {emails.map((email) => (
        <li key={email._id}>
          <a href={getMailToLink(email.emailAddress!)}>{email.emailAddress}</a>
        </li>
      ))}
    </ul>
  );
}
