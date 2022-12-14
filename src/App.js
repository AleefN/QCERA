import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Post from './components/Post';
import Review from './components/Review';
import Home from './components/Home';


function App() {

  let component
      switch (window.location.pathname) {
        case "/":
          component = <Home />
          break

        case "/about" :
          component = <About />
          break
        case "/review":
          component= <Review />
          break
        case "/post":
          component = <Post />
          break
      }
  return (
    <div className='container'>
      <Navbar />
      {component}
    </div>
  );
}

export default App;
