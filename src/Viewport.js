import './Viewport.css';
import { useEffect, useState } from 'react';
import About from './About';
import Study from './Study';
import Projects from './Projects';
import Resume from './Resume';

const Viewport = () => {
  let [cnt, setCnt] = useState(0);
  let [title, setTitle] = useState(['About', 'Study', 'Skills', 'Projects', 'Resume'])

  let arr = [];

  useEffect(() => {
    arr = [...document.querySelector('.wrapper_rotate').children];    

    return fadeIn(arr);    
    
  })

  // menu 출력
  const fadeIn = (arr) => {
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

  // menu 숨기기
  const fadeOut = (arr) => {
    console.log(arr)
    let countDown = arr.length - 1;
    let i = 0;
    let timer;

    timer = setInterval(() => {
      arr[i].children[0].style.top = '-20%'
      arr[i].children[0].style.opacity = '0'
      if (countDown === 0) return stopCount(timer);
      i++;
      countDown--;
    }, 250)
  }

  // timer 제거
  const stopCount = (timer) => {
    removeActive();
    clearInterval(timer);
  }

  // modal 숨기기
  const removeModal = (arr) => {
    let a = document.querySelectorAll('.modal');
    let timer;

    a.forEach((i) => {
      i.style.top = '-100vh'
    })

    timer = setTimeout(() => {
      fadeIn(arr);
      stopCount(timer);
    }, 250);
  }


  const removeActive = () => {
    let a = document.querySelectorAll('.pannel > div');

    a.forEach((i) => {
      i.classList.remove('active');
    })
  }

  // modal 활성화
  const activeModal = (i) => {
    let timer;
    console.log(i)
    timer = setTimeout(() => {
      document.querySelector(`#modal-${i}`).style.top = '2.5vh';
      stopCount(timer);
    }, 1400)
  }

  const stopScroll = () => {
    window.pageYOffset = 0;
    document.querySelector('body').style.overflow = 'hidden';
  }

  const startScroll = () => {
    document.querySelector('body').style.overflow = 'scroll';
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
          <span>luk2903201@gmail.com</span>
        </div>
        <span>YOON HEE CHEOL</span>
      </div>

      <div className="wrapper">

        <div className="wrapper_rotate">

          {
            title.map((e, i) => {
              return (
                <div className="pannel" key={i}>
                  <div onClick={(e) => {
                    let timer;

                    console.log(e.target.parentNode)                    

                    let count = 0;
                    timer = setInterval(() => {                    
                      if (count === 1) { return stopCount(timer); }
                      e.target.parentNode.classList.add('active');
                      // document.querySelector(`#modal-${i}`).classList.add('active');
                      activeModal(i)
                      fadeOut(arr);
                      count++;
                    }, 250)

                  }}>
                    <span className={ e === 'Resume' ? 'resume' : ''}>{e}</span>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>

      {/* About */}
      <div className="modal" id="modal-0" onMouseOver={() => { stopScroll(); }} onMouseOut={()=>{startScroll()}}>
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <About />
      </div>

      {/* Study */}
      <div className="modal" id="modal-1">
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <Study />
      </div>

      {/* Projects */}
      <div className="modal" id="modal-2">
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        
        <Projects / >
      </div>

      {/* Resume */}
      <div className="modal" id="modal-3">
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      
        <Resume />
      </div>
    </>
  );
}

export default Viewport;