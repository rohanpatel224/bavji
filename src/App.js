import "./App.css";
import img6 from "./Images/invitation_page-0006.jpg";
import img5 from "./Images/invitation_page-0005.jpg";
import img4 from "./Images/invitation_page-0004.jpg";
import img3 from "./Images/invitation_page-0003.jpg";
import img2 from "./Images/invitation_page-0002.jpg";
import img1 from "./Images/invitation_page-0001.jpg";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="App" style={{ backgroundColor: "white" }}>
              <img src={img1} alt="p1" width={"100%"} />
              <img src={img2} alt="p2" width={"100%"} />
              <img src={img3} alt="p3" width={"100%"} />
              <img src={img4} alt="p4" width={"100%"} />
              <img src={img5} alt="p5" width={"100%"} />
              <img src={img6} alt="p6" width={"100%"} />
            </div>
          }
        />
        <Route
          path="/hospital"
          exact
          element={
            <div className="App" style={{ backgroundColor: "white" }}>
              <img src={img1} alt="p1" width={"100%"} />
              <img src={img2} alt="p2" width={"100%"} />
              <img src={img3} alt="p3" width={"100%"} />
              <img src={img4} alt="p4" width={"100%"} />
              <img src={img5} alt="p5" width={"100%"} />
              <img src={img6} alt="p6" width={"100%"} />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
