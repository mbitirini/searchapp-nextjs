import SearchInput from './SearchInput';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex flex-col gap-10 items-center p-6">
          <div className="text-3xl">Search App</div>
          <SearchInput />
          <div className="flex flex-col items-center w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
