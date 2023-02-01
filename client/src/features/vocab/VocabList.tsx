import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { getVocabs } from "./vocabSlice";
import { useAppDispatch, useAppSelector, Spinner } from "../../common";

const VocabList: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadingSelector = useAppSelector((state) => state.vocab.loading);
  const vocabs = useAppSelector((state) => state.vocab.list);

  useEffect(() => {
    fetchVocabs();
    // eslint-disable-next-line
  }, []);

  const fetchVocabs = async () => {
    dispatch(getVocabs());
  };

  return loadingSelector === "pending" ? (
    <Spinner />
  ) : (
    <ul>
      {vocabs.map((vocab) => {
        return (
          <li>
            <Link to={`/vocabs/${vocab._id}`}>
              {vocab.native} - {vocab.foreign}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default VocabList;
