import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css/style.css';
import WeatherApp from './components/WeatherApp';
// import Loading from './components/Loading';
import NotFound from './components/NotFound';

const Root = () => {
  const repo = `/${window.location.pathname.split('/')[1]}`;
  return (
    <BrowserRouter basename={repo}>
      <div>
        <Match exactly pattern="/" component={WeatherApp} />
        <Match pattern="/city/:cityName" component={WeatherApp} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector("#main"));
