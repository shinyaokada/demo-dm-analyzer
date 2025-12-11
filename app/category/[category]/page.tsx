import { mockConversations, getCategorySummary, type Category } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import CategoryClient from './CategoryClient';

interface Props {
  params: Promise<{
    category: Category;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  // カテゴリが有効かチェック
  const validCategories: Category[] = ['pinned', 'business', 'fan', 'harassment', 'other'];
  if (!validCategories.includes(category)) {
    notFound();
  }

  const categoryInfo = getCategorySummary().find((c) => c.category === category);

  if (!categoryInfo) {
    notFound();
  }

  return (
    <CategoryClient
      category={category}
      allConversations={mockConversations}
      categoryInfo={categoryInfo}
    />
  );
}
