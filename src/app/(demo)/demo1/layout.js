import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
