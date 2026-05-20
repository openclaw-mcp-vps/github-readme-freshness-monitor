export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Alert When Your{" "}
          <span className="text-[#58a6ff]">README Goes Stale</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repos, set staleness rules, and get instant email or Slack alerts whenever code changes make your README outdated. Keep docs fresh — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-white mb-1">GitHub OAuth</h3>
            <p className="text-sm text-[#8b949e]">Connect repos in seconds. Webhooks track every push automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Staleness Rules</h3>
            <p className="text-sm text-[#8b949e]">Define which file changes should trigger a README review alert.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Email & Slack</h3>
            <p className="text-sm text-[#8b949e]">Get notified where your team already works. No new tools to learn.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited repositories</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email & Slack notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom staleness rules</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> GitHub webhook integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 7-day free trial</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it detect a stale README?</h3>
            <p className="text-sm text-[#8b949e]">We listen to GitHub webhooks for every push. When files matching your staleness rules change — like source code, configs, or changelogs — we flag the README as potentially outdated and send you an alert.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which repos can I monitor?</h3>
            <p className="text-sm text-[#8b949e]">Any public or private GitHub repository you have access to. Connect via GitHub OAuth and select the repos you want to track — no manual webhook setup needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your dashboard. Your trial is free for 7 days and you won't be charged until it ends. No questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} README Freshness Monitor. Built for open source maintainers.
      </footer>
    </main>
  );
}
