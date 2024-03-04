import { defineField } from "sanity";

const color = {
  name: "color",
  title: "Color",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
};

export default color;
