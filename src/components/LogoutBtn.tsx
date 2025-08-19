'use client';

import { useUser } from '@/context/UserProvider';
import { useRouter } from 'nextjs-toploader/app';

import React from 'react';
import Button from './Button';

export default function LogoutBtn() {
  const { removeUser } = useUser();
  const router = useRouter();
  return (
    <Button
      variant="secondary"
      onClick={() => {
        removeUser();
        router.push('/auth');
      }}
    >
      خروج
    </Button>
  );
}
