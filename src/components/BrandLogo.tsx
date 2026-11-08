import Image from "next/image";

type BrandLogoProps = { variant?: "art" | "wordmark"; className?: string };

export default function BrandLogo({ variant = "art", className = "" }: BrandLogoProps) {
  if (variant === "wordmark") {
    return <span className={`display-font tracking-[-.08em] font-black text-3xl ${className}`}>IVAN<span className="text-[#ff0055]">®</span></span>;
  }
  return (
    <Image
      src="/images/ivan-logo.png"
      alt="IVAN original logo"
      width={150}
      height={110}
      priority
      className={`h-auto w-[100px] object-contain ${className}`}
    />
  );
}
