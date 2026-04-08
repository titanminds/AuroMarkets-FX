const OpenAccountSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Open your trading account in 4 simple steps
        </h2>
        <p className="text-slate-500 max-w-3xl mb-10 leading-8">
          Start trading forex, crypto, and stocks with MyBGFx using a clear and easy process.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold mb-3">1. Open an account</h3>
            <p className="text-slate-600 leading-7">
              Register with your details, verify your identity, and get your account ready to deposit.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold mb-3">2. Fund your wallet</h3>
            <p className="text-slate-600 leading-7">
              Add funds using local payment methods and prepare your trading balance.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold mb-3">3. Choose a market</h3>
            <p className="text-slate-600 leading-7">
              Pick forex, crypto, or stock markets, then review price charts and market overview.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold mb-3">4. Place your trade</h3>
            <p className="text-slate-600 leading-7">
              Enter order details, confirm the trade, and watch your position live on the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenAccountSection
