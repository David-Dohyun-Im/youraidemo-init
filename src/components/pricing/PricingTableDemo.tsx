"use client"

import * as React from "react"
import { Button } from "../ui/pricing-table-button"
import { cn } from "../../lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export type PlanLevel = "starter" | "pro" | "all" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "monthly" | "yearly"
  containerClassName?: string
  buttonClassName?: string
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "pro",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "pt-4 pb-4 px-4",
        "fade-bottom overflow-hidden",
      )}
    >
      <div
        className={cn("w-full max-w-3xl mx-auto px-4", containerClassName)}
        {...props}
      >
        <div className="flex justify-end mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-3 py-1 rounded-md transition-colors ",
                !isYearly ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500",
              )}
              style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-3 py-1 rounded-md transition-colors ",
                isYearly ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500",
              )}
              style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => handlePlanSelect(plan.level)}
              className={cn(
                "flex-1 p-4 rounded-xl text-left transition-all cursor-default border-2 border-zinc-200 dark:border-zinc-800",
                selectedPlan === plan.level &&
                  "ring-2 ring-amber-600 dark:ring-amber-500",
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>{plan.name}</span>
                {plan.popular && (
                  <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-['Inter']">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold font-['Inter']">
                  $<NumberFlow value={isYearly ? plan.price.yearly : plan.price.monthly} />
                </span>
                <span className="text-sm font-normal text-zinc-500 font-['Inter']">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-zinc-200 dark:divide-zinc-800">
              <div className="flex items-center p-4 bg-zinc-50 dark:bg-zinc-900">
                <div className="flex-1 text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>Features</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className="w-16 text-center font-medium"
                      style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-4 transition-colors",
                    feature.included === selectedPlan &&
                      "bg-amber-50/50 dark:bg-amber-900/20",
                  )}
                >
                  <div className="flex-1 text-sm font-['Inter']">{feature.name}</div>
                  <div className="flex items-center gap-8 text-sm">
                    {plans.map((plan) => (
                      <div
                        key={plan.level}
                        className={cn(
                          "w-16 flex justify-center",
                          plan.level === selectedPlan && "font-medium",
                        )}
                      >
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className="w-5 h-5 text-amber-600" />
                        ) : (
                          <span className="text-zinc-300 dark:text-zinc-700 font-['Inter']">
                            -
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "pro" && (level === "pro" || level === "all")) return true
  if (
    included === "starter" &&
    (level === "starter" || level === "pro" || level === "all")
  )
    return true
  return false
}

const features = [
    { name: "AI Strategy Assessment", included: "starter" },
    { name: "Basic Implementation Plan", included: "starter" },
    { name: "Email Support", included: "starter" },
    { name: "Custom AI Solutions", included: "pro" },
    { name: "Process Automation Setup", included: "pro" },
    { name: "Priority Support", included: "pro" },
    { name: "Full AI Transformation", included: "all" },
    { name: "Dedicated AI Team", included: "all" },
    { name: "24/7 Expert Support", included: "all" },
];

const plans = [
    {
        name: "Consultation",
        price: { monthly: 299, yearly: 2990 },
        level: "starter",
    },
    {
        name: "Implementation",
        price: { monthly: 899, yearly: 8990 },
        level: "pro",
        popular: true,
    },
    {
        name: "Transformation",
        price: { monthly: 1999, yearly: 19990 },
        level: "all",
    },
];

function PricingTableDemo() {
    return (
        <PricingTable
            features={features}
            plans={plans}
            defaultPlan="pro"
            defaultInterval="monthly"
            onPlanSelect={(plan: PlanLevel) => console.log("Selected plan:", plan)}
            containerClassName="py-12"
            buttonClassName="bg-amber-600 hover:bg-amber-700 text-white"
        />
    );
}

export { PricingTableDemo }
