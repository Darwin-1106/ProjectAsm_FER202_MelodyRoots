import { Link } from "react-router-dom";
import "../styles/InstrumentCard.css";

function InstrumentCard({ instrument }) {
  const { id, name, category, origin, description, image, level, imgPosition } = instrument;

  const levelColor = {
    "Cơ bản": "#07be6c",
    "Trung cấp": "#f0a500",
    "Nâng cao": "#e05555",
  };

  return (
    <div className="inst-card">
      <div className="inst-card-img-wrapper">
        <img
          src={image}
          alt={name}
          className="inst-card-img"
          style={{ objectPosition: imgPosition || "center center" }}
        />
        <span
          className="inst-card-level"
          style={{ backgroundColor: levelColor[level] || "#888" }}
        >
          {level}
        </span>
      </div>

      <div className="inst-card-body">
        <div className="inst-card-meta">
          <span className="inst-card-category">🎵 {category}</span>
          <span className="inst-card-origin">📍 {origin}</span>
        </div>
        <h3 className="inst-card-title">{name}</h3>
        <p className="inst-card-desc">{description}</p>

        <Link to={`/instruments/${id}`} className="inst-card-btn">
          Tìm hiểu thêm →
        </Link>
      </div>
    </div>
  );
}

export default InstrumentCard;