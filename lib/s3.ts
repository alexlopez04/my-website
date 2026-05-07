import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.S3_BUCKET_NAME!;

export type S3Image = {
  key: string;
  url: string;
  filename: string;
};

// Returns public URLs for all images in a given folder (e.g. "gallery", "projects", "about")
export async function listImages(folder: string): Promise<S3Image[]> {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: `${folder}/`,
  });

  const response = await s3.send(command);
  const contents = response.Contents ?? [];

  return contents
    .filter((obj) => {
      const key = obj.Key ?? "";
      // skip the folder entry itself and non-image files
      return key !== `${folder}/` && /\.(jpe?g|png|webp|gif|avif)$/i.test(key);
    })
    .map((obj) => {
      const key = obj.Key!;
      return {
        key,
        url: `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
        filename: key.split("/").pop() ?? key,
      };
    });
}
