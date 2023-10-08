import React, { useState } from 'react';
import { Button, ButtonProps } from '@mui/material';

export type HoverButtonType = 'type_1' | 'type_2';

export interface HoverButtonProps extends ButtonProps {
  text: string;
  onHoverText: string;
  btnType?: HoverButtonType;
}

export default function ButtonHover(props: HoverButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const { onHoverText, text, btnType = 'type_1', ...restProps } = props;

  function currColor() {
    if (btnType === 'type_1') {
      return isHover ? 'error' : 'primary';
    } else if (btnType === 'type_2') {
      return isHover ? 'primary' : 'error';
    }
    return 'primary';
  }

  function currText() {
    if (btnType === 'type_1') {
      return isHover ? onHoverText : text;
    } else if (btnType === 'type_2') {
      return isHover ? text : onHoverText;
    }
    return '';
  }

  return (
    <Button
      {...restProps}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      color={currColor()}
    >
      {currText()}
    </Button>
  );
}
