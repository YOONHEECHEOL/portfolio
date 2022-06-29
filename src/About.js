import './Viewport.css';
import { useEffect, useState } from 'react';

const About = () => {


  return (
    <>
      <h2>🖐 웹 서비스로 가치와 감동을 전달하고 싶은 개발자, 윤희철입니다!</h2>
      <p>
        시각디자인을 전공하며, 서비스의 UI, UX에 관심을 가지게 되었고 학부생 때 게임 제작 동아리 활동을 하면서 개발자들과 협업할 일이 많았습니다. 서비스를 구현하는 개발자의 역할에 매력을 느껴서 최근까지 웹 퍼블리셔로 일하다가 개발자가 되기 위해 자바 웹 개발자 양성 과정을 6개월간 이수하고 신입 개발자로 구직 중 입니다.<br /><br />
          💬 의사소통의 시작은 듣는 것부터 시작한다고 생각합니다. 먼저 다른 사람의 의견을 듣고 제 의견을 적극적으로 표현하고자 합니다.<br />
          👀 어제보다 발전하는 것이 중요하다고 생각하며 자기개발에 관심이 많습니다. 꾸준히 성장하는 사람이 되고 싶습니다.
        </p>

      <hr />
      <h2>💻 Skill</h2>
      <table className="skills">
        <tbody>
          <tr>
            <td>frontend</td>
            <td>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" alt="html5" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" alt="" />
              <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black" alt="" />
              <img src="https://img.shields.io/badge/Jquery-0769AD?style=flat-square&logo=JQuery&logoColor=white" alt="" />
              <img src="https://img.shields.io/badge/Bootstrap5-7952B3?style=flat-square&logo=Bootstrap&logoColor=white" alt="Bootstrap5" />
              <img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=flat-square&logo=Thymeleaf&logoColor=white" alt="Thymeleaf" />
            </td>
          </tr>
          <tr>
            <td>backend</td>
            <td>
              <img src="https://img.shields.io/badge/Java8-007396?style=flat-square&logo=Java&logoColor=white" alt="Java" />
              <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white" alt="Spring" />
              <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=white" alt="SpringBoot" />
              <img src="https://img.shields.io/badge/Mybatis-007396?style=flat-square&logo=Mybatis&logoColor=white" alt="" /><br />
            </td>
          </tr>
          <tr>
            <td>DB</td>
            <td>
              <img src="https://img.shields.io/badge/OracleCDB-F80000?style=flat-square&logo=Oracle&logoColor=white" alt="" />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h2>📄 History</h2>
      <table>
        <colgroup>
          <col width="20%" />
          <col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <td>2020.06. - 2021.10.</td>
            <td>알파네트워크(주) / 웹 퍼블리싱 / 사원 (1년 5개월)</td>
          </tr>
          <tr>
            <td>2019.07. - 2019.12.</td>
            <td>와이삼만 / UI-UX 디자인(모바일게임) / 사원 (6개월)</td>
          </tr>
          <tr>
            <td>2018.11. - 2019.02.</td>
            <td>플레이파크 / 그래픽디자인 / 사원 (4개월)</td>
          </tr>
          <tr>
            <td>2012.03. - 2018.02.</td>
            <td>경북대학교 시각디자인학과 (졸업)</td>
          </tr>

        </tbody>
      </table>

      <hr />
      <h2>💳 License</h2>
      <p>
        정보처리기사(필기) / 한국산업인력공단<br />
          SQL-D / 한국데이터진흥원
        </p>

      <hr />
      <h2>💪 Next</h2>
      <p>
        T자형 개발자.<br />
          문제해결에 능한 개발자가 되자.
        </p>
    </>
  )
}

export default About;