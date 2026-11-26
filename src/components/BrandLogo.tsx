type BrandLogoProps = { variant?: "art" | "wordmark"; className?: string };

export default function BrandLogo({ variant = "art", className = "" }: BrandLogoProps) {
  if (variant === "wordmark") {
    return <span className={`display-font tracking-[-.08em] font-black text-3xl ${className}`}>IVAN<span className="text-[#ff0055]">®</span></span>;
  }

  return (
    <img
      src="/images/ivan-airbrush-logo.gif"
      alt="IVAN animated airbrush logo"
      width={360}
      height={234}
      className={`h-auto object-contain ${className || "w-[100px]"}`}
    />
  );
}
