"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PhoneNumbersQueryResult } from "sanity.types";

export async function PhoneNumberList() {
  const PhoneNumbersQuery = groq`*[_type == "phoneNumbers"] {
    _id,
    number,
    store,
  }`;

  const phoneNumbers =
    await client.fetch<PhoneNumbersQueryResult>(PhoneNumbersQuery);

  function getTelLink(phoneNumber: string) {
    return `tel:${phoneNumber}`;
  }

  return (
    <ul className="flex flex-col items-start space-y-1">
      {phoneNumbers.map((phoneNumber) => (
        <li key={phoneNumber._id}>
          <a href={getTelLink(phoneNumber.number!)}>
            <span className="mr-2">{phoneNumber.number}</span>
            <span className="text-muted-foreground">{phoneNumber.store}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
