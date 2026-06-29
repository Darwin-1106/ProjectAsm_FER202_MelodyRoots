import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/events";

function useEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Lỗi tải danh sách:", error);
      }
    };
    fetchData();
  }, []);

  const addEvent = async (newEvent) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      const data = await res.json();
      setEvents((prev) => [...prev, data]);
    } catch (error) {
      console.error("Lỗi thêm:", error);
    }
  };

  const updateEvent = async (id, updatedEvent) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });
      const data = await res.json();
      setEvents((prev) => prev.map((ev) => (ev.id === id ? data : ev)));
    } catch (error) {
      console.error("Lỗi cập nhật:", error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setEvents((prev) => prev.filter((ev) => ev.id !== id));
    } catch (error) {
      console.error("Lỗi xóa:", error);
    }
  };

  return { events, addEvent, updateEvent, deleteEvent };
}

export default useEvents;
