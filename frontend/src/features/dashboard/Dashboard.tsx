export function Dashboard() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <h1 className="text-2xl font-bold">Financial Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <p className="text-xl font-semibold">$24,500.00</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Monthly Income</p>
            <p className="text-xl font-semibold">$5,230.00</p>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Expenses</h2>
            <p className="text-2xl font-bold text-red-500">$3,450.00</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Savings</h2>
            <p className="text-2xl font-bold text-green-500">$1,780.00</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Investments</h2>
            <p className="text-2xl font-bold text-blue-500">$8,900.00</p>
          </div>
        </div>
      </main>
    </div>
  );
}
