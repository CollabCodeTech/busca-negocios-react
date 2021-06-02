import React from 'react';
import Day from '../Day';
import WeekStyle from './styles';

function Week({ days }) {
  return (
    <WeekStyle>
      {days.map(day => (
        <Day {...day} />
      ))}
    </WeekStyle>
  );
}

export default Week;
