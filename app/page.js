import Advantage from './components/advantage';
import Company from './components/company';
import Header from './components/header';
import Partner from './components/partner';
import Prices from './components/prices';
import SimpleSlider from './components/slider';
import Faq from './components/faq';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Advantage />
      <SimpleSlider />
      <Partner />
      <Prices />
      <Company />
      <Faq />
      <Footer />
    </>
  );
}
