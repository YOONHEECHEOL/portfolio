import './Viewport.css';
import { useEffect, useState } from 'react';

const About = () => {


  return (
    <>
      <h2>π μΉ μλΉμ€λ‘ κ°μΉμ κ°λμ μ λ¬νκ³  μΆμ κ°λ°μ, μ€ν¬μ² μλλ€!</h2>
      <p>
        μκ°λμμΈμ μ κ³΅νλ©°, μλΉμ€μ UI, UXμ κ΄μ¬μ κ°μ§κ² λμκ³  νλΆμ λ κ²μ μ μ λμλ¦¬ νλμ νλ©΄μ κ°λ°μλ€κ³Ό νμν  μΌμ΄ λ§μμ΅λλ€. μλΉμ€λ₯Ό κ΅¬ννλ κ°λ°μμ μ­ν μ λ§€λ ₯μ λκ»΄μ μ΅κ·ΌκΉμ§ μΉ νΌλΈλ¦¬μλ‘ μΌνλ€κ° κ°λ°μκ° λκΈ° μν΄ μλ° μΉ κ°λ°μ μμ± κ³Όμ μ 6κ°μκ° μ΄μνκ³  μ μ κ°λ°μλ‘ κ΅¬μ§ μ€ μλλ€.<br /><br />
        π¬ μμ¬μν΅μ μμμ λ£λ κ²λΆν° μμνλ€κ³  μκ°ν©λλ€.<br />λ¨Όμ  λ€λ₯Έ μ¬λμ μκ²¬μ λ£κ³  μ  μκ²¬μ μ κ·Ήμ μΌλ‘ νννκ³ μ ν©λλ€.<br />
        <br />π μ΄μ λ³΄λ€ λ°μ νλ κ²μ΄ μ€μνλ€κ³  μκ°νλ©° μκΈ°κ°λ°μ κ΄μ¬μ΄ λ§μ΅λλ€.<br />κΎΈμ€ν μ±μ₯νλ μ¬λμ΄ λκ³  μΆμ΅λλ€.
      </p>

      <hr />
      <h2>π» Skill</h2>
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
      <h2>π History</h2>
      <div className="history">
        <div>2020.06 - 2021.10</div>
        <div>μνλ€νΈμν¬(μ£Ό) / μΉ νΌλΈλ¦¬μ± / μ¬μ (1λ 5κ°μ)</div>
        <div>2019.07 - 2019.12</div>
        <div>μμ΄μΌλ§ / UI-UX λμμΈ(λͺ¨λ°μΌκ²μ) / μ¬μ (6κ°μ)</div>
        <div>2012.03 - 2018.02</div>
        <div>κ²½λΆλνκ΅ μκ°λμμΈνκ³Ό (μ‘Έμ)</div>
      </div>

      {/* <table>
        <colgroup>
          <col width="20%" />
          <col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <td>2020.06. - 2021.10.</td>
            <td>μνλ€νΈμν¬(μ£Ό) / μΉ νΌλΈλ¦¬μ± / μ¬μ (1λ 5κ°μ)</td>
          </tr>
          <tr>
            <td>2019.07. - 2019.12.</td>
            <td>μμ΄μΌλ§ / UI-UX λμμΈ(λͺ¨λ°μΌκ²μ) / μ¬μ (6κ°μ)</td>
          </tr>
          <tr>
            <td>2012.03. - 2018.02.</td>
            <td>κ²½λΆλνκ΅ μκ°λμμΈνκ³Ό (μ‘Έμ)</td>
          </tr>

        </tbody>
      </table> */}

      <hr />
      <h2>π³ License</h2>
      <p>
        μ λ³΄μ²λ¦¬κΈ°μ¬(νκΈ°) / νκ΅­μ°μμΈλ ₯κ³΅λ¨<br />
        SQL-D / νκ΅­λ°μ΄ν°μ§ν₯μ<br />
        <span className="ni">GTQ, GTQ-i / νκ΅­μμ°μ±λ³ΈλΆ</span>
      </p>

      <hr />
      <h2>πͺ Next</h2>
      <p>
        Tμν κ°λ°μ.<br />
          λ¬Έμ ν΄κ²°μ λ₯ν κ°λ°μκ° λμ.
        </p>
    </>
  )
}

export default About;