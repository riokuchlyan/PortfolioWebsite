'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface KeyboardNavigationOptions {
  key: string;
  href: string;
}

export function useKeyboardNavigation({ key, href }: KeyboardNavigationOptions) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        router.push(href);
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [key, href, router]);
}
