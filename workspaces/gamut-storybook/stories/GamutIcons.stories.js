import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import * as icons from '@codecademy/gamut-icons';
import { selectableColors } from './helpers';
import s from './Icon-story.scss';

export default {
  title: 'Visuals/Icons',
  decorators: [withKnobs],
};

export const allIcons = () => (
  <div className={s.grid}>
    {Object.entries(icons).map(([iconName, Icon]) => (
      <span className={s.iconWrapper}>
        <Icon
          key={iconName}
          size={number('size', 64)}
          color={select('color', selectableColors, selectableColors.black)}
        />
        <span className={s.iconLabel}>{iconName}</span>
      </span>
    ))}
  </div>
);

allIcons.story = {
  name: 'All Icons',
};