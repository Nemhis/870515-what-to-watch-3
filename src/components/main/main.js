import React from 'react';

const formatDate = (date) => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

// eslint-disable-next-line react/prop-types
const Main = ({film}) => {
  // eslint-disable-next-line react/prop-types
  const {name, genre, promoDate} = film;

  return <React.Fragment>
    <div>
      <div><b>Название:</b> {name}</div>
      <div><b>Жанр:</b> {genre}</div>
      <div><b>Дата выхода промо:</b> {formatDate(promoDate)}</div>
    </div>
  </React.Fragment>;
};

export default Main;
