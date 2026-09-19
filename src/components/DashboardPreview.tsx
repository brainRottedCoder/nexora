import {
  ArrowLeftRight,
  Bell,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CreditCard,
  GitBranch,
  Home,
  Landmark,
  ListTodo,
  MoreVertical,
  Plus,
  Search,
  Settings,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { label: "Home", icon: Home, active: true, badge: null, chevron: false },
  { label: "Tasks", icon: ListTodo, active: false, badge: "10", chevron: false },
  { label: "Transactions", icon: ArrowLeftRight, active: false, badge: null, chevron: false },
  { label: "Payments", icon: Wallet, active: false, badge: null, chevron: true },
  { label: "Cards", icon: CreditCard, active: false, badge: null, chevron: false },
  { label: "Capital", icon: Landmark, active: false, badge: null, chevron: false },
  { label: "Accounts", icon: Building2, active: false, badge: null, chevron: true },
] as const;

const WORKFLOW_ITEMS = [
  { label: "Trake rutes", icon: GitBranch },
  { label: "Payments", icon: Wallet },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
] as const;

const ACTIONS = [
  { label: "Send", accent: true },
  { label: "Request", accent: false },
  { label: "Transfer", accent: false },
  { label: "Deposit", accent: false },
  { label: "Pay Bill", accent: false },
  { label: "Create Invoice", accent: false },
] as const;

const ACCOUNTS = [
  { name: "Credit", amount: "$98,125.50" },
  { name: "Treasury", amount: "$6,750,200.00" },
  { name: "Operations", amount: "$1,592,864.82" },
] as const;

const TRANSACTIONS = [
  {
    date: "Mar 18",
    description: "AWS",
    amount: "-$5,200",
    status: "Pending",
    tone: "warning",
  },
  {
    date: "Mar 17",
    description: "Client Payment",
    amount: "+$125,000",
    status: "Completed",
    tone: "success",
  },
  {
    date: "Mar 16",
    description: "Payroll",
    amount: "-$85,450",
    status: "Completed",
    tone: "success",
  },
  {
    date: "Mar 14",
    description: "Office Supplies",
    amount: "-$1,200",
    status: "Completed",
    tone: "success",
  },
] as const;

export function DashboardPreview() {
  return (
    <div
      className="overflow-hidden rounded-2xl p-3 md:p-4"
      style={{
        background: "rgba(255, 255, 255, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "var(--shadow-dashboard)",
      }}
    >
      <div className="pointer-events-none select-none overflow-hidden rounded-xl bg-background text-[11px] font-body text-foreground">
        <TopBar />
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center gap-3 border-b border-border px-3 py-2">
      <div className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-primary-foreground">
          N
        </span>
        <span className="font-medium">Nexora</span>
        <ChevronDown className="h-3 w-3 text-muted-foreground" />
      </div>

      <div className="mx-auto flex h-7 w-full max-w-[240px] items-center gap-2 rounded-md border border-border bg-secondary px-2.5">
        <Search className="h-3 w-3 text-muted-foreground" />
        <span className="flex-1 text-muted-foreground">Search</span>
        <kbd className="rounded border border-border bg-background px-1 text-[9px] text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <span className="hidden rounded-md bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground sm:inline">
          Move Money
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border">
          <Bell className="h-3 w-3 text-muted-foreground" />
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[9px] font-semibold">
          JB
        </span>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-40 shrink-0 border-r border-border px-2 py-3 md:block">
      <nav className="flex flex-col gap-0.5">
        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground",
              item.active && "bg-secondary font-medium text-foreground",
            )}
          >
            <item.icon className="h-3.5 w-3.5 shrink-0" />
            <span className="flex-1 truncate">{item.label}</span>
            {item.badge ? (
              <span className="rounded-full bg-secondary px-1.5 text-[9px] font-medium text-foreground">
                {item.badge}
              </span>
            ) : null}
            {item.chevron ? (
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            ) : null}
          </div>
        ))}
      </nav>

      <p className="mb-1 mt-4 px-2 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
        Workflows
      </p>
      <nav className="flex flex-col gap-0.5">
        {WORKFLOW_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground"
          >
            <item.icon className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

function MainContent() {
  return (
    <div className="min-w-0 flex-1 bg-secondary/30 px-5 py-4">
      <h2 className="text-sm font-semibold text-foreground">Welcome, Jane</h2>

      <div className="mt-3 flex items-center gap-1.5 overflow-hidden">
        {ACTIONS.map((action) => (
          <span
            key={action.label}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium",
              action.accent
                ? "bg-accent text-accent-foreground"
                : "border border-border bg-background text-foreground",
            )}
          >
            {action.label}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-muted-foreground">
          Customize
        </span>
      </div>

      <div className="mt-4 flex gap-3">
        <BalanceCard />
        <AccountsCard />
      </div>

      <TransactionsTable />
    </div>
  );
}

function BalanceCard() {
  return (
    <div className="flex-1 basis-0 rounded-xl border border-border bg-background p-4">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <span>Mercury Balance</span>
        <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
      </div>
      <p className="mt-2 font-semibold tracking-tight">
        <span className="text-xl text-foreground">$8,450,190</span>
        <span className="text-xs text-muted-foreground">.32</span>
      </p>
      <div className="mt-2 flex items-center gap-3 text-[10px]">
        <span className="text-muted-foreground">Last 30 Days</span>
        <span className="font-medium text-success">+$1.8M</span>
        <span className="font-medium text-destructive">-$900K</span>
      </div>
      <BalanceChart />
    </div>
  );
}

function BalanceChart() {
  const line =
    "M0 58 C40 58 70 48 100 60 C130 72 140 50 180 36 C220 22 240 48 280 24 C310 8 340 32 400 14";
  const area = `${line} L400 80 L0 80 Z`;

  return (
    <svg
      viewBox="0 0 400 80"
      className="mt-3 h-20 w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="balanceAreaFill" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="hsl(var(--accent))"
            stopOpacity="0.15"
          />
          <stop
            offset="100%"
            stopColor="hsl(var(--accent))"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#balanceAreaFill)" />
      <path
        d={line}
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccountsCard() {
  return (
    <div className="flex-1 basis-0 rounded-xl border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground">Accounts</span>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Plus className="h-3.5 w-3.5" />
          <MoreVertical className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="mt-1">
        {ACCOUNTS.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between py-3 text-xs"
          >
            <span className="text-muted-foreground">{account.name}</span>
            <span className="font-medium tabular-nums text-foreground">
              {account.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransactionsTable() {
  return (
    <div className="mt-4">
      <h3 className="mb-2 font-medium text-foreground">Recent Transactions</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] text-muted-foreground">
            <th className="pb-2 font-medium">Date</th>
            <th className="pb-2 font-medium">Description</th>
            <th className="pb-2 font-medium">Amount</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {TRANSACTIONS.map((tx) => (
            <tr key={`${tx.date}-${tx.description}`} className="text-xs">
              <td className="py-1.5 text-muted-foreground">{tx.date}</td>
              <td className="py-1.5 text-foreground">{tx.description}</td>
              <td className="py-1.5 tabular-nums text-foreground">{tx.amount}</td>
              <td
                className={cn(
                  "py-1.5 font-medium",
                  tx.tone === "warning" ? "text-warning" : "text-success",
                )}
              >
                {tx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
