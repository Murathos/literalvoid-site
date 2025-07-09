import Image from "next/image";
import { Mail, Instagram, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-black">
      <div className="max-w-2xl text-center flex flex-col items-center gap-4">
        <Image
          src="/logo/logo.jpg"
          alt="LiteralVoid Logo"
          width={100}
          height={100}
          className="mb-2"
        />
        <h1 className="text-4xl font-bold">LiteralVoid Studios</h1>
        <p className="text-lg">
          &quot;We build&quot; tools for the visual age.
        </p>

        <a
          href="https://testflight.apple.com/join/6uCCxvHS"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Try PhotoReducer on TestFlight
        </a>

        <div className="mt-10 text-sm text-gray-700 flex flex-col items-center gap-2">
          <a
            href="mailto:muratkucuk227@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail size={16} /> Mail Us
          </a>
          <a
            href="https://x.com/literalvoidco?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Twitter size={16} /> @literalvoidco
          </a>
          <a
            href="https://www.instagram.com/literalvoidco?igsh=c3lnYnd6b3BqbGQw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Instagram size={16} /> @literalvoidco
          </a>

          <footer className="mt-auto w-full max-w-2xl text-center text-sm text-gray-500 px-4 pb-6 pt-12">
            <div className="flex items-center justify-center gap-6 mb-3">
              <a
                href="mailto:muratkucuk227@gmail.com"
                className="hover:text-black transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/literalvoidco?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/literalvoidco?igsh=c3lnYnd6b3BqbGQw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p>© {new Date().getFullYear()} LiteralVoid Studios</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
