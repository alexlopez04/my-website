import { listImages } from "@/lib/s3";
import { galleryGroups, galleryIntro } from "@/lib/data/gallery";
import GalleryGroup from "@/components/gallery/GalleryGroup";
import GalleryIntro from "@/components/gallery/GalleryIntro";

export const revalidate = 3600;

export default async function GalleryPage() {
  const groupsWithImages = await Promise.all(
    galleryGroups.map(async (group) => ({
      ...group,
      images: await listImages(group.folder).catch(() => []),
    }))
  );

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <GalleryIntro intro={galleryIntro} />

      {groupsWithImages.map((group) => (
        <GalleryGroup key={group.folder} group={group} />
      ))}
    </div>
  );
}
