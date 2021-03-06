import React from 'react';
import { Avatar, Byline, Quote } from '../../index';
import { VisualTheme } from '@codecademy/gamut';
import cx from 'classnames';

import s from './styles.module.scss';

export type Testimonial = {
  firstName: string;
  lastName: string;
  occupation: string;
  quote: string;
  company?: string;
  imageUrl?: string;
};

type TestimonialProps = {
  testimonial: Testimonial;
  size: 'small' | 'medium' | 'large';
  theme: VisualTheme;
};

export const Testimonial: React.FC<TestimonialProps> = ({
  testimonial,
  size,
  theme,
}) => {
  const {
    firstName,
    lastName,
    occupation,
    quote,
    imageUrl,
    company,
  } = testimonial;

  return (
    <div
      className={cx(s.testimonialWrapper, {
        [s.darkWrapper]: theme === VisualTheme.DarkMode,
        [s.lightWrapper]: theme === VisualTheme.LightMode,
      })}
    >
      <div className={s.testimonialCardContainer}>
        <div className={cx(s.contentContainer, s[`${size}Container`])}>
          {imageUrl && (
            <div className={s.avatarContainer}>
              <Avatar
                src={imageUrl}
                theme={theme}
                className={cx({ [s.largeContainerAvatar]: size === 'large' })}
                alt=""
              />
            </div>
          )}
          <div className={s.bylineContainer}>
            <Byline
              firstName={firstName}
              occupation={occupation}
              company={company}
              lastName={lastName}
            />
          </div>
          <div className={s.quoteContainer}>
            <Quote text={quote} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};
