'use client';

import { MailIcon, Smartphone } from 'lucide-react';
import React from 'react';
import Button from './Button';
import LogoutBtn from './LogoutBtn';
import Image from 'next/image';
import { useUser } from '@/context/UserProvider';

import styles from './cardInfo.module.scss';
import Link from 'next/link';
import Card from './Card';

export default function CardInfo() {
  const { user } = useUser();
  return (
    <Card>
      <div className={styles.cardInfo}>
        <Image
          src="/ava.png"
          alt={user?.nickName || ''}
          width={70}
          height={70}
          className=""
        />

        <p>{user?.nickName} خوش آمدی 😍 </p>
        <p className={styles.row}>
          <span>دنبال کننده</span>
          <Image
            src={user?.picture?.large || '/ava.png'}
            alt={user?.nickName || ''}
            width={20}
            height={20}
            className=""
          />
        </p>
        <p className={styles.row} dir="ltr">
          <MailIcon size={20} />
          {user?.email}
        </p>
        <p className={styles.row} dir="ltr">
          <Smartphone size={20} />
          {user?.phoneNumber}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            columnGap: '4px',
          }}
        >
          <LogoutBtn />

          <Link href="/">
            <Button variant="primary">صفحه اصلی</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
