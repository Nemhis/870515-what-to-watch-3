import React from 'react';
import {formatDate} from '../../utils';

// eslint-disable-next-line react/prop-types
const Main = ({film}) => {
  // eslint-disable-next-line react/prop-types
  const {name, genre, promoDate} = film;

  return <div>
    <div><b>Название:</b> {name}</div>
    <div><b>Жанр:</b> {genre}</div>
    <div><b>Дата выхода промо:</b> {formatDate(promoDate)}</div>
  </div>;
};

export default Main;
