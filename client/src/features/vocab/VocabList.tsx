import React, { useEffect, useState } from "react";
import axios from "axios";

import IVocab from "./IVocab";

const VocabList: React.FC = () => {
  const [vocabs, setVocabs] = useState<IVocab[]>([]);

  useEffect(() => {
    fetchVocabs();
    // eslint-disable-next-line
  }, []);

  const fetchVocabs = async () => {
    const result: { data: IVocab[] } = await axios.get("/api/vocabs");

    setVocabs(result.data);
  };

  return (
    <ul>
      {vocabs.map((vocab) => {
        return <li>{vocab.foreign}</li>;
      })}
    </ul>
  );
};

export default VocabList;
