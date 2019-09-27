export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "menuName",
      title: "Menu Name",
      type: "string",
      description: "The category this menu will represent."
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "menuName",
        maxLength: 100
      }
    },
    {
      name: "image",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "ActiveImage",
      title: "Active Hero image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
