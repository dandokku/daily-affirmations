"use client";

interface HistoryListProps {
  history: string[];
}

export default function HistoryList({ history }: HistoryListProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-gray-800 dark:text-gray-100 mb-2">
            Your Journey
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Affirmations that have inspired you
          </p>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              No affirmations yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Start your journey by viewing today&apos;s affirmation and building your collection of positive thoughts.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {history.map((affirmation, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed flex-1">
                    {affirmation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}