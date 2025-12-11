import { getConversationById, getCategorySummary } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import ConversationClient from './ConversationClient';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ConversationPage({ params }: Props) {
  const { id } = await params;
  const conversation = getConversationById(id);

  if (!conversation) {
    notFound();
  }

  const categoryInfo = getCategorySummary().find((c) => c.category === conversation.category);

  return (
    <ConversationClient
      initialConversation={conversation}
      categoryInfo={categoryInfo}
    />
  );
}
