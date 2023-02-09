import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h2 className="text-3xl">AddProduct</h2>
      <div>
        <input className=" m-2" type="text" placeholder="title" />
        <input className=" m-2" type="text" placeholder="description" />
        <input className=" m-2" type="text" placeholder="type" />
        <input className=" m-2" type="text" placeholder="price" />
        <input className=" m-2" type="text" placeholder="img" />
      </div>
    </div>
  );
};

export default AddProduct;
