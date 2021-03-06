import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import MuiSlider from '@mui/material/Slider';

interface Props {
  disabled?: boolean;
  disableSwap?: boolean;
  max?: number;
  min?: number;
  orientation?: 'horizontal' | 'vertical';
  step?: number;
  tabIndex?: number;
  track?: 'inverted' | 'normal' | false;
  valueLabelDisplay?: 'auto' | 'off' | 'on';
  width: number | string;
  height: number;
}

export function Slider(props: Props): JSX.Element {
  const { width, height, ...other } = props;
  return <MuiSlider {...other} />;
}

Slider.defaultProps = {
  width: 160,
  height: 24,
};

addPropertyControls(Slider, {
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  disableSwap: {
    type: ControlType.Boolean,
    title: 'Disable swap',
  },
  max: {
    type: ControlType.Number,
    title: 'Max',
  },
  min: {
    type: ControlType.Number,
    title: 'Min',
  },
  orientation: {
    type: ControlType.Enum,
    title: 'Orientation',
    options: ['horizontal', 'vertical'],
  },
  step: {
    type: ControlType.Number,
    title: 'Step',
  },
  tabIndex: {
    type: ControlType.Number,
    title: 'Tab index',
  },
  track: {
    type: ControlType.Enum,
    title: 'Track',
    options: ['inverted', 'normal', false],
  },
  valueLabelDisplay: {
    type: ControlType.Enum,
    title: 'Value label display',
    options: ['auto', 'off', 'on'],
  },
});
