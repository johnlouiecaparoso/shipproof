export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              Shipproof
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Prove Your Skills, Not Just List Them
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
            Connect your GitHub, add your live apps, and generate verified briefs that prove you meet job requirements. No more guessing for recruiters.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Free
            </button>
            <button className="px-8 py-3 text-lg font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              View Demo
            </button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Verified Evidence
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Every claim is backed by real code signals: tests, CI status, TypeScript strict mode, and more.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Live App Monitoring
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Add your deployed URLs and we'll track uptime, response times, and security headers.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Smart Briefs
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Paste any job post and we'll match requirements to your verified skills automatically.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                1
              </div>
              <p className="text-slate-600 dark:text-slate-400">Connect GitHub</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                2
              </div>
              <p className="text-slate-600 dark:text-slate-400">Import Projects</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                3
              </div>
              <p className="text-slate-600 dark:text-slate-400">Add Live Apps</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                4
              </div>
              <p className="text-slate-600 dark:text-slate-400">Generate Briefs</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 Shipproof. Built with Next.js, NestJS, and Prisma.</p>
        </div>
      </footer>
    </div>
  );
}
