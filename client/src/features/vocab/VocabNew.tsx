import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import IVocab from "./IVocab";
import { useAppDispatch, useAppSelector, Spinner } from "../../common";
import { addVocab } from "./vocabSlice";

const VocabNew: React.FC = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();
  const vocabAddedSelector = useAppSelector((state) => state.vocab.vocabAdded);
  const { register, handleSubmit } = useForm<IVocab>();

  const onHandleSubmit = handleSubmit((data) => {
    dispatch(addVocab({ vocabData: data, navigate }));
    setSubmitted(true);
  });

  return (
    <h2>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label>Native</label>
          <input {...register("native")} />
        </div>
        <div>
          <label>Foreign</label>
          <input {...register("foreign")} />
        </div>
        <button type="submit">
          Submit {submitted && vocabAddedSelector ? <Spinner /> : null}
        </button>
      </form>
    </h2>
  );
};

export default VocabNew;
