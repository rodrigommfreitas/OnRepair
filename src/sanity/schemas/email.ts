import { Rule } from "sanity";

export const email = {
  name: "emailAddress",
  title: "Emails",
  type: "document",
  fields: [
    {
      name: "emailAddress",
      title: "Endereço Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required()
          .email()
          .required()
          .error("Formato de email inválido ou campo obrigatório"),
    },
  ],
};
