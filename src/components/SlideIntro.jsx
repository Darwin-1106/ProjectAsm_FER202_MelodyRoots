import Carousel from "react-bootstrap/Carousel";
import "../styles/SlideIntro.css";
import slide1 from "../assets/SlideNhacCu.jpg";
import slide2 from "../assets/SlideNhacCu2.jpeg";
import slide3 from "../assets/SlideNhacCu3.jpg";

const slides = [
  {
    img: slide1,
    title: "Khám Phá Thế Giới Âm Nhạc",
    subtitle:
      "Hàng trăm nhạc cụ truyền thống và hiện đại đang chờ bạn khám phá",
    btn: "Xem nhạc cụ",
  },
  {
    img: slide2,
    title: "Học nhạc cụ dân tộc với các giảng viên tại Đại học FPT",
    subtitle:
      "Các khóa học được thiết kế bởi các giảng viên nhiều kinh nghiệm",
    btn: "Bắt đầu học",
  },
  {
    img: slide3,
    title: "Các buổi hòa nhạc",
    subtitle:
      "Đắm chìm vào âm nhạc dân gian với những nhạc cụ dân tộc Việt Nam",
    btn: "Tham gia ngay",
  },
];

function SlideIntro() {
  return (
    <div className="slide-intro-wrapper">
      <Carousel fade interval={4000} controls={false} className="slide-intro-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slide-img-wrapper">
              <img src={slide.img} alt={slide.title} className="slide-img" />
              <div className="slide-overlay" />
            </div>

            <Carousel.Caption className="slide-caption">
              <div className="slide-caption-inner">
                <span className="slide-tag">🎵 MelodyRoots</span>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <button className="slide-btn">{slide.btn}</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SlideIntro;