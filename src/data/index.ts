export const SITE_TITLE = "Rich's Space";
export const SITE_DESCRIPTION = "A internet space for Rich.";

export interface MenuItem {
  label: string;
  url: string;
}

export const menuItems: MenuItem[] = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "blog",
    url: "/writings",
  },
  {
    label: "thoughts",
    url: "/thoughts",
  },
  {
    label: "projects",
    url: "/projects",
  },
];

export const title = "Rich's Space";
export const description = "A internet space for Rich.";
export const image = "/images/ogimage.png";
export const url = "https://richprins.dev";

export const ogImage = {
  src: "/images/ogimage.png",
  alt: "Rich's Space",
};

export const products = [
  {
    name: "Fli.so",
    url: "https://fli.so",
    image: "/products/fli.png",
  },
  {
    name: "Uiino",
    url: "https://uiino.com",
    image: "/products/uiino.png",
  },
  {
    name: "SticAI",
    url: "https://sticai.com",
    image: "/products/sticai.png",
  },
  {
    name: "Dun",
    url: "https://dunsuite.com",
    image: "/products/dun.png",
  },
  {
    name: "DunTasks",
    url: "https://duntasks.com",
    image: "/products/duntasks.png",
  },
];

export const socialLinks = [
  {
    label: "@x",
    url: "https://x.com/richprins_dev",
  },
  {
    label: "email",
    url: "mailto:hello@extensiblmedia.com",
  },
  {
    label: "github",
    url: "https://github.com/RichardSPrins",
  },
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/richard-prins-jr",
  },
];
