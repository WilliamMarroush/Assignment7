import './App.css';
import RandGif from './components/RandGif'


function App() {
  /*const [gif,setGif] = useState([]);
  const getGif = async()=>{
    await axios.get("http://api.giphy.com/v1/gifs/random?api_key=3QDCy7vrNYATU6nWpLPnfmDL6D77Aahk")
    .then(res=>{
      setGif(res.data);
    })
  }
  useEffect(()=>{
    getGif();
  },[])
  console.log(gif);*/
  return (
  <div>
    Still Working
    <div className='container'>
      <RandGif></RandGif>
    </div>
  </div>
  );
}
export default App;
