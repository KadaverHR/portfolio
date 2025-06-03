import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import data from "../data/data.json";

function Banner() {
  const sceneRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    // Инициализация Parallax.js
    if (sceneRef.current) {
      new Parallax(sceneRef.current, {
        relativeInput: false,
        hoverOnly: false,
        pointerEvents: true,
      });
    }
    if (stackRef.current) {
      new Parallax(stackRef.current, {
        relativeInput: false,
        hoverOnly: false,
        pointerEvents: true,
      });
    }
  }, []);

  //рандом

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция для обработки текста с выделением слов
  const highlightText = (text, highlights) => {
    let highlightedText = text;
    highlights.forEach(({ word }) => {
      const regex = new RegExp(
        `(${word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")})`,
        "g"
      );
      highlightedText = highlightedText.replace(
        regex,
        `<span class="highlight">$1</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__box">
          <div className="banner__content">
            <p className="banner__hi">Привет!</p>
            <h1 className="banner__title">{data.bannerTitle}</h1>
            <p className="banner__subtitle">{data.bannerSubtitle}</p>
            <ul className="banner__content-list">
              {data.bannerContentList.map((item, index) => (
                <li key={`content-${index}`} className="banner__content-marker">
                  <img className="" src={item.img} alt="" />
                  <p className="banner__content-item">
                    {highlightText(item.text, item.highlights)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="banner__paralax-container">
            <div ref={stackRef} id="stack" className="banner__stack-list">
              {data.myStack.map((item, index) => (
                <div
                  key={`stack-${index}`}
                  data-depth={getRandomInRange(0.2, 0.6)}
                  className="banner__stack-item"
                >
                  <i className={item.icon}></i>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>

            <div className="banner__scene" id="scene" ref={sceneRef}>
              <div className="banner__circle-box" data-depth="0.3">
                <div className="banner__circle"></div>
              </div>
              <div className="banner__img-box" data-depth="0.7">
                <img className="banner__img" src="/img/main.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
