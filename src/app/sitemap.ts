import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hmartins-dev.vercel.app",
      lastModified: new Date(),
    },
  ];
}
