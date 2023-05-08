import Header from "./(components)/header";
import Features from "./(components)/features";
import News from "./(components)/news";
import Welcome from "./(components)/welcome";
import Maps from "./(components)/map";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Welcome />
      <News />
      <Maps />
    </>
  );
}
