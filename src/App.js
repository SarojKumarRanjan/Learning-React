
import Video from './components/Video';
import './App.css';


function App(){
return(
<div className="App">
<h1 className="Heading-title">Videos</h1>

  <Video verified={true} title="Learning react tutorial 1" channel="Coder Dost" views=" 100k" time="7 months ago"></Video>
  <Video verified={true}title="Learning react tutorial 2" channel="Coder Dost" views=" 700k" time="6 months ago"></Video>
  <Video verified={false} title="Learning react tutorial 3" channel="Coder Dost"  views=" 600k" time="5 months ago"></Video>
  <Video verified={true} title="Learning react tutorial 4" channel="Coder Dost"  views=" 160k" time="4 months ago"></Video>
  <Video verified={false} title="Learning react tutorial 5" channel="Coder Dost"  views=" 170k" time="3 months ago"></Video>
  <Video verified={true} title="Learning react tutorial 6" channel="Coder Dost"  views=" 106k" time="2 months ago"></Video>
  
   </div>)

}

export default App;