'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Category } from '@/lib/mockData';

const categories: Array<{ category: Category; icon: string }> = [
  { category: 'pinned', icon: '📌' },
  { category: 'business', icon: '💼' },
  { category: 'fan', icon: '💌' },
  { category: 'harassment', icon: '⚠️' },
  { category: 'other', icon: '📦' },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-10">
      <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-around">
        {categories.map(({ category, icon }) => {
          const isActive = pathname.includes(`/category/${category}`);
          return (
            <Link
              key={category}
              href={`/category/${category}`}
              className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span className="text-2xl">{icon}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
