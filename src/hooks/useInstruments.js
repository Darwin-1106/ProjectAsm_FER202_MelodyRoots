import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/instruments";

function useInstruments() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setInstruments(data);
      } catch (error) {
        console.error("Lỗi tải danh sách:", error);
      }
    };
    fetchData();
  }, []);

  const deleteInstrument = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setInstruments((prev) => prev.filter((i) => i.id !== id));
    } catch (error) {
      console.error("Lỗi xóa:", error);
    }
  };

  return { instruments, deleteInstrument };
}

export default useInstruments;
