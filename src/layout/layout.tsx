import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
}
