import React, { useState } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import LineChart from "../LineChart";
import { icon } from "../Assets/data.js";
import "./style.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaRegArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaRegArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {React.Children.toArray(
        slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <div className="container container-sm mobile ps-5 pe-5 mt-4">
                    <div className="row pt-4">
                      <div className="col ms-5">
                        <img
                          className="main-city-wether-icon"
                          src={slide.icon}
                        />
                        <div className="slider-block-h1">{slide.dayOfWeek}</div>
                        <div className="main-block-h3">{slide.date}</div>
                        <div className="slider-block-h1">{slide.temp}°</div>
                      </div>

                      <div className="col me-5 pt-1" id="position-right">
                        <h4 className="main-block-h4">
                          {slide.description.toUpperCase()}
                        </h4>

                        <h3 className="main-block-h3">
                          Humidity:
                          <div className="padding-text">{slide.humidity} %</div>
                        </h3>
                        <h3 className="main-block-h3">
                          Wind:
                          <div className="padding-text">{slide.wind} km/h</div>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="slider-flex">
                    <div className="slider-all-data">
                      {React.Children.toArray(
                        slide.value.map((slide, key) => {
                          return (
                            <div key={key} className="slider-block">
                              <div className="slider-dt_txt-block">
                                {slide.dt_txt.replace(slide.date, "")}
                              </div>
                              <div className="slider-description-block">
                                {slide.description.toUpperCase()}
                              </div>
                              <img className="footer-icon" src={slide.icon} />
                              <div className="slider-speed-block">
                                {slide.temp}°
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                    <div className="lineChart dis">
                      {" "}
                      <LineChart data_test={slide.value} />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })
      )}
    </section>
  );
};

export default Slider;
