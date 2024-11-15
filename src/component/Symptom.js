import React from "react"
import ReadBtn from "./ReadBtn"
import Title from "./Content/Titile"
import Description from "./Content/Description"
import Tag from "./Tag"

function Symptom() {
  return (
    <div className="content-container">
      <div className="text-container" data-aos="fade-up">
        <Tag icon={"fas fa-pills"} text={"新冠病毒症状"} />
        <Title text={"新型冠状病毒有哪些症状？"} />
        <Description
          text={
            "存在携带病毒但不发病的隐性感染者，但患者最有可能在 2 到 14 天之间出现症状。"
          }
        />
        <p data-aos="fade-up">疾控中心指出，新型冠状病毒的症状包括: </p>
        <ul data-aos="fade-up" className="symptom-list">
          <li>
            <i className="fas fa-check-circle"></i>发热
          </li>
          <li>
            <i className="fas fa-check-circle"></i>四肢乏力
          </li>
          <li>
            <i className="fas fa-check-circle"></i>干咳
          </li>
          <li>
            <i className="fas fa-check-circle"></i>头痛
          </li>
          <li>
            <i className="fas fa-check-circle"></i>咽痛
          </li>
          <li>
            <i className="fas fa-check-circle"></i>呼吸困难
          </li>
          <li>
            <i className="fas fa-check-circle"></i>持续性头痛
          </li>
          <li>
            <i className="fas fa-check-circle"></i>意识混乱
          </li>
        </ul>
        <ReadBtn text={"传播途径"} />
      </div>
      <img data-aos="fade-up" src="image/symptom.png" alt="virus" />
    </div>
  )
}

export default Symptom
