export type GalleryGroup = {
  title: string;
  subtitle: string;
  blurb: string;
  folder: string; // S3 prefix — must match the subfolder name under gallery/
};

export const galleryIntro =
  "A collection of photos I've taken over the years. Replace this with whatever you want to say about your photography.";

export const galleryGroups: GalleryGroup[] = [
  {
    title: "Grand Canyon",
    subtitle: "Arizona · 2024",
    blurb: "Write a short blurb about this trip or shoot here.",
    folder: "gallery/grand-canyon",
  },
  // Add more groups as you upload to S3:
  // {
  //   title: "Europe",
  //   subtitle: "Summer 2023",
  //   blurb: "...",
  //   folder: "gallery/europe",
  // },
];
