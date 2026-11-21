import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 py-16">
      <Image
        src="/konpal-logo.png"
        alt="Konpal"
        width={778}
        height={182}
        priority
        className="h-auto w-full max-w-[778px] dark:hidden"
      />
      <Image
        src="/konpal-logo-white.png"
        alt="Konpal"
        width={780}
        height={184}
        priority
        className="hidden h-auto w-full max-w-[780px] dark:block"
      />
    </main>
  );
}
