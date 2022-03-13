import React, { useCallback } from "react";
import { IDropdownItem } from "../types";

import "./Overlay.scss";

export type IDropdownItemProps = {
  item: IDropdownItem;
  onItemClick(value: string): void;
}

export function DropdownOverlayItem(props: IDropdownItemProps) {
  const {item, onItemClick} = props;
  const onClick = useCallback(() => {
    onItemClick(item.value);
  }, [item.value, onItemClick]);

  return (
    <span onClick={onClick} className="dropdown-overlay__item">
      {props.item.label}
    </span>
  )
}
