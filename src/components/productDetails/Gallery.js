import Image from "next/image";
function Gallery({ gallery }) {
  return (
    <div className="gallery-grid container">
      <div className="relative">
        <Image
          className="rounded-lg"
          src={gallery.first.desktop}
          fill
          alt="image-gallery-1.jpg"
        />
      </div>
      <div className="relative md:row-start-2">
        <Image
          className="rounded-lg"
          src={gallery.second.desktop}
          fill
          alt="image-gallery-2.jpg"
        />
      </div>
      <div className="relative md:col-start-2 md:row-span-2">
        <Image
          className="rounded-lg"
          src={gallery.third.desktop}
          fill
          alt="image-gallery-1.jpg"
        />
      </div>
    </div>
  );
}

export default Gallery;
