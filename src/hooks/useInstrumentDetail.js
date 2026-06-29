import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/instruments";

function useInstrumentDetail(id) {
  const [instrument, setInstrument] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        setInstrument(data);
      } catch (error) {
        console.error("Lỗi tải chi tiết:", error);
      }
    };
    fetchData();
  }, [id]);

  return { instrument };
}

export default useInstrumentDetail;
