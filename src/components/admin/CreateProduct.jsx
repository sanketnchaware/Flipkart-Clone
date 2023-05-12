import React from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
const CreateProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <Form id={id} />
    </div>
  );
};

export default CreateProduct;
