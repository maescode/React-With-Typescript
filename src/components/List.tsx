import React from "react";
import { render } from "@testing-library/react";
import { JsxElement } from "typescript";
import { Istate as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className='List'>
        <div className='List-header'>
          <img className='List-img' alt='' src={person.url} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='List-note'>{person.note}</p>
      </li>
    ));
  };
  return <> {renderList()}</>;
};

export default List;
