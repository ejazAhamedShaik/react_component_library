import React from 'react';

export interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: React.FC<{ [key: string]: T }>;
}

const RegularList = <T extends {}>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: RegularListProps<T>) => {
  return (
    <>
        {items.map((item, i) => <ItemComponent {...{ [resourceName]: item}} />)}
    </>
  );
};

export default RegularList;
