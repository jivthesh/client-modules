import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import React from 'react';

import { BodyPortal } from '../BodyPortal';
import styles from './styles.module.scss';

export type OverlayProps = {
  children: React.ReactElement<any>;
  className?: string;

  /**
   * Whether clicking on the screen outside of the container should close the Overlay
   */
  clickOutsideCloses?: boolean;
  /**
   * Whether clicking the escape key should close the Overlay
   */
  escapeCloses?: boolean;
  /**
   * Called when the Overlay requests to be closed,
   * this could be due to clicking outside of the overlay, or by clicking the escape key
   */
  onRequestClose: () => void;
  /**
   * Whether the overlay is rendered
   */
  isOpen?: boolean;
  /**
   * Whether to use fixed positioning on the overlay. Defaults to true.
   */
  fixedPositioning?: boolean;
};

export const Overlay: React.FC<OverlayProps> = ({
  className,
  children,
  clickOutsideCloses = true,
  escapeCloses = true,
  fixedPositioning = true,
  onRequestClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <BodyPortal>
      <div
        className={cx(
          { [styles.fixedPositioning]: fixedPositioning },
          styles.container,
          className
        )}
      >
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: clickOutsideCloses,
            escapeDeactivates: escapeCloses,
            onDeactivate: onRequestClose,
          }}
        >
          {children}
        </FocusTrap>
      </div>
    </BodyPortal>
  );
};

export default Overlay;
