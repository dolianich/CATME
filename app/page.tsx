'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push('/discover');
  }, [router]);

  return null;
}

export default Page;
