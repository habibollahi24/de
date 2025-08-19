'use client';

import { useEffect } from 'react';
import { useRouter } from 'nextjs-toploader/app';

import { useUser } from '@/context/UserProvider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useUser();
  const router = useRouter();

  console.log(user);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(#eeee , .3)',
          backdropFilter: ' blur(10px)',
          left: 0,
          top: 0,
          zIndex: 50,
        }}
      ></div>
    );
  }

  return <>{children}</>;
}
