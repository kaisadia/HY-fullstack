import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../reducers/anecdoteReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const content = event.target.value;
    dispatch(filter(content));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      Filter <input name="filter" onChange={handleChange} />
    </div>
  );
};

export default Filter;
