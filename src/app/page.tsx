import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/9633153b-f541-44d7-8424-072bab903ded-hagqwh.jpg",
  "https://utfs.io/f/7ef9287c-8be6-4994-adce-3040f7884edc-hagqwi.jpg",
  "https://utfs.io/f/826ca4dc-62e7-4dda-bd0b-12e6392dd18e-1qeoqr.jpg",
  "https://utfs.io/f/953c0193-1557-44eb-9647-807e43559f28-hagqwg.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div className="w-48 p-4" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
