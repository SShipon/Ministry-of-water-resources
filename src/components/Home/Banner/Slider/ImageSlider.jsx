/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";
import { useTranslation } from "react-i18next";

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const { t } = useTranslation();

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  useEffect(() => {
    const interval = setInterval(showNextImage, 3000); 
    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.url}
            className="img-slider-img"
            style={{
              backgroundImage: `url(${image.url})`,
              translate: `${-100 * imageIndex}%`,
            }}
          >
            <div className="overlay">
              <h2 className="text-base lg:text-3xl">{t(`title${index + 1}`)}</h2>
              <p>{t(`desc${index + 1}`)}</p>
              {/* <button className="overlay-button">{t("exploreMore")}</button> */}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
