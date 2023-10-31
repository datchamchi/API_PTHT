import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Button variant="primary" onClick={() => navigate("/mau")}>
        {" "}
        QUản lý mẫu bài toán nhận diện đèn giao thông{" "}
      </Button>
      <Button variant="primary">
        {" "}
        QUản lý nhãn bài toán nhận diện đèn giao thông{" "}
      </Button>
      <Button variant="primary"> Quản lý model</Button>
    </div>
  );
}
export default Home;
