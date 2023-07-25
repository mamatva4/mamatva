export const navbarBrand = "News App";
export const header = (category) => `News - Top ${category} Headlines`;
export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/general" },
  { nav: "Business", page: "/business" },
  { nav: "Sports", page: "/sports" },
  { nav: "Science", page: "/science" },
  { nav: "Health", page: "/health" },
  { nav: "Entertainment", page: "/entertainment" },
  { nav: "Technology", page: "/technology" },
];

export const router = [
  { path: "/", key: "general", category: "general", country: "in" },
  { path: "/general", key: "general", category: "general", country: "in" },
  { path: "/business", key: "business", category: "business", country: "in" },
  { path: "/sports", key: "sports", category: "sports", country: "in" },
  { path: "/science", key: "science", category: "science", country: "in" },
  { path: "/health", key: "health", category: "health", country: "in" },
  { path: "/entertainment", key: "entertainment", category: "entertainment",country: "in" },
  { path: "/technology", key: "technology", category: "technology", country: "in" }
];

export const summary = "Channel and PublishedAt";
export const channel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${new Date(published).toGMTString()}`;
