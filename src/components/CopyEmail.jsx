import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const email = "rainakallan@outlook.com";
  const handlecopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("failed to copy", err);
    }
  };
  return (
    <button
      onClick={handlecopy}
      className={`button  flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 sm:text-base
    md:px-5 md:py-3 md:text-lg rounded-lg text-base font-body transition-all mt-5 text-white cursor-pointer ${
      copied
        ? "button"
        : "bg-[(var(--primary)] border border-border hover:bg-[var(--accent)]"
    }`}
    >
      {copied ? (
        <>
          Email is Copied! <Check className="w-4 h-4" />
        </>
      ) : (
        <>
          Copy my Email address <Copy className="w-4 h-4" />
        </>
      )}
    </button>
  );
};
