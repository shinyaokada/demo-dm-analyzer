'use client';

import { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

export default function MessageInput({ onSend, placeholder = 'Type a message...' }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 p-3 bg-white border-t border-gray-200">
      <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500"
        />
      </div>
      <button
        type="submit"
        disabled={!message.trim()}
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
          message.trim()
            ? 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-90"
        >
          <path
            d="M2 10L18 2L10 18L9 11L2 10Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
