import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { setActiveSong } from '../redux/features/playerSlice';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);

  console.log(country);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_mg4tMyQr38o4vEpexhUiuZV1YTDxg`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  return <div>AroundYou</div>;
};

export default AroundYou;
