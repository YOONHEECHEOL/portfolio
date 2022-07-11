import './Viewport.css';
import { useEffect, useState } from 'react';

const Projects = () => {
  interface Datas {
    title: string,
    info: string,
    url: string,
    desc: string[]
  }


  let data:Datas[] = [
    {
      title: '개발자 양성 교육 - 최종 프로젝트',
      info: '스크린 야구장 예약 및 매장 관리 서비스',
      url: 'https://github.com/YOONHEECHEOL/tfprj',
      desc: [
        'Spring Boot + Thymeleaf + myBatis 를 주축으로 MVC2 패턴으로 개발한 프로젝트',
        'Thymeleaf 표현식을 이용하여 Thymeleaf layout 과 Bootstrap5 를 이용하여 뷰페이지 작업',
        'Spring Security를 적용하여 페이지 권한, 암호화 작업',
        'Oracle Cloud DB의 프로시저, 함수, 스케줄러를 이용하여 예약 건 관리',
        'gradle 로 의존성 관리 및 빌드',
        '폭포수 방법론 단계에 맞춰 개발'
      ]
    },
    {
      title: '개발자 양성 교육 - 중간 프로젝트',
      info: '공공데이터 API를 활용하여 관광지, 숙박업소, 음식점 정보를 제공하는 서비스',
      url: 'https://github.com/YOONHEECHEOL/yd_m_prj',
      desc: [
        'Spring legacy project에서 MVC2 패턴으로 개발한 프로젝트',
        '공공데이터 API를 AJAX 처리하고 필요한 데이터는 myBatis로 처리',
        'Maven 으로 의존성 관리',
        'Oracle DB에 DML, DDL 쿼리 작성 및 처리'
      ]
    },
    {
      title: '포트폴리오 페이지',
      info: '주니어 개발자 윤희철의 포트폴리오 페이지',
      url: 'https://github.com/YOONHEECHEOL/portfolio',
      desc: [
        'React.js 를 이용하여 컴포넌트 단위로 개발',
        '기본적인 Hook(useState, useEffect ...) 사용 Lifecycle 이해'
      ]
    }
  ];
  let [content, setContent] = useState(data);

  return (
    <>
      <h2>🖐 경험들</h2>

      {
        content.map((e, i) => {
          return (
            <>              
              <div className="project">
                <h3><span>{i + 1}. {e.title}</span><a href={e.url} target="_blank"><i className="fa-brands fa-github"></i></a></h3>                
                <p>
                  📌 {e.info}<br />               
                  {
                    e.desc.map((f) => {
                      return (
                        <>
                          <span className="project_desc">- {f}</span><br />
                        </>
                      )
                    })
                  }
                </p>
              </div>
            </>
            )
        })
      }


    </>
  )
}

export default Projects;