import './Viewport.css';
import { useEffect, useState } from 'react';

const Viewport = () => {
  let [cnt, setCnt] = useState(0);

  useEffect(() => {
    let arr = [...document.querySelector('.wrapper_rotate').children]

    return countDown(arr);
    
  })

  const countDown = (arr) => {
    let countDown = arr.length-1;
    let i = 0;
    let timer;

    timer = setInterval(() => {
      arr[i].children[0].style.top = '0'
      arr[i].children[0].style.opacity = '1'
      if (countDown === 0) return stopCount(timer);
      i++;
      countDown--;
    }, 250)
  }

  let stopCount = (timer) => {
    clearInterval(timer)
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <div className="fixed-menu">
        <div>
          <a href="https://github.com/YOONHEECHEOL" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="mailto:luk2903201@gmil.com" target="_blank"><i className="fa-solid fa-at"></i></a>
        </div>
        <div>          
          <span>luk2903201@gmil.com</span>
        </div>
        <span>YOON HEE CHEOL</span>
      </div>

      <div className="wrapper">

        <div className="wrapper_rotate">

          <div className="pannel">
            <div>
              <span>About</span>
            </div>
          </div>

          <div className="pannel">
            <div>
              <span>Skill</span>
            </div>
          </div>

          <div className="pannel">
            <div>
              <span>Projects</span>
            </div>
          </div>

          <div className="pannel">
            <div>
              <span>About</span>
            </div>
          </div>

          <div className="pannel">
            <div>
              <span>Skill</span>
            </div>
          </div>

          <div className="pannel">
            <div>
              <span>Projects</span>
            </div>
          </div>


        </div>

      </div>
    </>
  );
}

export default Viewport;