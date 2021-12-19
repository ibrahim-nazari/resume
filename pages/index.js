import Introduction from "../components/introduction";
import Experience from "../components/Experience";
import Technology from "../components/Technology";
import RequestQuote from "../components/RequestQuote";
import Hobby from "../components/hobby";
import ContactInfo from "../components/contactinfo";
import Skills from "../components/skills";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <Introduction />
        <Experience />
        <Technology />
        <RequestQuote />
      </main>
    </Layout>
  );
}
