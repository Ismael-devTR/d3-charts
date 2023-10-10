import React, { FC } from 'react';
import styles from './Canvasjsx.module.scss';

interface CanvasjsxProps {}

const Canvasjsx: FC<CanvasjsxProps> = () => (
  <div className={styles.Canvasjsx} data-testid="Canvasjsx">
    Canvasjsx Component
  </div>
);

export default Canvasjsx;
