// Doclynq Hero Section JavaScript
// Handles animations, interactions, and user engagement features

class DoclynqHero {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeMockupAnimation();
    this.setupReferralSystem();
    this.setupScrollEffects();
    this.checkReturningUser();
  }

  setupEventListeners() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Mockup hover effects
    const mockup = document.getElementById("editorMockup");
    if (mockup) {
      mockup.addEventListener("mouseenter", () =>
        this.accelerateMockupAnimation()
      );
      mockup.addEventListener("mouseleave", () => this.resetMockupAnimation());
    }

    // Mobile touch events
    if ("ontouchstart" in window) {
      this.setupMobileOptimizations();
    }
  }

  initializeMockupAnimation() {
    const markdownContent = document.getElementById("markdownContent");
    if (!markdownContent) return;

    // Animation sequence for the mockup
    const animationSequence = [
      { action: "showCollaboration", duration: 3000 },
      { action: "showCleanup", duration: 4000 },
      { action: "showExport", duration: 3000 },
    ];

    let currentStep = 0;
    const runAnimation = () => {
      const step = animationSequence[currentStep];
      this.executeMockupStep(step.action);

      setTimeout(() => {
        currentStep = (currentStep + 1) % animationSequence.length;
        runAnimation();
      }, step.duration);
    };

    // Start animation after initial delay
    setTimeout(runAnimation, 2000);
  }

  executeMockupStep(action) {
    const markdownContent = document.getElementById("markdownContent");
    const lines = markdownContent.querySelectorAll(".line");

    switch (action) {
      case "showCollaboration":
        this.showCollaborationMode(lines);
        break;
      case "showCleanup":
        this.showCleanupMode(lines);
        break;
      case "showExport":
        this.showExportMode(lines);
        break;
    }
  }

  showCollaborationMode(lines) {
    // Show multiple cursors and collaborative editing
    lines.forEach((line, index) => {
      if (index % 3 === 0) {
        line.style.color = "#3498DB";
        line.style.fontWeight = "500";
      }
    });

    // Add collaboration indicators
    this.addCollaborationIndicators();
  }

  showCleanupMode(lines) {
    // Show AI cleanup in action
    lines.forEach((line, index) => {
      const errorElements = line.querySelectorAll(".error");
      const successElements = line.querySelectorAll(".success");

      if (errorElements.length > 0) {
        setTimeout(() => {
          errorElements.forEach((el) => {
            el.style.color = "#2ECC71";
            el.classList.remove("error");
            el.classList.add("success");
          });
        }, index * 200);
      }
    });
  }

  showExportMode(lines) {
    // Show export preparation
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = "0.7";
        line.style.transform = "scale(0.98)";
      }, index * 100);
    });

    // Reset after showing export effect
    setTimeout(() => {
      lines.forEach((line) => {
        line.style.opacity = "1";
        line.style.transform = "scale(1)";
      });
    }, 2000);
  }

  addCollaborationIndicators() {
    const cursors = document.querySelectorAll(".cursor-user");
    cursors.forEach((cursor) => {
      cursor.style.opacity = "1";
    });
  }

  accelerateMockupAnimation() {
    const mockup = document.getElementById("editorMockup");
    if (mockup) {
      mockup.style.animationDuration = "1.5s";
    }
  }

  resetMockupAnimation() {
    const mockup = document.getElementById("editorMockup");
    if (mockup) {
      mockup.style.animationDuration = "3s";
    }
  }

  setupReferralSystem() {
    // Show referral toast after 5 seconds
    setTimeout(() => {
      this.showReferralToast();
    }, 5000);

    // Check for referral progress in localStorage
    this.updateReferralStatus();
  }

  showReferralToast() {
    const toast = document.getElementById("referralToast");
    if (toast && !this.isToastDismissed()) {
      toast.style.display = "block";
      toast.style.animation = "slideIn 0.5s ease";
    }
  }

  isToastDismissed() {
    return localStorage.getItem("referralToastDismissed") === "true";
  }

  dismissToast() {
    const toast = document.getElementById("referralToast");
    if (toast) {
      toast.style.animation = "slideOut 0.3s ease";
      setTimeout(() => {
        toast.style.display = "none";
      }, 300);
    }
    localStorage.setItem("referralToastDismissed", "true");
  }

  updateReferralStatus() {
    const referralCount = this.getReferralCount();
    const referralStatus = document.getElementById("referralStatus");

    if (referralCount > 0 && referralStatus) {
      const progressFill = referralStatus.querySelector(".progress-fill");
      const referralText = referralStatus.querySelector(".referral-text");

      if (progressFill && referralText) {
        const progress = (referralCount / 3) * 100;
        progressFill.style.width = `${Math.min(progress, 100)}%`;

        const remaining = Math.max(0, 3 - referralCount);
        referralText.textContent = `You're ${remaining} friend${
          remaining !== 1 ? "s" : ""
        } away from a free AI power-up!`;

        referralStatus.style.display = "flex";
      }
    }
  }

  getReferralCount() {
    return parseInt(localStorage.getItem("referralCount") || "0");
  }

  checkReturningUser() {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      // Show personalized content for returning users
      this.showReturningUserContent();
    } else {
      localStorage.setItem("hasVisited", "true");
      localStorage.setItem("firstVisitDate", new Date().toISOString());
    }
  }

  showReturningUserContent() {
    // Personalize the experience for returning users
    const microcopy = document.querySelector(".hero-microcopy");
    if (microcopy) {
      const visitCount =
        parseInt(localStorage.getItem("visitCount") || "0") + 1;
      localStorage.setItem("visitCount", visitCount.toString());

      if (visitCount > 1) {
        microcopy.textContent = `Welcome back! ${visitCount} visits and counting—ready to create more magic?`;
      }
    }
  }

  setupScrollEffects() {
    // Parallax effect for background sparks
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const sparks = document.querySelectorAll(".spark");

      sparks.forEach((spark, index) => {
        const speed = 0.5 + index * 0.1;
        spark.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });

    // Sticky header effects
    window.addEventListener("scroll", () => {
      const header = document.getElementById("stickyHeader");
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = "rgba(26, 42, 68, 0.98)";
          header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
        } else {
          header.style.background = "rgba(26, 42, 68, 0.95)";
          header.style.boxShadow = "none";
        }
      }
    });
  }

  setupMobileOptimizations() {
    // Pause heavy animations on mobile
    const sparks = document.querySelectorAll(".spark");
    const cursors = document.querySelectorAll(".cursor-user");

    sparks.forEach((spark) => {
      spark.style.animation = "none";
    });

    cursors.forEach((cursor) => {
      cursor.style.animation = "none";
    });

    // Optimize touch interactions
    document.addEventListener("touchstart", () => {
      // Reduce motion on touch devices
      document.body.style.setProperty("--animation-duration", "0.1s");
    });
  }
}

// Global functions for button clicks
function startFree() {
  // Track conversion
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
    });
  }

  // Show signup modal or redirect
  console.log("Starting free trial...");
  alert("Redirecting to signup... (Demo mode)");
}

function openPlayground() {
  // Track playground usage
  if (typeof gtag !== "undefined") {
    gtag("event", "playground_click", {
      event_category: "engagement",
    });
  }

  // Open playground in new tab
  console.log("Opening playground...");
  alert("Opening playground... (Demo mode)");
}

function referNow() {
  // Track referral click
  if (typeof gtag !== "undefined") {
    gtag("event", "referral_click", {
      event_category: "engagement",
    });
  }

  // Show referral modal
  console.log("Opening referral modal...");
  alert("Referral system coming soon! (Demo mode)");
}

function dismissToast() {
  const hero = window.doclynqHero;
  if (hero) {
    hero.dismissToast();
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.doclynqHero = new DoclynqHero();
});

// Add CSS for slideOut animation
const style = document.createElement("style");
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimizations
if ("requestIdleCallback" in window) {
  requestIdleCallback(() => {
    // Preload critical resources
    const video = document.querySelector("video");
    if (video) {
      video.preload = "metadata";
    }
  });
}

// Service Worker registration for PWA capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
