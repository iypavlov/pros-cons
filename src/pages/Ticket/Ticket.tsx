import React from 'react';
import { useParams } from 'react-router-dom';

export const Ticket = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
