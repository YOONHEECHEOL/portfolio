import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  let yOffset = 0;
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; //현재 활성화된(눈 앞에 보고있는) 씬
  let enterNewScene = false; // 새로운 scene이 시작되는 순간 true

  useEffect(() => {
    let a = 4
    console.log(a)

    scene();
  })

  const scene = () => {
    const sceneInfo = [
      {
        // 0
        type: 'sticky',
        heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
        scrollHeight: 0,
        objs: {
          container: document.querySelector('#scroll-section-0'),
          messageA: document.querySelector('#scroll-section-0 .main-message.a'),
          messageB: document.querySelector('#scroll-section-0 .main-message.b'),
          messageC: document.querySelector('#scroll-section-0 .main-message.c'),
          messageD: document.querySelector('#scroll-section-0 .main-message.d')
        },
        values: {
          messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2}], // 시작값, 끝값
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
          messageA_translateY_in: [20, 0, {start: 0.1, end: 0.2}],
          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          
          messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4}],
        }
      },
      {
        // 1
        type: 'normal',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector('#scroll-section-1')
        }
      },
      {
        // 2
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector('#scroll-section-2')
        }
      },
      {
        // 3
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector('#scroll-section-3')
        }
      }
    ]

    setLayout(sceneInfo);

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop(yOffset, sceneInfo);
    })

  }

  const setLayout = (sceneInfo) => {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= window.pageYOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);

  }

  const scrollLoop = (yOffset, sceneInfo) => {
    enterNewScene = false;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }


    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      // if (currentScene < sceneInfo.length-1)
      enterNewScene = true;
        currentScene++;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    if (enterNewScene === true) return;
    playAnimation(sceneInfo);
  }

  const calcValues = (values, currentYOffset, sceneInfo) => { // scene에서 scroll된 비율계산 함수
    let rv;

    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    
    if (values.length === 3) {
      // start ~ end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd)
        rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
      else if (currentYOffset < partScrollStart)
        rv = values[0];
      else if (currentYOffset > partScrollEnd)
        rv = values[1];
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  }

  const playAnimation = (sceneInfo) => {
    let values = sceneInfo[currentScene].values;
    let objs = sceneInfo[currentScene].objs;
    let currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    switch (currentScene) {
      case 0:
        let messageA_opacity_in = calcValues(values.messageA_opacity_in, currentYOffset, sceneInfo);
        let messageA_opacity_out = calcValues(values.messageA_opacity_out, currentYOffset, sceneInfo);
        let messageA_translateY_in = calcValues(values.messageA_translateY_in, currentYOffset, sceneInfo);
        let messageA_translateY_out = calcValues(values.messageA_translateY_out, currentYOffset, sceneInfo);

        if (scrollRatio <= 0.22) {
          objs.messageA.style.opacity = messageA_opacity_in;
          objs.messageA.style.transform = `translateY(${messageA_translateY_in}%)`;
        }
        else {
          objs.messageA.style.opacity = messageA_opacity_out;
          objs.messageA.style.transform = `translateY(${messageA_translateY_out}%)`;
        }
        // css
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
        
    }
  }

  return (
    <div className="App">

      <section className="scroll-section" id="scroll-section-0">
        <h1>AirMug Pro</h1>
        <div className="sticky-elem main-message a">
          <p>온전히 빠져들게 하는<br />최고급 세라믹</p>
        </div>
        {/* <div className="sticky-elem main-message b">
          <p>주변 맛을 느끼게 해주는<br />주변 맛 허용 모드</p>
        </div>
        <div className="sticky-elem main-message c">
          <p>온종일 편안한<br />맞춤형 손잡이</p>
        </div>
        <div className="sticky-elem main-message d">
          <p>새롭게 입가를 <br />찾아온 매혹</p>
        </div> */}
      </section>
      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          This test text. This test text.  This test text. This test text. This test text. This test text.This test text. This test text.  This test text. This test text. This test text. This test text.This test text. This test text.  This test text. This test text. This test text. This test text.
        </p>
      </section>
      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-elem main-message">
          <p>
            <small>편안한 초감</small>
            입과 하나 되다
          </p>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            편안한 목넘김을 완성하는 ...<br />
            항상 성공하는 컵
          </p>          
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            디자인 앤 퀄리티 오브 스웨덴<br />
            메이드 인 차이나
          </p>
          <div className="pin"></div>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Retina 머그</strong><br />
          아이디어를 광활하게 펼칠<br />
          아름답고 부드러운 음료 공간.
        </p>
        <p className="canvas-caption">
          This test text. This test text.  This test text. This test text. This test text. This test text.This test text. This test text.  This test text. This test text. This test text. This test text.This test text. This test text.  This test text. This test text. This test text. This test text.
        </p>
      </section>
      <footer className="footer">
        2020. 1분 코딩
      </footer>
    </div>
  );
}

export default App;
