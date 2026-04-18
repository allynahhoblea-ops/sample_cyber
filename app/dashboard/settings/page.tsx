import { Button } from "@/components/ui/button";
import { User, Bell, Shield, Palette, CreditCard, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sidebar navigation */}
        <div className="space-y-2 lg:col-span-1">
          {[
            { icon: User, label: "Profile", active: true },
            { icon: Bell, label: "Notifications", active: false },
            { icon: Shield, label: "Security", active: false },
            { icon: Palette, label: "Appearance", active: false },
            { icon: CreditCard, label: "Billing", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Profile section */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-6 text-lg font-semibold text-foreground">
              Profile Information
            </h2>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-2xl font-bold text-primary">
                JD
              </div>
              <div>
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Bio
                </label>
                <textarea
                  rows={3}
                  defaultValue="Aspiring cybersecurity professional focused on building a career in security operations."
                  className="w-full rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="glow-primary">Save Changes</Button>
            </div>
          </div>

          {/* Learning preferences */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-6 text-lg font-semibold text-foreground">
              Learning Preferences
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Daily Learning Goal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Set your daily study target
                  </p>
                </div>
                <select aria-label="Daily Learning Goal" className="rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3+ hours</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Email Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your progress
                  </p>
                </div>
                <button
                  className="relative h-6 w-11 rounded-full bg-primary transition-colors"
                  aria-pressed="true"
                >
                  <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-primary-foreground transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Learning Reminders
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Get reminded to continue learning
                  </p>
                </div>
                <button
                  className="relative h-6 w-11 rounded-full bg-primary transition-colors"
                  aria-pressed="true"
                >
                  <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-primary-foreground transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Danger zone */}
          <div className="rounded-xl border border-destructive/30 bg-card p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Danger Zone
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Irreversible actions for your account.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="text-muted-foreground">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
              <Button
                variant="outline"
                className="border-destructive/50 text-destructive hover:bg-destructive/10"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
