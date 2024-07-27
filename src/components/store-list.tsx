"use server";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { groq } from "next-sanity";
import Image from "next/image";
import { StoresQueryResult } from "sanity.types";

export async function StoreList() {
  const StoresQuery = groq`*[_type == "store"] {
    _id,
    name,
    phoneNumber,
    storeAddress,
    schedule {
      weekdays,
      saturday,
      sunday,
    },
    image,
    mapsURL
  }`;

  const stores = await client.fetch<StoresQueryResult>(StoresQuery);

  return (
    <ul className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      {stores.map((store) => (
        <li
          key={store._id}
          className="mx-auto flex h-full w-80 flex-col space-y-4 sm:w-96 lg:w-80 xl:w-96"
        >
          <Image
            src={urlFor(store.image as SanityImageSource).url()}
            width="384"
            height="384"
            alt="Loja Centro"
            className="h-[200px] rounded-lg object-cover shadow-xl shadow-black/30"
          />

          <div className="flex h-full flex-col justify-between">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">{store.name}</h3>

              <div className="text-muted-foreground">
                <span className="text-black/70"> Morada</span>
                <br />
                {store.storeAddress}
              </div>

              <div className="text-muted-foreground">
                <span className="text-black/70"> Horário</span>
                <br />
                {store.schedule?.weekdays && (
                  <span>Segunda a Sexta - {store.schedule?.weekdays}</span>
                )}
                <br />
                {store.schedule?.saturday && (
                  <span>Sábado - {store.schedule?.saturday}</span>
                )}
                <br />
                {store.schedule?.sunday && (
                  <span>Domingo - {store.schedule?.sunday}</span>
                )}
              </div>

              <p className="text-muted-foreground">
                <span className="text-black/70"> Telefone</span>
                <br />
                {store.phoneNumber}
              </p>
            </div>

            <a
              href={store.mapsURL!}
              target="_blank"
              className="mt-3 h-9 w-fit cursor-pointer rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Ver no Google Maps
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
