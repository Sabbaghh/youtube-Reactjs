
import axios from 'axios';
const KEY ="AIzaSyAD8XKU1ndPhByshQJ-iJbTJmts0Ys6W0Q";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params : { 
      part : 'snippet',
      maxResults :7,
      key: KEY
  }
});