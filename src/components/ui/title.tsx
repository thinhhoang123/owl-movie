import Link from 'next/link';

export default function Title({
  children,
  to,
}: {
  children: React.ReactNode;
  to?: string;
}) {
  return (
    <div className="flex flex-row relative">
      <div className="absolute w-1 h-full bg-red-500 rounded-lg"></div>
      <h1 className="text-lg font-bold pl-3">
        {to ? (
          <Link href={to} className="hover:text-red-500 transition-all">
            {children} <span>👉</span>
          </Link>
        ) : (
          children
        )}
      </h1>
    </div>
  );
}
