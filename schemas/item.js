export default {
  name: "item",
  title: "Menu Item",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "menu" }]
    },
    {
      name: "subCategory",
      title: "Sub category",
      type: "reference",
      to: [{ type: "subMenu" }]
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "allergens2",
      title: "Allergens2",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "allergens" }]
        }
      ],
      options: [
        {
          layout: "tags"
        }
      ]
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    }
  ]
};
