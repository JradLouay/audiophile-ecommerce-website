import Image from "next/image";
function Gallery() {
  return (
    <div className="gallery-grid container">
      <div className="relative">
        <Image
          className="rounded-lg"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
          }
          fill
          alt="image-gallery-1.jpg"
        />
      </div>
      <div className="relative md:row-start-2">
        <Image
          className="rounded-lg"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
          }
          fill
          alt="image-gallery-2.jpg"
        />
      </div>
      <div className="relative md:col-start-2 md:row-span-2">
        <Image
          className="rounded-lg"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
          }
          fill
          alt="image-gallery-1.jpg"
        />
      </div>
    </div>
  );
}

export default Gallery;
