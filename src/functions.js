import React from 'react';

export function kelToCel(k) {
  return Math.round(k-273.15);
}

export function weekDay(day) {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  if (day > 6) day -= 7;
  return days[day];
}

export function latinize(input) {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

export function dateConvert(date) {
  const d = new Date(date*1000);
  let hours = d.getHours();
  let minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  const time = hours + ":" + minutes
  return (<span><strong>{time}</strong>{ampm}</span>)
}

// OpenWeatherMap API returns UTC time. To get the local time we need to subtract the difference in timezones (offset).
export function localNoon(offset) {
  let localTime = 12-offset || 12;
  localTime -= localTime%3;
  localTime %= 24;
  return `${localTime}:00:00`
}

export function imageIcon(icon) {
  const sun = function(color) {
    return (
      <svg id='01d' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 483.512 483.512'>
      <circle cx='241.752' cy='244.504' r='138.736' fill={color} />
      </svg>
    )
  };
  const fewClouds = function(color) {
    return (
      <svg id='02d' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 481.306 481.306'>
        <g fill={color}>
            <ellipse cx='341.632' cy='233.229' rx='136' ry='133.456' />
        </g>
        <path d='M426.208,361.453c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-8.688,1.256-13.472	c0.128-42.672-28.36-79.952-70.032-89.136c-23.752-5.232-46.424-1.368-65.184,8.76c-22.888-34.064-60.808-57.04-104.272-59.696	c-5.592-0.768-11.256-1.224-17.056-1.224C57.432,206.685,0,265.949,0,339.005c0,38.072,15.688,72.304,40.648,96.44	c22.072,24.488,52.72,40.312,89.008,42.944c0,0,295.432,1.464,296.552,1.464c29.712,0,53.792-27.208,53.792-59.208	C480,388.661,455.912,361.453,426.208,361.453z'
        fill='#fff' />
      </svg>
    )
  };
  const scatClouds = (
    <svg id='02d' xmlns='http://www.w3.org/2000/svg' viewBox='0 100 481.306 481.306'>
      <path d='M426.208,361.453c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-8.688,1.256-13.472	c0.128-42.672-28.36-79.952-70.032-89.136c-23.752-5.232-46.424-1.368-65.184,8.76c-22.888-34.064-60.808-57.04-104.272-59.696	c-5.592-0.768-11.256-1.224-17.056-1.224C57.432,206.685,0,265.949,0,339.005c0,38.072,15.688,72.304,40.648,96.44	c22.072,24.488,52.72,40.312,89.008,42.944c0,0,295.432,1.464,296.552,1.464c29.712,0,53.792-27.208,53.792-59.208	C480,388.661,455.912,361.453,426.208,361.453z' fill='#555' />
    </svg>
  );
  const clouds = (
    <svg id='02d' xmlns='http://www.w3.org/2000/svg' viewBox='0 100 481.306 481.306'>
      <path d='M426.208,361.453c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-8.688,1.256-13.472	c0.128-42.672-28.36-79.952-70.032-89.136c-23.752-5.232-46.424-1.368-65.184,8.76c-22.888-34.064-60.808-57.04-104.272-59.696	c-5.592-0.768-11.256-1.224-17.056-1.224C57.432,206.685,0,265.949,0,339.005c0,38.072,15.688,72.304,40.648,96.44	c22.072,24.488,52.72,40.312,89.008,42.944c0,0,295.432,1.464,296.552,1.464c29.712,0,53.792-27.208,53.792-59.208	C480,388.661,455.912,361.453,426.208,361.453z' fill='#fff' />
    </svg>
  );
  const rain = function(color) {
    return (
        <svg id='10d' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
        <circle cx='341.632' cy='136.468' r='136' fill={color} />
            <g fill='#fff'>

            <path d='M137.992,479.532c-1.352,0-2.728-0.344-3.992-1.072c-3.832-2.208-5.136-7.104-2.928-10.928 l28-48.496c2.208-3.824,7.088-5.152,10.928-2.928c3.832,2.208,5.136,7.104,2.928,10.928l-28,48.496 C143.448,478.1,140.76,479.532,137.992,479.532z'
            />

            <path d='M233.992,479.532c-1.352,0-2.728-0.344-3.992-1.072c-3.832-2.208-5.136-7.104-2.928-10.928 l28-48.496c2.208-3.824,7.096-5.152,10.928-2.928c3.832,2.208,5.136,7.104,2.928,10.928l-28,48.496 C239.448,478.1,236.76,479.532,233.992,479.532z'
            />

            <path d='M329.992,479.532c-1.352,0-2.728-0.344-3.992-1.072c-3.832-2.208-5.136-7.104-2.928-10.928 l28-48.496c2.208-3.824,7.088-5.152,10.928-2.928c3.832,2.208,5.136,7.104,2.928,10.928l-28,48.496 C335.448,478.1,332.76,479.532,329.992,479.532z'
            />

            <path d='M426.208,275.284c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-8.688,1.256-13.472 c0.128-42.672-28.36-79.952-70.032-89.136c-23.752-5.232-46.424-1.368-65.184,8.76c-22.888-34.064-60.808-57.04-104.272-59.696 c-5.592-0.768-11.256-1.224-17.056-1.224C57.432,120.516,0,179.78,0,252.836c0,38.072,15.688,72.304,40.648,96.44 c22.072,24.488,52.72,40.312,89.008,42.944c0,0,295.432,1.464,296.552,1.464c29.712,0,53.792-27.208,53.792-59.208 C480,302.492,455.912,275.284,426.208,275.284z'
            />
        </g>
    </svg>)
  };
  const showerRain = (
    <svg id='09d' xmlns='http://www.w3.org/2000/svg' viewBox='0 -50 480 530'>
    <path d='M426.208,168.036c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-13.624,1.256-18.40	c0.128-42.672-28.36-82.424-70.032-91.6c-23.752-5.232-46.424-2.6-65.184,7.528C226.712,31.492,188.792,7.9,145.328,5.244	c-5.592-0.768-11.256-1.528-17.056-1.528C57.432,3.708,0,62.82,0,135.876c0,38.072,15.688,72.232,40.648,96.368	c22.072,24.488,52.72,40.272,89.008,42.904c0,0,295.432,1.448,296.552,1.448c29.712,0,53.792-22.288,53.792-54.28	S455.912,168.036,426.208,168.036z'
    fill='#333' />

    <path d='M392.48,288.036c-0.992,0-37.672,0-37.672,0c0.656-8,1.096-7.976,1.104-12.2	c0.112-37.696-25.048-70.776-61.856-78.888c-20.984-4.624-41.008-1.28-57.584,7.664c-20.216-30.088-53.72-50.424-92.104-52.768	c-4.944-0.68-9.944-1.096-15.064-1.096C66.728,150.74,16,203.084,16,267.62c0,33.632,13.856,63.864,35.904,85.184	c19.496,21.632,46.568,35.608,78.624,37.936c0,0,260.968,1.296,261.96,1.296c26.24,0,47.52-23.736,47.52-52	C440,311.772,418.728,288.036,392.48,288.036z'
    fill='#fff' />

    <path id='SVGCleanerId_1_1_' d='M177.992,476.284c-1.36,0-2.736-0.344-3.992-1.072 c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928 l-28,48.496C183.448,474.852,180.76,476.284,177.992,476.284z'
    fill='#fff' />

    <path id='SVGCleanerId_3_1_' d='M81.992,476.284c-1.36,0-2.736-0.344-3.992-1.072 c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928 l-28,48.496C87.448,474.852,84.76,476.284,81.992,476.284z'
    fill='#fff' />

    <path id='SVGCleanerId_5_1_' d='M273.992,476.284c-1.36,0-2.736-0.344-3.992-1.072 c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928 l-28,48.496C279.448,474.852,276.76,476.284,273.992,476.284z'
    fill='#fff' />

    <path id='SVGCleanerId_7_1_' d='M369.992,476.284c-1.36,0-2.736-0.344-3.992-1.072 c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928 l-28,48.496C375.448,474.852,372.76,476.284,369.992,476.284z'
    fill='#fff' />

    </svg>
  );
  const thunderstorm = (
    <svg id='11d' xmlns='http://www.w3.org/2000/svg' viewBox='0 -100 481.12 581.12'>
      <path d='M427.2,162.4c-1.12,0-42.744,0-42.744,0c0.744-8,1.24-11.184,1.256-15.976	c0.128-42.768-28.424-81.376-70.192-90.584c-23.808-5.248-46.536-1.984-65.336,8.16C227.248,29.856,189.232,6.52,145.672,3.856	c-5.608-0.768-11.28-1.384-17.096-1.384C57.568,2.472,0,61.8,0,135.032c0,38.16,15.72,72.432,40.744,96.624	c22.12,24.544,52.84,40.384,89.216,43.024c0,0,296.12,1.464,297.24,1.464c29.776,0,53.92-24.8,53.92-56.872	C481.12,187.2,456.976,162.4,427.2,162.4z'
      fill='#333' />

      <g fill='#fdc567'>
          <polygon points='88.272,369.2 113.768,298.992 68.904,273.088 171.472,159.464 144.104,259.04 201.624,292.248'
          />
          <polygon points='260.616,452.152 286.112,381.944 241.248,356.04 343.816,242.416 316.448,341.984 373.968,375.192'
          />
      </g>
    </svg>
  );
  const mist = (
    <svg id='50d' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 217.43 217.43'>
    <g fill='#fff'>
      <path d='M144.797,47.095c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h129.797 C141.439,54.595,144.797,51.237,144.797,47.095z'
      />
      <path d='M209.93,70.405H58.632c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H209.93c4.142,0,7.5-3.358,7.5-7.5 S214.072,70.405,209.93,70.405z'
      />
      <path d='M174.53,116.214c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H22.446c-4.142,0-7.5,3.358-7.5,7.5 c0,4.142,3.358,7.5,7.5,7.5H174.53z'
      />
      <path d='M199.441,132.024H47.619c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h151.822c4.142,0,7.5-3.358,7.5-7.5 S203.583,132.024,199.441,132.024z'
      />
      <path d='M125.759,162.835H25.068c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h100.69c4.142,0,7.5-3.358,7.5-7.5 C133.259,166.193,129.901,162.835,125.759,162.835z'
      />
    </g>
  </svg>
);

  const icons = {
    '01d': sun('#ffcb30'),
    '01n': sun('#333'),
    '02d': fewClouds('#ffcb30'),
    '02n': fewClouds('#333'),
    '03d': scatClouds,
    '03n': scatClouds,
    '04d': clouds,
    '04n': clouds,
    '09d': showerRain,
    '09n': showerRain,
    '10d': rain('#ffcb30'),
    '10n': rain('#333'),
    '11d': thunderstorm,
    '11n': thunderstorm,
    '13d': rain('#ffcb30'),
    '13n': rain('#333'),
    '50d': mist,
    '50n': mist,
  }
  if(typeof icon === 'object') {
    return icons[icon.icon]
  } else {
    return icons[icon]
  }
}
