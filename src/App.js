import './App.css';
import BookmarkIntro from './components/BookmarkIntro';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <BookmarkIntro/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
