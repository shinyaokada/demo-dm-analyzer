export type Category = 'pinned' | 'business' | 'fan' | 'harassment' | 'other';

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
  isPinned: boolean;
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
    lastMessage: 'About our new product PR project',
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2時間前
    isUnread: true,
    isPinned: false,
    messages: [
      {
        id: 'm1',
        senderId: 'user1',
        senderName: '@brand_cosmetics',
        content: 'Hello! We would like to discuss a PR project for our new product.',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        isFromUser: false,
      },
      {
        id: 'm2',
        senderId: 'me',
        senderName: 'You',
        content: 'Thank you. Please share more details.',
        timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
        isFromUser: true,
      },
      {
        id: 'm3',
        senderId: 'user1',
        senderName: '@brand_cosmetics',
        content: 'About our new product PR project',
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
    lastMessage: 'Advertising campaign proposal. Budget is...',
    lastMessageTime: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5時間前
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'm4',
        senderId: 'user2',
        senderName: '@company_pr',
        content: 'We would like to propose an advertising campaign. The budget is 500,000 yen.',
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
    lastMessage: 'Speaking invitation for our event',
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1日前
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'm5',
        senderId: 'user3',
        senderName: '@event_organizer',
        content: 'Would you be able to speak at our event next month?',
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
    lastMessage: 'Always supporting you!',
    lastMessageTime: new Date(Date.now() - 10 * 60 * 60 * 1000),
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'm6',
        senderId: 'fan1',
        senderName: '@fan_happy',
        content: 'Always supporting you!',
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
    lastMessage: "Saw your post! It's wonderful",
    lastMessageTime: new Date(Date.now() - 12 * 60 * 60 * 1000),
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'm7',
        senderId: 'fan2',
        senderName: '@fan_grateful',
        content: "Saw your post! It's wonderful",
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
    lastMessage: `I am a fan! Supporting you ${i + 1}`,
    lastMessageTime: new Date(Date.now() - (i + 13) * 60 * 60 * 1000),
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: `mfan${i}`,
        senderId: `fan${i + 3}`,
        senderName: `@fan_user${i + 3}`,
        content: `I am a fan! Supporting you ${i + 1}`,
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
    category: 'harassment',
    lastMessage: 'I need to check something about your recent post',
    lastMessageTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
    isUnread: true,
    isPinned: false,
    messages: [
      {
        id: 'mc1',
        senderId: 'complaint_user1',
        senderName: '@unhappy_customer',
        content: 'I need to check something about your recent post',
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
    lastMessage: 'I have a question',
    lastMessageTime: new Date(Date.now() - 15 * 60 * 60 * 1000),
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'mo1',
        senderId: 'other_user1',
        senderName: '@random_person',
        content: 'I have a question',
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
    lastMessage: 'Hello',
    lastMessageTime: new Date(Date.now() - 20 * 60 * 60 * 1000),
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'mo2',
        senderId: 'other_user2',
        senderName: '@curious_follower',
        content: 'Hello',
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
    lastMessage: 'Thanks for following',
    lastMessageTime: new Date(Date.now() - 25 * 60 * 60 * 1000),
    isUnread: false,
    isPinned: false,
    messages: [
      {
        id: 'mo3',
        senderId: 'other_user3',
        senderName: '@someone_else',
        content: 'Thanks for following',
        timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000),
        isFromUser: false,
      },
    ],
  },
];

export const getCategorySummary = (): CategorySummary[] => {
  const summary: CategorySummary[] = [
    {
      category: 'pinned',
      label: 'Pinned',
      icon: '⭐',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'business',
      label: 'Business',
      icon: '📩',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'fan',
      label: 'Fan Mail',
      icon: '💌',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'harassment',
      label: 'Harassment',
      icon: '⚠️',
      count: 0,
      unreadCount: 0,
    },
    {
      category: 'other',
      label: 'Others',
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
