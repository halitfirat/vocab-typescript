import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import IVocab from "./IVocab";
import { useAppDispatch, useAppSelector, Spinner } from "../../common";
import { addVocab } from "./vocabSlice";

const VocabNew: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const addingVocabSelector = useAppSelector(
    (state) => state.vocab.addingVocab
  );
  const { register, handleSubmit } = useForm<IVocab>();

  const onHandleSubmit = handleSubmit((data) => {
    dispatch(addVocab({ vocabData: data, navigate }));
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
          Submit {addingVocabSelector === "pending" ? <Spinner inline /> : null}
        </button>
      </form>
    </h2>
  );
};

export default VocabNew;
