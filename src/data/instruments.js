import danTranh from "../assets/dantranh.jpg";
import danBau from "../assets/danbau.jpg";
import saoTruc from "../assets/saotruc.jpg";
import trongDan from "../assets/trongdan.png";
import danNguyet from "../assets/dannguyet.jpg";
import danTyBa from "../assets/dantiba.jpg";

const instruments = [
  {
    id: 1,
    name: "Đàn Tranh",
    category: "Dây",
    origin: "Việt Nam",
    description:
      "Đàn tranh là nhạc cụ dây gảy truyền thống của Việt Nam, có 16 đến 25 dây, âm thanh trong trẻo và thanh thoát.",
    image: danTranh,
    level: "Trung cấp",
    imgPosition: "center center",
  },
  {
    id: 2,
    name: "Đàn Bầu",
    category: "Dây",
    origin: "Việt Nam",
    description:
      "Đàn bầu là nhạc cụ độc đáo chỉ có một dây, tạo ra âm thanh kỳ diệu nhờ cần rung bằng vỏ bầu khô.",
    image: danBau,
    level: "Nâng cao",
    imgPosition: "center center",
  },
  {
    id: 3,
    name: "Sáo Trúc",
    category: "Hơi",
    origin: "Việt Nam",
    description:
      "Sáo trúc là nhạc cụ hơi làm từ ống trúc, phát ra âm thanh nhẹ nhàng, du dương, gắn liền với đồng quê Việt Nam.",
    image: saoTruc,
    level: "Cơ bản",
    imgPosition: "center center",
  },
  {
    id: 4,
    name: "Trống Dàn",
    category: "Gõ",
    origin: "Việt Nam",
    description:
      "Trống dàn là bộ nhạc cụ gõ gồm nhiều chiếc trống lớn nhỏ khác nhau, thường dùng trong dàn nhạc cung đình và lễ hội truyền thống.",
    image: trongDan,
    level: "Trung cấp",
    imgPosition: "center center",
  },
  {
    id: 5,
    name: "Đàn Nguyệt",
    category: "Dây",
    origin: "Việt Nam",
    description:
      "Đàn nguyệt hay đàn kìm có thùng đàn tròn như mặt trăng, hai dây tơ hoặc nylon, âm thanh ấm áp.",
    image: danNguyet,
    level: "Trung cấp",
    imgPosition: "center 70%",
  },
  {
    id: 6,
    name: "Đàn Tỳ Bà",
    category: "Dây",
    origin: "Trung Hoa",
    description:
      "Đàn tỳ bà là nhạc cụ dây gảy du nhập từ Trung Hoa, có hình dáng như quả lê, 4 dây với âm sắc phong phú.",
    image: danTyBa,
    level: "Nâng cao",
    imgPosition: "center center",
  },
];

export default instruments;
