// import React, { useEffect, useState } from "react";
// import "./Add.css";
// import "../../../src/index.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";
// const Add = ({url}) => {
//   // const url = "http://localhost:4000";
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad",
//   });

//   //new change here start
//   const [sizes, setSizes] = useState({
//     extraSmall: 0,
//     small: 0,
//     medium: 0,
//     large: 0,
//     extraLarge: 0,
//   });
//   //new change end here

//   const OnChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   //new change here start
//   const onSizeChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = Number(event.target.value);
//     setSizes((sizes) => ({ ...sizes, [name]: value }));
//   };
// //new change end here
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     //new change here start
//     formData.append("sizes", JSON.stringify(sizes)); // Add sizes to formData
//     //new change end here
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("image", image);
//     const response = await axios.post(`${url}/api/food/add`, formData);
//     if (response.data.success) {
//       setData({
//         name: "",
//         description: "",
//         price: "",
//         category: "Salad",
//       });
//       setImage(false)
//       toast.success(response.data.message)
//     } else {
//         toast.error(response.data.message)
//     }
//   };

//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   return (
//     <div>
//       <div className="add">
//         <form className="flex-col" onSubmit={onSubmitHandler}>
//           <div className="add-image-upload flex-col">
//             <p>Upload Image</p>
//             <label htmlFor="image">
//               <img
//                 src={image ? URL.createObjectURL(image) : assets.upload_area}
//                 alt=""
//               />
//             </label>
//             <input
//               onChange={(e) => setImage(e.target.files[0])}
//               type="file"
//               id="image"
//               hidden
//               required
//             />
//           </div>
//           <div className="add-product-name flex-col">
//             <p>Product Name</p>
//             <input
//               onChange={OnChangeHandler}
//               value={data.name}
//               type="text"
//               name="name"
//               placeholder="type-here"
//             />
//           </div>
//           <div className="add-product-description flex-col">
//             <p>Product Description</p>
//             <textarea
//               onChange={OnChangeHandler}
//               value={data.description}
//               name="description"
//               rows="6"
//               placeholder="Write content here"
//             ></textarea>
//           </div>
//           <div className="add-category-price">
//             <div className="add-category flex-col">
//               <p>Product Category</p>
//               <select onChange={OnChangeHandler} name="category">
//                 <option value="Salad">Salad</option>
//                 <option value="Wraps">Wraps</option>
//                 <option value="Deserts">Deserts</option>
//                 <option value="Burger">Burger</option>
//                 <option value="Poutine">Poutine</option>
//                 <option value="Pure Veg">Pure Veg</option>
//                 <option value="Pasta">Pasta</option>
//                 <option value="Noodles">Noodles</option>
//               </select>
//             </div>
//             {/* <div className="add-price flex-col">
//               <p>Product Price</p>
//               <input
//                 onChange={OnChangeHandler}
//                 value={data.price}
//                 type="Number"
//                 name="price"
//                 placeholder="$20"
//               />
//             </div> */}
//             <div className="add-sizes flex-col">
//             <p>Product Sizes</p>
//             {Object.keys(sizes).map((size) => (
//               <div key={size}>
//                 <label>{size.charAt(0).toUpperCase() + size.slice(1)}</label>
//                 <input
//                   type="number"
//                   name={size}
//                   value={sizes[size]}
//                   onChange={onSizeChangeHandler}
//                   placeholder={`Price for ${size}`}
//                 />
//               </div>
//             ))}
//           </div>
//           </div>
//           <button type="submit" className="add-btn">
//             ADD
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;

import React, { useEffect, useState } from "react";
import "./Add.css";
import "../../../src/index.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const [sizes, setSizes] = useState({
    extraSmall: 0,
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSizeChangeHandler = (event) => {
    const name = event.target.name;
    const value = Number(event.target.value);
    setSizes((sizes) => ({ ...sizes, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    console.log("YA",formData);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setSizes({
          extraSmall: 0,
          small: 0,
          medium: 0,
          large: 0,
          extraLarge: 0,
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add food item!");
    }
  };

  useEffect(() => {
    console.log(data,sizes);
  }, [data,sizes]);

  return (
    <div>
      <div className="add">
        <form className="flex-col" onSubmit={onSubmitHandler}>
          <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>
          <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="type-here"
            />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write content here"
            ></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select onChange={onChangeHandler} name="category">
                <option value="Salad">Salad</option>
                <option value="Wraps">Wraps</option>
                <option value="Deserts">Deserts</option>
                <option value="Burger">Burger</option>
                <option value="Poutine">Poutine</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-sizes flex-col">
              <p>Product Sizes</p>
              {Object.keys(sizes).map((size) => (
                <div key={size}>
                  <label>{size.charAt(0).toUpperCase() + size.slice(1)}</label>
                  <input
                    type="number"
                    name={size}
                    value={sizes[size]}
                    onChange={onSizeChangeHandler}
                    placeholder={`Price for ${size}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="add-btn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
