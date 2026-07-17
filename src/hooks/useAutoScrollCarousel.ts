import { useEffect } from "react";

/**
 * Custom hook to automatically scroll horizontal carousels smoothly.
 * Keeps cards centered via CSS scroll-snap and pauses during user interaction.
 */
export function useAutoScrollCarousel(
  ref: React.RefObject<HTMLElement | null>,
  intervalMs: number = 3600
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isPaused = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const pause = () => {
      isPaused = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };

    const resumeDelayed = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isPaused = false;
      }, 4000);
    };

    const resumeImmediate = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      isPaused = false;
    };

    // Attach passive touch and mouse listeners
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resumeDelayed, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resumeImmediate);

    const timer = setInterval(() => {
      if (isPaused || !el) return;

      // Only auto-scroll when the container is actually scrollable (e.g. mobile carousel mode)
      if (el.scrollWidth <= el.clientWidth + 12) return;

      const firstCard = el.firstElementChild as HTMLElement;
      if (!firstCard) return;

      const gap = parseInt(window.getComputedStyle(el).gap || "0", 10) || 16;
      const cardWidth = firstCard.offsetWidth + gap;

      // If we've scrolled near or past the last item, loop smoothly back to start
      if (el.scrollLeft + el.clientWidth + cardWidth * 0.4 >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, intervalMs);

    return () => {
      clearInterval(timer);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeDelayed);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resumeImmediate);
    };
  }, [ref, intervalMs]);
}
