import Introduction from "../components/introduction";
import Experience from "../components/Experience";
import Technology from "../components/Technology";
import RequestQuote from "../components/RequestQuote";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout page="/">
      <main>
        <Introduction />
        <Experience />
        <Technology />
        <RequestQuote />
      </main>
    </Layout>
  );
}
