import { Rule } from "sanity";

export const store = {
  name: "store",
  title: "Lojas",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome da loja",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Campo obrigatório"),
    },
    {
      name: "phoneNumber",
      title: "Número de telemóvel da loja",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Campo obrigatório"),
    },
    {
      name: "storeAddress",
      title: "Morada",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Campo obrigatório"),
    },
    {
      name: "schedule",
      title: "Horário",
      type: "object",
      fields: [
        {
          name: "weekdays",
          title: "Dias de semana",
          type: "string",
          validation: (Rule: Rule) =>
            Rule.required().error("Campo obrigatório"),
        },
        {
          name: "saturday",
          title: "Sábado",
          type: "string",
        },
        {
          name: "sunday",
          title: "Domingo",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Imagem da loja",
      type: "image",
      validation: (Rule: Rule) => Rule.required().error("Campo obrigatório"),
    },
    {
      name: "mapsURL",
      title: "Link do Google Maps",
      type: "url",
      validation: (Rule: Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https"] })
          .required()
          .error("Formato de URL inválido ou campo obrigatório"),
    },
  ],
};
