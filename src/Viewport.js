import './Viewport.css';
import { useEffect, useState } from 'react';

const Viewport = () => {
  let [cnt, setCnt] = useState(0);
  let [title, setTitle] = useState(['About', 'Study', 'Projects', 'Resume'])

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
    document.querySelector('html').style.overflow = 'hidden';
  }

  const startScroll = () => {
    document.querySelector('html').style.overflow = 'scroll';
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

      <div className="modal" id="modal-0" onMouseOver={() => { stopScroll(); }} onMouseOut={()=>{startScroll()}}>
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <h1>About</h1>
        <h3>🖐 안녕하세요! 주니어개발자 윤희철입니다.</h3>
        <p>
          웹 서비스로 가치와 감동을 전달하고 싶은 개발자 윤희철입니다. <br />
          시각디자인을 전공하며, 서비스의 UI, UX에 관심을 가지게 되었고 학부생 때 게임 제작 동아리 활동을 하면서 개발자들과 협업할 일이 많았습니다. 서비스를 구현하는 개발자의 역할에 매력을 느껴서 최근까지 웹 퍼블리셔로 일하다가 개발자가 되기 위해 자바 웹 개발자 양성 과정을 6개월간 이수하고 신입 개발자로 지원하게 되었습니다.
        </p>
        <hr />

        <h3>💬 Communication</h3>
        <p>
          의사소통의 시작은 듣는 것부터 시작한다고 생각합니다.<br />
          먼저 다른 사람의 의견을 듣고 제 의견을 적극적으로 표현하고자 합니다.<br /><br />
          어제보다 발전하는 것이 중요하다고 생각하며 항상 자기개발에 관심이 많습니다.<br />
          꾸준히 기술과 지식을 습득하며 성장하는 사람이 되고 싶습니다.
        </p>

        <hr />
        <h3>💻 Skill</h3>
        <p>
          
        </p>

        <hr />
        <h3>📄 History</h3>
        <p>
          문제해결에 능한 개발자가 되고 싶습니다.<br />개발자로서 문제를 정의하고, 적합한 기술을 적용하여 문제를 해결하는데 능숙한 개발자로 성장하고자 합니다. 그러기 위해서 기술적인 실력 향상 뿐만 아니라 서비스를 보는 인사이트를 키우기 위해  노력하고 있습니다.
        </p>

        <hr />
        <h3>💳 License</h3>
        <p>
          정보처리기사(필기)
          SQL-D
          GTQ
          GTQ-I
        </p>

        <hr />
        <h3>💪 Next</h3>
        <p>
          문제해결에 능한 개발자가 되자.
        </p>
      </div>

      <div className="modal" id="modal-1">
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <h1>modal-1</h1>
      </div>

      <div className="modal" id="modal-2">
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        modal-2
      </div>

      <div className="modal" id="modal-3">
        <div className="options">
          <div className="fixed-menu-close" onClick={() => {
            removeModal(arr);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        modal-3
      </div>
    </>
  );
}

export default Viewport;