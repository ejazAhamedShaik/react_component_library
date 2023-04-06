import React from 'react';
import RegularList, { RegularListProps } from './RegularList';

const SampleItemComponent: React.FC<{ name: string }> = ({ name }) => <p>{name}</p>;

const sampleData = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'Jim' },
];

export const RegularListStory = () => (
  <RegularList
    items={sampleData}
    resourceName="person"
    itemComponent={SampleItemComponent}
  />
);

export default {
  title: 'RegularList',
  component: RegularList,
};
