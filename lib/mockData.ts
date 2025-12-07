export type Category = 'business' | 'fan' | 'complaint' | 'other';

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  isFromUser: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  username: string;
  avatarUrl: string;
  category: Category;
  lastMessage: string;
  lastMessageTime: Date;
  isUnread: boolean;
  messages: Message[];
}

export interface CategorySummary {
  category: Category;
  label: string;
  icon: string;
  count: number;
  unreadCount: number;
}

export const mockConversations: Conversation[] = [
  // 案件依頼
  {
    id: '1',
    userId: 'user1',
    username: '@brand_cosmetics',
    avatarUrl: '/avatars/brand1.jpg',
    category: 'business',
    lastMessage: '新商品のPR案件についてご相談させてください',
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2時間前
    isUnread: true,
    messages: [
      {
        id: 'm1',
        senderId: 'user1',
        senderName: '@brand_cosmetics',
        content: 'こんにちは！弊社の新商品PR案件についてご相談させていただきたいです。',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        isFromUser: false,
      },
      {
        id: 'm2',
        senderId: 'me',
        senderName: 'あなた',
        content: 'ありがとうございます。詳細を教えてください。',
        timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
        isFromUser: true,
      },
      {
        id: 'm3',
        senderId: 'user1',
        senderName: '@brand_cosmetics',
        content: '新商品のPR案件についてご相談させてください',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
  {
    id: '2',
    userId: 'user2',
    username: '@company_pr',
    avatarUrl: '/avatars/company1.jpg',
    category: 'business',
    lastMessage: '広告案件のご提案です。報酬は...',
    lastMessageTime: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5時間前
    isUnread: false,
    messages: [
      {
        id: 'm4',
        senderId: 'user2',
        senderName: '@company_pr',
        content: '広告案件のご提案です。報酬は50万円を予定しております。',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
  {
    id: '3',
    userId: 'user3',
    username: '@event_organizer',
    avatarUrl: '/avatars/event1.jpg',
    category: 'business',
    lastMessage: 'イベント登壇のお願い',
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1日前
    isUnread: false,
    messages: [
      {
        id: 'm5',
        senderId: 'user3',
        senderName: '@event_organizer',
        content: '来月のイベントに登壇いただけないでしょうか？',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },

  // ファンレター
  {
    id: '4',
    userId: 'fan1',
    username: '@fan_happy',
    avatarUrl: '/avatars/fan1.jpg',
    category: 'fan',
    lastMessage: 'いつも応援してます！',
    lastMessageTime: new Date(Date.now() - 10 * 60 * 60 * 1000),
    isUnread: false,
    messages: [
      {
        id: 'm6',
        senderId: 'fan1',
        senderName: '@fan_happy',
        content: 'いつも応援してます！',
        timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
  {
    id: '5',
    userId: 'fan2',
    username: '@fan_grateful',
    avatarUrl: '/avatars/fan2.jpg',
    category: 'fan',
    lastMessage: '投稿見ました！素敵です',
    lastMessageTime: new Date(Date.now() - 12 * 60 * 60 * 1000),
    isUnread: false,
    messages: [
      {
        id: 'm7',
        senderId: 'fan2',
        senderName: '@fan_grateful',
        content: '投稿見ました！素敵です',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
  // 他のファンレター（省略形）
  ...Array.from({ length: 31 }, (_, i) => ({
    id: `fan${i + 6}`,
    userId: `fan${i + 3}`,
    username: `@fan_user${i + 3}`,
    avatarUrl: '/avatars/default.jpg',
    category: 'fan' as Category,
    lastMessage: `ファンです！応援してます ${i + 1}`,
    lastMessageTime: new Date(Date.now() - (i + 13) * 60 * 60 * 1000),
    isUnread: false,
    messages: [
      {
        id: `mfan${i}`,
        senderId: `fan${i + 3}`,
        senderName: `@fan_user${i + 3}`,
        content: `ファンです！応援してます ${i + 1}`,
        timestamp: new Date(Date.now() - (i + 13) * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  })),

  // クレーム
  {
    id: 'complaint1',
    userId: 'complaint_user1',
    username: '@unhappy_customer',
    avatarUrl: '/avatars/complaint1.jpg',
    category: 'complaint',
    lastMessage: '先日の投稿について確認したいことがあります',
    lastMessageTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
    isUnread: true,
    messages: [
      {
        id: 'mc1',
        senderId: 'complaint_user1',
        senderName: '@unhappy_customer',
        content: '先日の投稿について確認したいことがあります',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },

  // その他
  {
    id: 'other1',
    userId: 'other_user1',
    username: '@random_person',
    avatarUrl: '/avatars/other1.jpg',
    category: 'other',
    lastMessage: '質問があります',
    lastMessageTime: new Date(Date.now() - 15 * 60 * 60 * 1000),
    isUnread: false,
    messages: [
      {
        id: 'mo1',
        senderId: 'other_user1',
        senderName: '@random_person',
        content: '質問があります',
        timestamp: new Date(Date.now() - 15 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
  {
    id: 'other2',
    userId: 'other_user2',
    username: '@curious_follower',
    avatarUrl: '/avatars/other2.jpg',
    category: 'other',
    lastMessage: 'こんにちは',
    lastMessageTime: new Date(Date.now() - 20 * 60 * 60 * 1000),
    isUnread: false,
    messages: [
      {
        id: 'mo2',
        senderId: 'other_user2',
        senderName: '@curious_follower',
        content: 'こんにちは',
        timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
  {
    id: 'other3',
    userId: 'other_user3',
    username: '@someone_else',
    avatarUrl: '/avatars/other3.jpg',
    category: 'other',
    lastMessage: 'フォローありがとうございます',
    lastMessageTime: new Date(Date.now() - 25 * 60 * 60 * 1000),
    isUnread: false,
    messages: [
      {
        id: 'mo3',
        senderId: 'other_user3',
        senderName: '@someone_else',
        content: 'フォローありがとうございます',
        timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
];

export const getCategorySummary = (): CategorySummary[] => {
  const summary: CategorySummary[] = [
    {
      category: 'business',
      label: '案件依頼',
      icon: '📩',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'fan',
      label: 'ファンレター',
      icon: '💌',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'complaint',
      label: 'クレーム',
      icon: '⚠️',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'other',
      label: 'その他',
      icon: '📋',
      count: 0,
      unreadCount: 0,
    },
  ];

  mockConversations.forEach((conv) => {
    const categorySummary = summary.find((s) => s.category === conv.category);
    if (categorySummary) {
      categorySummary.count++;
      if (conv.isUnread) {
        categorySummary.unreadCount++;
      }
    }
  });

  return summary;
};

export const getConversationsByCategory = (category: Category): Conversation[] => {
  return mockConversations
    .filter((conv) => conv.category === category)
    .sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime());
};

export const getConversationById = (id: string): Conversation | undefined => {
  return mockConversations.find((conv) => conv.id === id);
};
