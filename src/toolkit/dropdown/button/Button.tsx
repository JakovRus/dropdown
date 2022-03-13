import React from "react";
import { IWithClassName } from "../../../types/common";
import { classnames } from "../../../utils/classNames";
import { AppButton } from "../../button/Button";
import { MoreIcon } from "../../icons";

import "./Button.scss";

export type IDropdownButtonProps = IWithClassName & {
  onClick(): void;
}

export function DropdownButton(props: IDropdownButtonProps) {
  return (
    <AppButton
      className={classnames('dropdown-button', props.className)}
      onClick={props.onClick}>
      <MoreIcon color="#FFFFFF" />
    </AppButton>
  );
}
