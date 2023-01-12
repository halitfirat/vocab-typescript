import React from "react";
import { useParams } from "react-router-dom";

const VocabOne: React.FC = () => {
  const params = useParams();

  return <h2>{params.id}</h2>;
};

export default VocabOne;
