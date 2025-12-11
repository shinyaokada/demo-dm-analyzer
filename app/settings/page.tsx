import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            href="/category/pinned"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">←</span>
          </Link>
          <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span>⚙️</span>
            <span>Settings</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Account */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3 px-1">
            Account
          </h2>
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                Y
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">@your_account</p>
                <p className="text-sm text-green-600">Connected</p>
              </div>
              <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
                Disconnect
              </button>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3 px-1">
            Notifications
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Business notifications</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Notify for new business DMs
                </p>
              </div>
              <button className="relative w-14 h-8 bg-blue-500 rounded-full transition-colors">
                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform"></div>
              </button>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Fan mail notifications</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Notify for new fan mail
                </p>
              </div>
              <button className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors">
                <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform"></div>
              </button>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Harassment notifications</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Notify for harassment DMs
                </p>
              </div>
              <button className="relative w-14 h-8 bg-blue-500 rounded-full transition-colors">
                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Classification */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3 px-1">
            Classification
          </h2>
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-900">Custom rules</p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  Future
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Add custom classification rules
              </p>
            </div>
          </div>
        </section>

        {/* Other */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3 px-1">
            Other
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-medium text-gray-900">Privacy Policy</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-medium text-gray-900">Terms of Service</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-medium text-gray-900">Help</span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </section>

        {/* Logout */}
        <div className="pt-4">
          <button className="w-full bg-white border border-red-200 text-red-600 font-medium py-3 rounded-lg hover:bg-red-50 transition-colors">
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
