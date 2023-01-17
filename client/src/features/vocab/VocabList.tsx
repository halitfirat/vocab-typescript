import React, { useEffect } from "react";

import { getVocabs } from "./vocabSlice";
import { useAppDispatch, useAppSelector, Spinner } from "../../common";

const VocabList: React.FC = () => {
  const dispatch = useAppDispatch();
  const gettingVocabSelector = useAppSelector(
    (state) => state.vocab.gettingVocabs
  );
  const vocabs = useAppSelector((state) => state.vocab.vocabs);

  useEffect(() => {
    fetchVocabs();
    // eslint-disable-next-line
  }, []);

  const fetchVocabs = async () => {
    dispatch(getVocabs());
  };

  return gettingVocabSelector === "pending" ? (
    <Spinner />
  ) : (
    <ul>
      {vocabs.map((vocab) => {
        return (
          <li>
            {vocab.native} - {vocab.foreign}
          </li>
        );
      })}
    </ul>
  );
};

export default VocabList;
