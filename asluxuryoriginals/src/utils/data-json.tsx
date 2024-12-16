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
      links: ["Contact Us", "FAQs", "Order and Delivery", "Payment"],
    },
    {
      header: "About",
      links: ["About Us", "Careers", "Partner Boutiques", "Promotions"],
    },
    {
      header: "Services",
      links: ["Shipping Policy", "Privacy Policy", "Affiliates", "Cookie Policy"],
    },
  
  ];
  