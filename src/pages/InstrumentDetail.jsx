import { useParams, Link } from "react-router-dom";
import instruments from "../data/instruments";

function InstrumentDetail() {
  const { id } = useParams();
  const instrument = instruments.find((i) => i.id === Number(id));

  if (!instrument) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Không tìm thấy nhạc cụ</h2>
        <Link to="/instruments">← Quay lại danh sách</Link>
      </div>
    );
  }

  const { name, category, origin, description, image, level } = instrument;

  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1.5rem" }}>
      <Link
        to="/instruments"
        style={{ color: "#045716", fontWeight: 600, textDecoration: "none" }}
      >
        ← Quay lại danh sách
      </Link>

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <img
          src={image}
          alt={name}
          style={{ width: 320, height: 260, objectFit: "cover", borderRadius: 14 }}
        />
        <div style={{ flex: 1, minWidth: 240 }}>
          <span style={{ background: "#e8f5ec", color: "#045716", padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.8rem", fontWeight: 600 }}>
            {category}
          </span>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#03301d", margin: "0.75rem 0 0.5rem" }}>
            {name}
          </h1>
          <p style={{ color: "#666", marginBottom: "0.4rem" }}>📍 Xuất xứ: <strong>{origin}</strong></p>
          <p style={{ color: "#666", marginBottom: "1rem" }}>🎓 Cấp độ: <strong>{level}</strong></p>
          <p style={{ lineHeight: 1.7, color: "#444" }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default InstrumentDetail;
