// import React, { useContext, useState, useEffect, useMemo } from "react";
// import "./navbar.css";
// import { assets } from "../../assets/assets";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../Context/StoreContext";
// const Navbar = ({ setShowLogin }) => {
//   // create one state variable and initialize it with home
//   const [menu, setMenu] = useState("Home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [showInputBox, setShowInputBox] = useState("hidden");
//   const [inputBoxValue, setInputBoxValue] = useState("");
//   const { food_list, setSearchedList } = useContext(StoreContext);
//   useEffect(() => {
//     const filteredData = food_list.filter((el) => {
//       return el["name"].toLowerCase().includes(inputBoxValue.toLowerCase());
//     });
//     setSearchedList(filteredData);
//   }, [inputBoxValue]);

//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };
//   return (
//     <div className="navbar">
//       {/* <img src={assets.logo} alt="" className="logo"/> */}
//       <Link to="/">
//         <img src={assets.StonzyLogo} alt="" className="logo" />
//       </Link>
//       <ul className="navbar-menu">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={menu === "Home" ? "active" : ""}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("Menu")}
//           className={menu === "Menu" ? "active" : ""}
//         >
//           Menu{" "}
//         </a>
//         <a
//           href="#app-download"
//           onClick={() => setMenu("Mobile-App")}
//           className={menu === "Mobile-App" ? "active" : ""}
//         >
//           Mobile-App
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("ContactUs")}
//           className={menu === "ContactUs" ? "active" : ""}
//         >
//           ContactUs
//         </a>
//       </ul>
//       <div className="navbar-right">
//         <div>
//           <img
//             src={assets.search_icon}
//             alt="search"
//             onClick={() => {
//               const isMobile = window.innerWidth;
//               var flag = false;
//               if(isMobile <= 800){
//                 flag = true;
//               }

//               if (showInputBox === "hidden") {
//                 console.log("showInputBox:", showInputBox);
//                 setShowInputBox("visible"); // Show the input box
//                 navigate("/search"); // Navigate to the search page
//               }else if(flag === true){
//                 console.log("showInputBox:", showInputBox);
//                 console.log("isMobile:", isMobile);
//                 setShowInputBox("hidden");
//                 setTimeout(() => navigate("/"), 50);
//               } 
//               else if(showInputBox === "visible"){
//                 console.log("showInputBox:", showInputBox);
//                 console.log("isMobile:", isMobile);
//                 setShowInputBox("hidden");
//                 navigate("/"); 
//               }
//             }}
//           />
//         </div>
//         {/* New container for the input box */}
//         {showInputBox === "visible" && (
//           <div className="search-input-container">
//             <input
//               placeholder="Search"
//               id="searchInput"
//               value={inputBoxValue}
//               onChange={(e) => {
//                 setInputBoxValue(e.target.value);
//               }}
//               style={{ width: "100%" }} // Ensure input takes full width
//             />
//           </div>
//         )}
//         <div className="navbar-search-icon">
//           <Link to="/cart">
//             <img src={assets.basket_icon} alt="" />
//           </Link>
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>
//         {!token ? (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_icon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li onClick={() => navigate("/myorders")}>
//                 <img src={assets.bag_icon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}

//         <div
//           className="mobile-menu-icon"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <img
//             src={mobileMenuOpen ? assets.close_icon : assets.menu_icon}
//             alt=""
//           />
//         </div>
//       </div>

//       <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
//         <Link
//           to="/"
//           onClick={() => {
//             setMenu("home");
//             setMobileMenuOpen(false);
//           }}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => {
//             setMenu("Menu");
//             setMobileMenuOpen(false);
//           }}
//         >
//           Menu
//         </a>
//         <a
//           href="#app-download"
//           onClick={() => {
//             setMenu("Mobile-App");
//             setMobileMenuOpen(false);
//           }}
//         >
//           Mobile-App
//         </a>
//         <a
//           href="#footer"
//           onClick={() => {
//             setMenu("ContactUs");
//             setMobileMenuOpen(false);
//           }}
//         >
//           ContactUs
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInputBox, setShowInputBox] = useState("hidden");
  const [inputBoxValue, setInputBoxValue] = useState("");

  const { food_list, setSearchedList } = useContext(StoreContext);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // Filter food list whenever the input box value changes
  useEffect(() => {
    const filteredData = food_list.filter((el) =>
      el["name"].toLowerCase().includes(inputBoxValue.toLowerCase())
    );
    setSearchedList(filteredData);
  }, [inputBoxValue]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.StonzyLogo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("ContactUs")}
          className={menu === "ContactUs" ? "active" : ""}
        >
          ContactUs
        </a>
      </ul>

      <div className="navbar-right">
        <div>
          <img
            src={assets.search_icon}
            alt="search"
            onClick={() => {
              const isMobile = window.innerWidth <= 729; // Check for mobile screens
              if (showInputBox === "hidden") {
                setShowInputBox("visible");
                navigate("/search");
              } else {
                setShowInputBox("hidden");
                setTimeout(() => navigate("/"), 50);
                if (isMobile) {
                  setTimeout(() => navigate("/"), 50); // Navigate to home if on mobile
                }
              }
            }}
          />
        </div>

        {showInputBox === "visible" && (
          <div
            className="search-input-container"
            style={{
              position: "absolute",
              top: "90px",
              left: "0",
              zIndex: "1000",
              background: "#fff",
              width: "100%",
              padding: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <input
              placeholder="Search"
              id="searchInput"
              value={inputBoxValue}
              onChange={(e) => setInputBoxValue(e.target.value)}
              style={{ width: "calc(100% - 40px)", padding: "8px" }}
            />
            <button
              onClick={() => setShowInputBox("hidden")}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                background: "transparent",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
        )}

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

        <div
          className="mobile-menu-icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <img
            src={mobileMenuOpen ? assets.close_icon : assets.menu_icon}
            alt=""
          />
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setMenu("Home");
            setMobileMenuOpen(false);
          }}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("Menu");
            setMobileMenuOpen(false);
          }}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("Mobile-App");
            setMobileMenuOpen(false);
          }}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("ContactUs");
            setMobileMenuOpen(false);
          }}
        >
          ContactUs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
