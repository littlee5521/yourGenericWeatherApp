const css = require('./css/style.css');
const css1 = require('./css/reset.css');
import { weather } from "./script/getWeather";
import { grabLocation} from './script/suggestLocation'
//import fromUnixTime from 'date-fns/fromUnixTime'

grabLocation.getSuggestions()
