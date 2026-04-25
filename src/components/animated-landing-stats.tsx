'use client'

import { useEffect, useRef, useState } from "react";

type TrendDirection = "up" | "down";
type MetricTone = "good" | "bad";

type MetricItem = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  direction?: TrendDirection;
  tone?: MetricTone;
};

type AnimatedLandingStatsProps = {
  className?: string;
  stats: MetricItem[];
};

const ANIMATION_DURATION_MS = 1300;

export default function AnimatedLandingStats({ className, stats }: AnimatedLandingStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || hasEnteredViewport) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        setHasEnteredViewport(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  useEffect(() => {
    if (!hasEnteredViewport) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frameId = window.requestAnimationFrame(() => setProgress(1));
      return () => window.cancelAnimationFrame(frameId);
    }

    let frameId = 0;
    let startTime: number | undefined;

    const tick = (timestamp: number) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

      setProgress(easedProgress);

      if (linearProgress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [hasEnteredViewport]);

  return (
    <div ref={containerRef} className={`stats${className ? ` ${className}` : ""}`}>
      {stats.map((stat) => (
        <div className="st" key={stat.label}>
          <div className={`n${stat.tone ? ` ${stat.tone}` : ""}`}>
            {stat.direction ? <span className="trend-arrow" aria-hidden="true">{stat.direction === "up" ? "↑" : "↓"}</span> : null}
            <span>{formatMetricValue(stat, progress)}</span>
          </div>
          <div className="l">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function formatMetricValue(stat: MetricItem, progress: number) {
  const currentValue = progress >= 1 ? stat.value : Math.round(stat.value * progress);

  return `${stat.prefix ?? ""}${currentValue.toLocaleString()}${stat.suffix ?? ""}`;
}
