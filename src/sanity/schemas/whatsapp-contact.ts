import { Rule } from "sanity";

export const whatsappContact = {
  name: "whatsappContact",
  title: "Contacto WhatsApp",
  type: "document",
  fields: [
    {
      name: "URL",
      title: "Link",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https"] })
          .required()
          .error("Formato de URL inválido ou campo obrigatório"),
    },
  ],
};
