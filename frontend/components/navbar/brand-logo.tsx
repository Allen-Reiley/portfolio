"use client";

import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  link?: boolean;
}

export function BrandLogo({
  className = "h-7 sm:h-8 w-auto aspect-square",
  link = true,
}: BrandLogoProps) {
  const content = (
    <>
      {/* Light Mode 'R' Logo */}
      <Image
        src="/images/logo-r-light.png"
        alt="Reitumetse.dev Logo"
        width={40}
        height={40}
        priority
        className={`dark:hidden block object-contain ${className}`}
      />
      {/* Dark Mode 'R' Logo */}
      <Image
        src="/images/logo-r-dark.png"
        alt="Reitumetse.dev Logo"
        width={40}
        height={40}
        priority
        className={`hidden dark:block object-contain ${className}`}
      />
    </>
  );

  if (!link) {
    return (
      <span className="group relative inline-flex items-center transition-opacity hover:opacity-85 shrink-0">
        {content}
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label="reitumetse.dev home"
      className="group relative inline-flex items-center transition-opacity hover:opacity-85 shrink-0"
    >
      {content}
    </Link>
  );
}
