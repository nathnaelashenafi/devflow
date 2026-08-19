import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function dashboardEntrance(container) {
  const context = gsap.context(() => {
    const statsCards = gsap.utils.toArray(".stats-card");
    const progressSection = container.querySelector(".progress-bar");
    const progressBars = gsap.utils.toArray(".progress-fill");
    const goalsSection = container.querySelector(".goals-section");
    const projectsSection = container.querySelector(".projects-section");
    const projectGrid = container.querySelector(".projects-grid");
    const projectCards = gsap.utils.toArray(".project-card");

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline.from(".dashboard-header", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });

    if (statsCards.length) {
      timeline.from(
        statsCards,
        {
          opacity: 0,
          y: 35,
          scale: 0.95,
          duration: 0.65,
          stagger: 0.15,
          clearProps: "all",
        },
        "-=0.4",
      );
    }

    timeline.from(
      ".dashboard-main-grid",
      {
        opacity: 0,
        y: 35,
        duration: 0.7,
      },
      "-=0.3",
    );

    if (goalsSection) {
      timeline.from(
        goalsSection,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        "-=0.4",
      );
    }

    if (projectsSection) {
      timeline.from(
        projectsSection,
        {
          opacity: 0,
          y: 35,
          duration: 0.7,
        },
        "-=0.3",
      );
    }

    if (progressSection && progressBars.length) {
      const progressTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: progressSection,
          start: "top 75%",
          once: true,
        },
      });

      progressTimeline.from(progressSection, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
      });

      progressTimeline.from(
        progressBars,
        {
          width: "0%",
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2",
      );
    }

    if (projectGrid && projectCards.length) {
      gsap.from(projectCards, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectGrid,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, container);

  return context;
}
