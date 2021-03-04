import './App.css';
import BookmarkIntro from './components/BookmarkIntro';
import Contact from './components/Contact';
import Download from './components/Download';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <BookmarkIntro/>
      <Features/>
      <Download/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
