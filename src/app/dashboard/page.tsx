import React from 'react';

import { Metadata } from 'next';

import CardInfo from '@/components/CardInfo';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'the best authentication',
};

export default async function DashboardPage() {
  return <CardInfo />;
}
