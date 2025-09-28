"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ExternalLink, Play, FileText, BookOpen } from "lucide-react";
import { getYouTubeThumbnail, getFallbackThumbnail, getResourceType } from "@/lib/youtube-thumbnails";

export function ExpandableCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    // Allow background scrolling when modal is open
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm h-full w-full z-10 pointer-events-none"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] pointer-events-auto">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] h-auto max-h-[90vh] flex flex-col bg-black sm:rounded-3xl overflow-hidden border border-gray-800 cursor-pointer mx-2"
              onClick={() => window.location.href = active.ctaLink}
            >

              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start p-3 sm:p-4 gap-3">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white text-base sm:text-lg md:text-xl leading-tight"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.div
                    layoutId={`button-${active.title}-${id}`}
                    className="px-3 py-1 text-xs sm:text-sm rounded-md font-medium bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors duration-300 whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.div>
                </div>
                <div className="pt-2 sm:pt-4 relative px-3 sm:px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 text-xs sm:text-sm md:text-base pb-6 sm:pb-10 flex flex-col items-start gap-2 sm:gap-4 max-h-96 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:gray-600_gray-800]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 px-2 sm:px-0">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => window.location.href = card.ctaLink}
            className="relative p-3 sm:p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer transition-colors duration-300 mb-3 sm:mb-4 min-h-[80px] sm:min-h-[90px] md:min-h-[100px] w-full"
          >
            <GlowingEffect
              blur={0}
              inactiveZone={0.7}
              proximity={50}
              spread={20}
              variant="default"
              glow={false}
              movementDuration={2}
              borderWidth={1}
              disabled={false}
            />
            <div className="flex gap-3 sm:gap-4 flex-col md:flex-row w-full">
              <div className="flex-1">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left text-sm sm:text-base md:text-lg leading-tight"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-300 text-center md:text-left text-xs sm:text-sm md:text-base leading-relaxed"
                >
                  {card.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-3 py-1 text-xs sm:text-sm rounded-md font-medium bg-gray-700 hover:bg-gray-600 text-gray-200 mt-3 sm:mt-4 md:mt-0 transition-colors duration-300 whitespace-nowrap min-w-[120px] sm:min-w-[140px] flex-shrink-0"
              >
                {card.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Foundation subjects and core concepts",
    title: "Semester 1",
    ctaText: "Explore Subjects",
    ctaLink: "/semester-1",
    content: () => {
      return (
        <p>
          Semester 1 provides the essential foundation for your engineering journey with core subjects that build the groundwork for advanced learning. <br /> <br /> 
          Mathematics I covers fundamental calculus and algebra concepts, while Physics I introduces mechanics and thermodynamics principles. 
          Chemistry I explores organic and inorganic chemistry, and Programming Fundamentals teaches C/C++ programming skills. 
          English Communication Skills enhance your professional communication abilities, and Engineering Graphics develops your technical drawing skills. <br /> <br />
          These subjects work together to provide a comprehensive understanding of basic engineering principles, preparing you for more specialized topics in subsequent semesters.
        </p>
      );
    },
  },
  {
    description: "Advanced topics and specialized subjects",
    title: "Semester 2",
    ctaText: "Explore Subjects",
    ctaLink: "/semester-2",
    content: () => {
      return (
        <p>
          Semester 2 builds upon the foundation from Semester 1 with advanced subjects that deepen your engineering knowledge and introduce specialized concepts. <br /> <br />
          Mathematics II covers advanced calculus and linear algebra, while Physics II explores electromagnetism and optics. 
          Data Structures and Algorithms introduces computational thinking, and Digital Electronics covers logic design principles. 
          Mechanics of Solids examines material properties, and Environmental Science addresses sustainability in engineering. <br /> <br />
          These advanced subjects prepare you for your chosen engineering discipline and provide the specialized knowledge needed for professional practice.
        </p>
      );
    },
  },
  {
    description: "Beyond academics - clubs and activities",
    title: "Extracurricular",
    ctaText: "Explore Activities",
    ctaLink: "/extracurricular",
    content: () => {
      return (
        <p>
          Extracurricular activities play a crucial role in your overall development as an engineering student, providing opportunities for personal growth and skill development beyond the classroom. <br /> <br />
          Technical clubs offer hands-on experience with coding, robotics, and AI/ML projects. Cultural activities like music, dance, and drama help develop creativity and teamwork skills. 
          Sports and fitness activities promote physical health and team building. Leadership programs through student council and mentorship develop management and communication skills. 
          Entrepreneurship opportunities allow you to explore business concepts and innovation. Research and innovation projects provide experience with cutting-edge technology and academic publishing. <br /> <br />
          These activities help develop soft skills, leadership qualities, and provide valuable networking opportunities that complement your academic learning.
        </p>
      );
    },
  },
  {
    description: "Previous Year Questions and exam preparation",
    title: "PYQ",
    ctaText: "PYQ Materials",
    ctaLink: "https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/Ejeqs0tkIw9MohHeUriPeYgBOASAV_GovXb-37QxqV9KLQ?e=Zw3cjh",
    content: () => {
      return (
        <p>
          Previous Year Questions (PYQ) are essential resources for exam preparation and understanding the pattern of questions asked in previous examinations. <br /> <br />
          PYQ materials help you understand the exam format, question types, and difficulty levels. They provide insight into frequently asked topics and help identify important areas to focus on. 
          Practicing with PYQ improves time management skills and builds confidence for actual examinations. <br /> <br />
          Access comprehensive PYQ collections for all subjects, including detailed solutions and marking schemes to enhance your exam preparation strategy.
        </p>
      );
    },
  },
];
