/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type WhatsappContact = {
  _id: string;
  _type: "whatsappContact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  URL?: string;
};

export type SocialMedia = {
  _id: string;
  _type: "socialMedia";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  platform?: string;
  URL?: string;
};

export type PhoneNumbers = {
  _id: string;
  _type: "phoneNumbers";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  number?: string;
  store?: string;
};

export type EmailAddress = {
  _id: string;
  _type: "emailAddress";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  emailAddress?: string;
};

export type Store = {
  _id: string;
  _type: "store";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  phoneNumber?: string;
  storeAddress?: string;
  schedule?: {
    weekdays?: string;
    saturday?: string;
    sunday?: string;
  };
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  mapsURL?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Slug
  | WhatsappContact
  | SocialMedia
  | PhoneNumbers
  | EmailAddress
  | Store
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/components/email-list.tsx
// Variable: EmailsQuery
// Query: *[_type == "emailAddress"] {    _id,    emailAddress,  }
export type EmailsQueryResult = Array<{
  _id: string;
  emailAddress: string | null;
}>;
// Source: ./src/components/phone-number-list.tsx
// Variable: PhoneNumbersQuery
// Query: *[_type == "phoneNumbers"] {    _id,    number,    store,  }
export type PhoneNumbersQueryResult = Array<{
  _id: string;
  number: string | null;
  store: string | null;
}>;
// Source: ./src/components/social-media-list.tsx
// Variable: SocialMediaQuery
// Query: *[_type == "socialMedia"] {  _id,  URL,  platform,  }
export type SocialMediaQueryResult = Array<{
  _id: string;
  URL: string | null;
  platform: string | null;
}>;
// Source: ./src/components/store-list.tsx
// Variable: StoresQuery
// Query: *[_type == "store"] {    _id,    name,    phoneNumber,    storeAddress,    schedule {      weekdays,      saturday,      sunday,    },    image,    mapsURL  }
export type StoresQueryResult = Array<{
  _id: string;
  name: string | null;
  phoneNumber: string | null;
  storeAddress: string | null;
  schedule: {
    weekdays: string | null;
    saturday: string | null;
    sunday: string | null;
  } | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  mapsURL: string | null;
}>;
// Source: ./src/components/whatsapp-contact.tsx
// Variable: WhatsappContactQuery
// Query: *[_type == "whatsappContact"] {    URL  }
export type WhatsappContactQueryResult = Array<{
  URL: string | null;
}>;