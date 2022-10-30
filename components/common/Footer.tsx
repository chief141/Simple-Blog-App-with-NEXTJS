import { FC } from 'react';
import styles from '../../styles/components_styles/footer.module.css';

const CopyFooter: FC = () => {
  return (
    <>
      <h6 className={styles.copyrightFooter}>
        ©Copyright 2022 Chief. All rights reserved.
      </h6>
    </>
  );
};

export default CopyFooter;
