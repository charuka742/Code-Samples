import React, {useEffect} from 'react';

function App () {
  const currentTime = () => {
    let el = document.querySelector ('p');

    let date = new Date ();
    let hh = date.getHours ();
    let min = date.getMinutes ();
    let sec = date.getSeconds ();

    let day = date.getDate ();
    let month = date.getMonth();
    let year = date.getFullYear ();

    hh = hh < 10 ? `0${hh}` : hh;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;


    let time = `${hh}:${min}:${sec}`;
    let currentDate = `${day} - ${month} - ${year}`;

    // Check if the h1 element exists before setting its innerText
    if (el) {
      el.innerText = `${currentDate} ${time}`;
    }
  };

  useEffect (() => {
    // Call the currentTime function every second
    setInterval (currentTime, 1000);
  }, []);

  return (
    <div className="flex justify-center h-screen place-items-center bg-[#060c2a]">
      <h1 className="text-[#f0f0f0] font-semibold text-2xl ">
        Current Time:
        <p />
      </h1>

    </div>
  );
}

export default App;
