import React from 'react';

interface Person {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

interface PersonListProps {
  person: Person;
}

const PersonList = ({ person }: PersonListProps) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>
        Name: {name} Age: {age} years
      </h3>
      <p>Hair Color: {hairColor}</p>
      <span>
        {hobbies.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </span>
    </>
  );
};

export default PersonList;
