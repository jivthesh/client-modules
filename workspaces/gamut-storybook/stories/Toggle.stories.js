import React from 'react';
import { Toggle } from 'gamut';
import { boolean } from '@storybook/addon-knobs';

export default {
  component: Toggle,
  title: 'Component/Toggle',
};

export const toggle = () => (
  <Toggle checked={boolean('checked', false)} onChange={() => {}} />
);