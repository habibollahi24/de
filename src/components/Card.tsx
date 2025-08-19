import React from 'react';

import styles from './card.module.scss';

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.cardContainer}>{children}</div>;
}
