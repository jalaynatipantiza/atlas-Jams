import axios from 'axios';

export default function getAllData() {

  const [state, setState] = useState({
    events: [],
    performers: [],
    host: {},
  });

  useEffect(()=>{
    axios.get("/all/events")
    .then(res => {
      setState(prev => ({...prev, events: [res.data]}))
    })
  }, []);

};