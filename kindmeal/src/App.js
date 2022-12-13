
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import SecondNav from './Components/SecondNav';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
     <Navbar />
     <SecondNav />
     <Main/>
     <Footer />
    </div>
  );
}

export default App;
