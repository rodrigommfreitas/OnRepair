import { Rule } from "sanity";

export const socialMedia = {
  name: "socialMedia",
  title: "Redes Sociais",
  type: "document",
  fields: [
    {
      name: "platform",
      title: "Rede Social",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Campo obrigatório"),
    },
    {
      name: "URL",
      title: "Link",
      type: "url",
      validation: (Rule: Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https"] })
          .required()
          .error("Formato de URL inválido ou campo obrigatório"),
    },
  ],
};
