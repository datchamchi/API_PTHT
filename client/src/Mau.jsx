import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
function Mau() {
  const [mau, setMau] = useState([]);
  useEffect(function () {
    fetch("https://ptht.onrender.com/api/den/qlmau")
      .then((res) => res.json())
      .then((data) => setMau((mau) => data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {mau && (
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ảnh</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {mau.map((item) => (
              <tr key={item.id}>
                <td>{item._id}</td>
                <td>
                  <img src={item.image} alt={item.description} width="300" />
                </td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
export default Mau;
