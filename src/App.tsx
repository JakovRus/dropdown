import React, { useCallback } from 'react';
import './App.scss';
import { Dropdown } from "./toolkit";
import { IDropdownItem } from "./toolkit/dropdown/types";

const items: IDropdownItem[] = [
  {
    label: "Rename",
    value: '1',
  },
  {
    label: "Delete",
    value: '2',
  },
  {
    label: "Share",
    value: '3',
  },
];

function App() {
  const onItemClick = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <div className="App">
      <Dropdown overlayPosition="bottomLeft" trigger="hover" items={items} onItemClick={onItemClick} />
    </div>
  );
}

export default App;
