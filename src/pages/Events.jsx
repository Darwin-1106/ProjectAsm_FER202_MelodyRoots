import { useState, useRef, useEffect } from "react";
import useEvents from "../hooks/useEvents";

function Events() {
  const { events, error, addEvent, updateEvent, deleteEvent } = useEvents();

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const addFirstRef = useRef(null);
  const editFirstRef = useRef(null);
  useEffect(() => { if (showAddForm) addFirstRef.current?.focus(); }, [showAddForm]);
  useEffect(() => { if (showEditForm) editFirstRef.current?.focus(); }, [showEditForm]);
  const [addData, setAddData] = useState({ tenBuoiBieuDien: "", ngay: "", khungGio: "", viTri: "" });
  const [editData, setEditData] = useState({ tenBuoiBieuDien: "", ngay: "", khungGio: "", viTri: "" });
  const [addError, setAddError] = useState("");
  const [editError, setEditError] = useState("");
  
  const validate = (data) => {
    if (!data.tenBuoiBieuDien.trim()) return "Vui lòng nhập tên buổi biểu diễn";
    if (!data.ngay) return "Vui lòng chọn ngày";
    if (!data.khungGio.trim()) return "Vui lòng nhập khung giờ";
    if (!data.viTri.trim()) return "Vui lòng nhập vị trí";
    return "";
  };

  const handleOpenAdd = () => {
    setShowAddForm(true);
    setShowEditForm(false);
    setAddData({ tenBuoiBieuDien: "", ngay: "", khungGio: "", viTri: "" });
    setAddError("");
  };

  const handleOpenEdit = (ev) => {
    setEditingId(ev.id);
    setEditData({ tenBuoiBieuDien: ev.tenBuoiBieuDien, ngay: ev.ngay, khungGio: ev.khungGio, viTri: ev.viTri });
    setShowEditForm(true);
    setShowAddForm(false);
    setEditError("");
  };

  const handleAdd = () => {
    const error = validate(addData);
    if (error) { setAddError(error); return; }
    addEvent(addData);
    setShowAddForm(false);
  };

  const handleSave = () => {
    const error = validate(editData);
    if (error) { setEditError(error); return; }
    updateEvent(editingId, editData);
    setShowEditForm(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lịch Biểu Diễn</h1>

      {error && <p style={{ color: "red" }}>❌ Lỗi: {error}</p>}

      <button onClick={handleOpenAdd}>+ Thêm buổi biểu diễn</button>
      {showAddForm && (
        <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem", maxWidth: 500 }}>
          <h3>Thêm buổi biểu diễn</h3>
          {addError && <p style={{ color: "red" }}>{addError}</p>}
          <table>
            <tbody>
              <tr>
                <td>Tên buổi biểu diễn</td>
                <td>
                  <input
                    ref={addFirstRef}
                    value={addData.tenBuoiBieuDien}
                    onChange={(e) => { setAddData({ ...addData, tenBuoiBieuDien: e.target.value }); setAddError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                  />
                </td>
              </tr>
              <tr>
                <td>Ngày</td>
                <td>
                  <input
                    type="date"
                    value={addData.ngay}
                    onChange={(e) => { setAddData({ ...addData, ngay: e.target.value }); setAddError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                  />
                </td>
              </tr>
              <tr>
                <td>Khung giờ</td>
                <td>
                  <input
                    placeholder="VD: 19:00 - 21:00"
                    value={addData.khungGio}
                    onChange={(e) => { setAddData({ ...addData, khungGio: e.target.value }); setAddError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                  />
                </td>
              </tr>
              <tr>
                <td>Vị trí</td>
                <td>
                  <input
                    value={addData.viTri}
                    onChange={(e) => { setAddData({ ...addData, viTri: e.target.value }); setAddError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button onClick={handleAdd}>Thêm</button>{" "}
                  <button onClick={() => setShowAddForm(false)}>Hủy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {showEditForm && (
        <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem", maxWidth: 500 }}>
          <h3>Sửa buổi biểu diễn</h3>
          {editError && <p style={{ color: "red" }}>{editError}</p>}
          <table>
            <tbody>
              <tr>
                <td>Tên buổi biểu diễn</td>
                <td>
                  <input
                    ref={editFirstRef}
                    value={editData.tenBuoiBieuDien}
                    onChange={(e) => { setEditData({ ...editData, tenBuoiBieuDien: e.target.value }); setEditError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  />
                </td>
              </tr>
              <tr>
                <td>Ngày</td>
                <td>
                  <input
                    type="date"
                    value={editData.ngay}
                    onChange={(e) => { setEditData({ ...editData, ngay: e.target.value }); setEditError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  />
                </td>
              </tr>
              <tr>
                <td>Khung giờ</td>
                <td>
                  <input
                    placeholder="VD: 19:00 - 21:00"
                    value={editData.khungGio}
                    onChange={(e) => { setEditData({ ...editData, khungGio: e.target.value }); setEditError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  />
                </td>
              </tr>
              <tr>
                <td>Vị trí</td>
                <td>
                  <input
                    value={editData.viTri}
                    onChange={(e) => { setEditData({ ...editData, viTri: e.target.value }); setEditError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button onClick={handleSave}>Lưu</button>{" "}
                  <button onClick={() => setShowEditForm(false)}>Hủy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1.5rem" }}>
        <thead>
          <tr>
            <th>Tên buổi biểu diễn</th>
            <th>Ngày</th>
            <th>Khung giờ</th>
            <th>Vị trí</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev) => (
            <tr key={ev.id}>
              <td>{ev.tenBuoiBieuDien}</td>
              <td>{ev.ngay}</td>
              <td>{ev.khungGio}</td>
              <td>{ev.viTri}</td>
              <td>
                <button onClick={() => handleOpenEdit(ev)}>Sửa</button>{" "}
                <button onClick={() => deleteEvent(ev.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Events;
