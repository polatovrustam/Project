import './App.css';
import Activity from './components/activity/Activity';
import Destination from './components/destinations/Destination';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Our from './components/our/Our';
import Photos from './components/photos/Photos';
import Review from './components/reviews/Review';
import Tour from './components/tour/Tour';

function App() {
  return (
    <>
    <Header></Header>
    <Destination></Destination>
    <Activity></Activity>
    <Tour></Tour>
    <Photos></Photos>
    <Review></Review>
    <Our></Our>
    <Footer></Footer>
    </>
  );
}

export default App;
