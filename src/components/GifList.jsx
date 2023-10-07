import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds, setSelectedGifId } = props;
  return (
    <div>
      <div className="gif-list">
        { gifIds.map(
          (gifId) => <Gif gifId={gifId} key={gifId} setSelectedGifId={setSelectedGifId} />
        )}
      </div>
    </div>
  );
};

export default GifList;
