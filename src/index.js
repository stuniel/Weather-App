import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css/style.css';
import CityPick from './components/CityPick';
import WeatherApp from './components/WeatherApp';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={CityPick} />
        <Match pattern="/city/:cityName" component={WeatherApp} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector("#main"));
