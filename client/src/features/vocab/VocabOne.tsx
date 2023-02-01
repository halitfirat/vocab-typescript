import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getVocab } from "./vocabSlice";
import { useAppDispatch, useAppSelector, Spinner } from "../../common";

const VocabOne: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const singleSelector = useAppSelector((state) => state.vocab.single);
  const loadingSelector = useAppSelector((state) => state.vocab.loading);

  useEffect(() => {
    fetchVocab();
    // eslint-disable-next-line
  }, []);

  const fetchVocab = () => {
    dispatch(getVocab(params.id || ""));
  };

  return loadingSelector === "pending" ? (
    <Spinner inline />
  ) : (
    <span>
      {singleSelector?.native} - {singleSelector?.foreign}
    </span>
  );
};

export default VocabOne;
