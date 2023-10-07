import React, { useState } from 'react';

import GifList from './GifList';
import Gif from './Gif';
import SearchBar from "./SearchBar";

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedGifId, setSelectedGifId] = useState("WuGSL4LFUMQU");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = (res.data.map((gif) => gif.id));
      setGifIds(ids);
    });
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <Gif gifId={selectedGifId} />
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>
    </div>
  );
};

export default App;
