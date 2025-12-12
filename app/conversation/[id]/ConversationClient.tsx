'use client';

import { useState } from 'react';
import Link from 'next/link';
import MessageInput from '@/components/MessageInput';
import { usePinnedConversations } from '@/contexts/PinnedConversationsContext';
import type { Conversation, CategorySummary, Message } from '@/lib/mockData';

interface ConversationClientProps {
  initialConversation: Conversation;
  categoryInfo: CategorySummary | undefined;
}

export default function ConversationClient({ initialConversation, categoryInfo }: ConversationClientProps) {
  const [conversation, setConversation] = useState(initialConversation);
  const { togglePin, isPinned } = usePinnedConversations();

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes} min${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
  };

  const handleSendMessage = async (content: string) => {
    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: 'me',
      senderName: 'You',
      content,
      timestamp: new Date(),
      isFromUser: true,
    };

    // Update local state
    setConversation({
      ...conversation,
      messages: [...conversation.messages, newMessage],
    });

    // TODO: Send to backend API to sync with Instagram
    // await fetch('/api/messages', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     conversationId: conversation.id,
    //     content,
    //   }),
    // });

    console.log('Message sent (will sync to Instagram):', content);
  };

  const handleTogglePin = () => {
    togglePin(conversation.id);

    // TODO: Send to backend API to persist pin state
    // await fetch('/api/conversations/pin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     conversationId: conversation.id,
    //     isPinned: !isPinned(conversation.id),
    //   }),
    // });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              href={`/category/${conversation.category}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-xl">←</span>
            </Link>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {conversation.username.charAt(1).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-semibold text-gray-900 truncate">
                  {conversation.username}
                </h1>
                {categoryInfo && (
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <span>{categoryInfo.icon}</span>
                    <span>{categoryInfo.label}</span>
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handleTogglePin}
              className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all active:scale-95 ${
                isPinned(conversation.id)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              title={isPinned(conversation.id) ? 'Unpin' : 'Pin'}
            >
              {isPinned(conversation.id) ? '✓ Pinned' : 'Pin'}
            </button>
          </div>
        </div>
      </header>

      {/* Message Area */}
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-md mx-auto px-4 py-6 space-y-3">
          {conversation.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm ${
                  message.isFromUser
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-white text-gray-900 rounded-bl-md'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap break-words">
                  {message.content}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    message.isFromUser ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Message Input */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <MessageInput
            onSend={handleSendMessage}
            placeholder="Message..."
          />
        </div>
      </footer>
    </div>
  );
}
