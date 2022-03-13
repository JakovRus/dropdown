import React from "react";
import { IWithClassName } from "../../../types/common";
import { classnames } from "../../../utils/classNames";
import { IDropdownItem } from "../types";
import { DropdownOverlayItem } from "./OverlayItem";

import "./Overlay.scss";

export type IDropdownOverlayProps = IWithClassName & {
  items: IDropdownItem[];
  onItemClick(value: string): void;
};

export function DropdownOverlay(props: IDropdownOverlayProps) {
  const items = props.items.map((item) => {
    return (
      <DropdownOverlayItem
        key={item.value}
        item={item}
        onItemClick={props.onItemClick}
      />
    );
  })

  return (
    <div className={
      classnames(
        "dropdown-overlay",
        props.className,
      )
    }>
      {items}
    </div>
  )
}

