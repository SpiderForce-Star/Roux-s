export function FleurDeLis({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 88"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M32 2c1.8 10.4 7.4 16.6 13.8 19.6C36.2 24.8 33.2 33 32 42 30.8 33 27.8 24.8 18.2 21.6 24.6 18.6 30.2 12.4 32 2z" />
      <path d="M32 40c11.5.4 20.6 8.6 23.8 20.2-10.6-1.6-16.4 4.2-23.8 13.6C24.6 64.4 18.8 58.6 8.2 60.2 11.4 48.6 20.5 40.4 32 40z" />
      <path d="M18 78h28l-4 8H22z" />
      <rect x="29" y="38" width="6" height="10" rx="1" />
    </svg>
  );
}

export function WebbShield({ className = "size-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 92"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M40 4 L72 16 V46 C72 66 58 82 40 88 C22 82 8 66 8 46 V16 Z"
        fill="#14040F"
        stroke="#C9A84C"
        strokeWidth="2.4"
      />
      <path
        d="M40 14 V78 M16 28 H64 M20 46 H60 M28 62 H52"
        stroke="#C9A84C"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <path
        d="M40 14 C52 28 60 40 64 54 M40 14 C28 28 20 40 16 54 M16 28 C28 36 52 36 64 28 M20 46 C30 54 50 54 60 46"
        stroke="#C9A84C"
        strokeOpacity="0.7"
        strokeWidth="1.1"
      />
      <circle cx="40" cy="42" r="7.5" fill="#C9A84C" />
      <path
        d="M40 36.5 C42.4 36.5 44.4 38.2 44.8 40.6 C43.2 40.1 41.6 40 40 40 C38.4 40 36.8 40.1 35.2 40.6 C35.6 38.2 37.6 36.5 40 36.5 Z"
        fill="#14040F"
      />
      <path
        d="M36.6 43.2 L33 46.6 M43.4 43.2 L47 46.6 M34.8 41.2 L30.2 40.2 M45.2 41.2 L49.8 40.2 M38.2 46.4 L36.8 50.6 M41.8 46.4 L43.2 50.6"
        stroke="#14040F"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}
