import Image from "next/image";
import bannerBg from "../../assets/bg-enchantrix.jpg";

export default function BannerTitle({ title }: { title: string }) {
  return (
    <section className="relative mb-8">
      <div className="container mx-auto">
        <h1 className="text-center py-10 font-sedgwick rainbow-text">
          {title}
        </h1>
      </div>
      <Image
        className="absolute top-0 left-0 object-cover -z-10 w-full h-full before:content-[''] before:w-full before:h-full before:bg-black before:block before:absolute before:top-0 before:bottom-0 before:z-50"
        src={bannerBg}
        alt="bannerBg.jpg"
        width={1000}
        height={350}
      />
    </section>
  );
}
