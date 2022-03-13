import React, { useCallback, useEffect, useState } from "react";
import { classnames } from "../../utils/classNames";
import { DropdownButton } from "./button/Button";
import { DropdownOverlay, IDropdownOverlayProps } from "./overlay/Overlay";

import "./Dropdown.scss";

export type IDropdownTrigger = 'click' | 'hover';
export type IDropdownOverlayPosition = 'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | 'top' | 'topRight';

export type IDropdownProps = IDropdownOverlayProps & {
  trigger?: IDropdownTrigger;
  overlayPosition?: IDropdownOverlayPosition;
};

export function Dropdown(props: IDropdownProps) {
  const { items, onItemClick, trigger, overlayPosition } = props;
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    // For hover trigger type overlay visibility is controlled via css.
    // So make overlay always available in dom.
    if(trigger === 'hover') {
      setOpened(true);
    }
  }, [trigger, opened, setOpened]);

  const toggle = useCallback(() => {
    if(trigger === 'hover') {
      return;
    }

    setOpened(!opened);
  }, [setOpened, opened, trigger]);

  const onOverlayItemClick = useCallback((value: string) => {
    onItemClick(value);
    setOpened(false);
  }, [onItemClick, setOpened]);

  return (
    <div className={classnames({
      'dropdown': true,
      'dropdown--hover': trigger === 'hover',
      [`dropdown--${overlayPosition}`]: Boolean(overlayPosition),
    })}>
      <DropdownButton className="dropdown__button" onClick={toggle} />
      {
        opened && (
          <DropdownOverlay
            className="dropdown__overlay"
            items={items}
            onItemClick={onOverlayItemClick}
          />
        )
      }
    </div>
  )
}
