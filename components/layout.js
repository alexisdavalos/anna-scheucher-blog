import dynamic from "next/dynamic";
import Alert from "../components/alert";
import Meta from "../components/meta";
const Footer = dynamic(import("../components/footer"));

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <div className="w-full xl:w-5/6 mx-auto"> 
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
