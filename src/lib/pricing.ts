export const TIER_ORDER = ["starter", "growth", "enterprise"] as const;

export type TierKey = (typeof TIER_ORDER)[number];

type PlanFeatures = {
  includes?: string;
  features: string[];
};

export const TIER_LABELS: Record<TierKey, string> = {
  starter: "Starter",
  growth: "Growth",
  enterprise: "Enterprise",
};

export const TIER_PRICES: Record<TierKey, string> = {
  starter: "$499/mo",
  growth: "$1,499/mo",
  enterprise: "Custom",
};

export const PLAN_FEATURES: Record<TierKey, PlanFeatures> = {
  starter: {
    features: [
      "Scans every 24 hours",
      "1 fix per scan",
      "Up to 30 fixes per month",
      "Unlimited repositories",
    ],
  },
  growth: {
    includes: "Everything in Starter, plus:",
    features: [
      "Scans every 6 hours",
      "3 fixes per scan",
      "Up to 360 fixes per month",
      "Priority support",
    ],
  },
  enterprise: {
    includes: "Everything in Growth, plus:",
    features: [
      "Custom scan frequency",
      "Custom fixes per scan",
      "Unlimited fixes",
      "Dedicated support",
      "Custom SLAs",
    ],
  },
};
