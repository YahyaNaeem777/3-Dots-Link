import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import image from './../src/Assets/Images/Creation Collection.png'
import Artist from './components/Artist/Artist';
import Nfts from './components/Nfts/Nfts';
import Roadmap from './components/Roadmap/Roadmap';
import Faqs from './components/Faqs/Faqs';
function App() {

  return (
    <div className="App">
      {/* <Navbar scrollToSection={scrollToSection}/> */}
      <Home />
      <About/>
      <img src={image} alt='img' className='img-fluid'/>
      <Artist />
      <Nfts />
      <Roadmap />
      <Faqs />
      {/* <Navbar collapseOnSelect expand="sm" data-bs-theme="dark" className='navbar'>
        <Navbar.Toggle aria-controls='navbarScroll'/>
        <Navbar.Collapse id='navbarScroll'>
        <Container>
          <Navbar.Brand href="#home"><img className='image' src={logo} alt='logo'/></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Artist</Nav.Link>
            <Nav.Link href="#pricing">Stacking</Nav.Link>
            <Nav.Link href="#pricing">Roadmap</Nav.Link>
            <Nav.Link href="#pricing">Team</Nav.Link>
            <Nav.Link href="#pricing">Marketplace</Nav.Link>

          </Nav>
        </Container>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}

export default App;
