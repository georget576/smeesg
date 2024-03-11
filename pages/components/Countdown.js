import React, {useState, useEffect} from 'react'

const COUNTDOWN_TARGET = new Date("2024-06-05T10:00:00");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date ();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60);
  const seconds = Math.floor(totalTimeLeft / (1000) % 60);
  return { days, hours, minutes, seconds};
}

const Countdown = () => {
 const [timeLeft, setTimeLeft] = useState (() => getTimeLeft());

 useEffect(() => {
  const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
      }, 1000)
 
      
      return () => {
        clearInterval(timer);
      };

    }, [])
  
  return (
    <div>
        <div className='content'>
        
            {Object.entries(timeLeft).map(el => {
              const label = el[0];
              const value = el[1];
              return(
              <div className='box'>
                <div className='value'>
              <span>{value}</span>
                </div>
              <span className='label'>{label}</span>
              </div>

              )
            })}
            

        
      </div>
    </div>
  )
}

export default Countdown
