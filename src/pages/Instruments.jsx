import InstrumentCard from "../components/InstrumentCard";
import useInstruments from "../hooks/useInstruments";
import "../styles/Instruments.css";

function Instruments() {
  const { instruments, deleteInstrument } = useInstruments();

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
          <InstrumentCard
            key={inst.id}
            instrument={inst}
            onDelete={deleteInstrument}
          />
        ))}
      </div>
    </div>
  );
}

export default Instruments;
