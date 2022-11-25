import "./App.css";
import img6 from "./Images/invitation_page-0006.jpg";
import img5 from "./Images/invitation_page-0005.jpg";
import img4 from "./Images/invitation_page-0004.jpg";
import img3 from "./Images/invitation_page-0003.jpg";
import img2 from "./Images/invitation_page-0002.jpg";
import img1 from "./Images/invitation_page-0001.jpg";

import img21 from "./Images/patrika/Jesingbapa Patrika_pages-to-jpg-0001.jpg";
import img22 from "./Images/patrika/Jesingbapa Patrika_pages-to-jpg-0002.jpg";
import img23 from "./Images/patrika/Jesingbapa Patrika_pages-to-jpg-0003.jpg";
import img24 from "./Images/patrika/Jesingbapa Patrika_pages-to-jpg-0004.jpg";
import img25 from "./Images/patrika/Jesingbapa Patrika_pages-to-jpg-0005.jpg";
import { Route, Routes } from "react-router-dom";

function App() {
  const paramString = window.location.search;
  let queryString = new URLSearchParams(paramString);
  console.log("queryString", queryString.get("page"));
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {queryString.get("page") !== "patrika" &&
                queryString.get("page") !== "hospital" && (
                  <div className="App" style={{ backgroundColor: "white" }}>
                    <h1
                      style={{ color: "#ff2059", textDecoration: "underline" }}
                    >
                      શ્રીમદ્ જેશીંગબાપા શતાબ્દી મહોત્સવ
                    </h1>
                    <div>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: "25px",
                          marginBottom: "10px",
                          textdecoration: "none",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        href="/patrika"
                      >
                        ~ આમંત્રણ પત્રિકા
                      </a>
                      <a
                        style={{ textDecoration: "none", fontSize: "25px" }}
                        href="/hospital"
                      >
                        ~ હોસ્પિટલ ઉપલબ્ધ સેવાઓ, કાર્ડ
                      </a>
                    </div>
                    <p style={{ colour: "Red" }}>open the link above</p>
                  </div>
                )}
              {queryString.get("page") === "hospital" && (
                <div className="App" style={{ backgroundColor: "white" }}>
                  <img src={img1} alt="p1" width={"100%"} />
                  <img src={img2} alt="p2" width={"100%"} />
                  <img src={img3} alt="p3" width={"100%"} />
                  <img src={img4} alt="p4" width={"100%"} />
                  <img src={img5} alt="p5" width={"100%"} />
                  <img src={img6} alt="p6" width={"100%"} />
                </div>
              )}
              {queryString.get("page") === "patrika" && (
                <div className="App" style={{ backgroundColor: "white" }}>
                  <img src={img21} alt="p1" width={"100%"} />
                  <img src={img22} alt="p2" width={"100%"} />
                  <img src={img23} alt="p3" width={"100%"} />
                  <img src={img24} alt="p4" width={"100%"} />
                  <img src={img25} alt="p5" width={"100%"} />
                </div>
              )}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
