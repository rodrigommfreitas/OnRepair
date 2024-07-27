import { type SchemaTypeDefinition } from "sanity";
import { store } from "./schemas/store";
import { email } from "./schemas/email";
import { phoneNumber } from "./schemas/phone-number";
import { socialMedia } from "./schemas/social-media";
import { whatsappContact } from "./schemas/whatsapp-contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [store, email, phoneNumber, socialMedia, whatsappContact],
};
