import InstrumentCard from "../components/InstrumentCard";
import instruments from "../data/instruments";
import "../styles/Instruments.css";

function Instruments() {
  return (
    <div className="instruments-page">
      <div className="instruments-header">
        <h1 className="instruments-title">Nhạc Cụ Truyền Thống</h1>
        <p className="instruments-subtitle">
          Khám phá kho tàng âm nhạc dân tộc Việt Nam qua những nhạc cụ độc đáo
        </p>
      </div>

      <div className="instruments-grid">
        {instruments.map((inst) => (
          <InstrumentCard key={inst.id} instrument={inst} />
        ))}
      </div>
    </div>
  );
}

export default Instruments;
