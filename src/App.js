import './App.css';
import Activity from './components/activity/Activity';
import Destination from './components/destinations/Destination';
import Header from './components/header/Header';
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
    </>
  );
}

export default App;
