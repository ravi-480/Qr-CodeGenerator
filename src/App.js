import './App.css';
import Accordian from './Components/Accordian/index';
import ImageSlider from './Components/Image-Slider';
import LoadMore from './Components/Loadmore';
import Tree from './Components/Tree-view';
import Qr from './Components/Qr-codeGenerator';
import menus from './Components/Tree-view/data';
import RandomColor from './Components/random-color';
import Star from './Components/star-hover';

function App() {
  return (
    <div className="App">
   {/* <Accordian /> */}
   {/* <RandomColor /> */}
   {/* <Star /> */}
   {/* <ImageSlider url = {"https://picsum.photos/v2/list"} page = {'1'} limit = {"10"} /> */}
   {/* <LoadMore /> */}
   {/* <Tree menus={menus} /> */}
   <Qr />
    </div>
  );
}

export default App;
