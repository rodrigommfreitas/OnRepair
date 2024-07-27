import { Rule } from "sanity";

export const phoneNumber = {
  name: "phoneNumbers",
  title: "Contactos Telefónicos",
  type: "document",
  fields: [
    {
      name: "number",
      title: "Telefone",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Campo obrigatório"),
    },
    {
      name: "store",
      title: "Loja",
      type: "string",
    },
  ],
};
