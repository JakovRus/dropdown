import React from "react";
import "./Button.scss";
import { classnames } from "../../utils/classNames";

export type IAppButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function AppButton(props: IAppButtonProps) {
  return (
    <button
      {...props}
      className={classnames(
      'app-button',
        props.className,
      )}
    />
  )
}
