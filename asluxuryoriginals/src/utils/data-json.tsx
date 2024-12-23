export type Link = "Fragrances" | "New Arrivals" | "Clothing" | "Footwear" | "Accessories";

export const links: Link[] = ["Fragrances", "New Arrivals", "Clothing", "Footwear", "Accessories"];

export const sublistContent: { [key in Link]?: string[] } = {
  Footwear: ["Sneakers & Trainers", "Flip Flops & Sliders", "Shoes & Sandals"],
  Accessories: [
    "Sunglasses",
    "Hats & Caps",
    "Socks, Wallets & Belts",
    "Gloves & Scarves",
    "Watches",
  ],
  Clothing: [
    "T-Shirts",
    "Tops",
    "Polo Shirts",
    "Sweatshirts",
    "Hoodies",
    "Jackets",
    "Jumpers",
    "Shorts",
    "Jeans & Trousers",
    "Underwear",
    "Swim Shorts",
  ],
};

export const footerSections = [
  {
    header: "Customer Service",
    links: [
      { name: "Contact Us", path: "/contact-us" },
      { name: "FAQs", path: "/faqs" },
      { name: "Terms and Service", path: "/terms-of-service" },
    ],
  },
  {
    header: "About",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Exchange Policy", path: "/exchange-policy" },
      { name: "Refund Policy", path: "/refund-policy" },
    ],
  },
  {
    header: "Services",
    links: [
      { name: "Shipping Policy", path: "/shipping-policy" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  },
];

  