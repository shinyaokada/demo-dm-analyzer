'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PinnedConversationsContextType {
  pinnedIds: Set<string>;
  togglePin: (conversationId: string) => void;
  isPinned: (conversationId: string) => boolean;
}

const PinnedConversationsContext = createContext<PinnedConversationsContextType | undefined>(undefined);

export function PinnedConversationsProvider({ children }: { children: ReactNode }) {
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set());

  const togglePin = (conversationId: string) => {
    setPinnedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(conversationId)) {
        newSet.delete(conversationId);
        console.log(`Conversation unpinned: ${conversationId}`);
      } else {
        newSet.add(conversationId);
        console.log(`Conversation pinned: ${conversationId}`);
      }
      return newSet;
    });
  };

  const isPinned = (conversationId: string) => {
    return pinnedIds.has(conversationId);
  };

  return (
    <PinnedConversationsContext.Provider value={{ pinnedIds, togglePin, isPinned }}>
      {children}
    </PinnedConversationsContext.Provider>
  );
}

export function usePinnedConversations() {
  const context = useContext(PinnedConversationsContext);
  if (context === undefined) {
    throw new Error('usePinnedConversations must be used within a PinnedConversationsProvider');
  }
  return context;
}
