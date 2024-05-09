import Image from "next/image";

import bannerBg from "../../assets/bg-enchantrix.jpg";

export default function BannerTitle({ title }: { title: string }) {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <h1 className="text-center py-10 font-sedgwick rainbow-text mb-0">
          {title}
        </h1>
      </div>
      <Image
        priority
        className="absolute top-0 left-0 object-cover -z-10 w-full h-full"
        src={bannerBg}
        alt="bannerBg.jpg"
        width={1000}
        height={350}
      />
    </section>
  );
}
