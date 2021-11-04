import { parse } from "querystring";
import React, { useState } from "react";
import { Istate as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        url: string;
        age: number;
        note: string;
      }[]
    >
  >;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }): JSX.Element => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = (): void => {
    if (!input.name || !input.url || !input.age) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      url: "",
    });
  };
  return (
    <div className='AddToList'>
      <input
        value={input.name}
        type='text'
        placeholder='Name'
        onChange={handleChange}
        name='name'
        className='AddToList-input'
      />
      <input
        value={input.age}
        type='text'
        placeholder='Age'
        className='AddToList-input'
        name='age'
        onChange={handleChange}
      />
      <input
        value={input.url}
        type='text'
        placeholder='Image url'
        className='AddToList-input'
        name='url'
        onChange={handleChange}
      />
      <textarea
        value={input.note}
        placeholder='Note'
        className='AddToList-input'
        name='note'
        onChange={handleChange}
      />
      <button className='AddToList-btn' onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};
export default AddToList;
