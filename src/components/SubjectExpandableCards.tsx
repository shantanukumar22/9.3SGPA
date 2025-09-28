"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BookOpen, ExternalLink, Play, FileText, Globe } from "lucide-react";
import { getResourceType } from "@/lib/youtube-thumbnails";
import { YouTubeThumbnail } from "@/components/YouTubeThumbnail";

interface SubjectResource {
  name: string;
  url: string;
  type?: string;
}

interface Subject {
  name: string;
  code: string;
  resources: SubjectResource[];
}

export function SubjectExpandableCards({ subjects }: { subjects: Subject[] }) {
  const [active, setActive] = useState<(typeof subjects)[number] | boolean | null>(null);
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


  // Helper function to get resource icon
  const getResourceIcon = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return <Play className="w-4 h-4 text-red-500" />;
    } else if (url.includes('drive.google.com')) {
      return <FileText className="w-4 h-4 text-blue-500" />;
    } else {
      return <Globe className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full space-y-4 px-2 sm:px-0">
      {subjects.map((subject, index) => (
        <div key={`card-${subject.name}-${id}`} className="relative">
          <motion.div
            onClick={() => setActive(active === subject ? null : subject)}
            className="relative p-3 sm:p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer transition-colors duration-300 mb-3 sm:mb-4 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-700"
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
              <div className="flex items-center flex-1 min-w-0">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-white text-center md:text-left text-sm sm:text-base md:text-lg leading-tight">
                    {subject.name}
                  </h3>
                  <p className="text-gray-300 text-center md:text-left text-xs sm:text-sm md:text-base leading-relaxed">
                    {subject.code}
                  </p>
                </div>
              </div>
              <button className="px-3 py-1 text-xs sm:text-sm rounded-md font-medium bg-gray-700 hover:bg-gray-600 text-gray-200 mt-3 sm:mt-4 md:mt-0 transition-colors duration-300 whitespace-nowrap">
                {active === subject ? 'Hide Resources' : 'View Resources'}
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {active === subject && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 sm:p-6 mt-2">
                  <div className="mb-4">
                    <h3 className="font-bold text-white text-base sm:text-lg md:text-xl leading-tight mb-2">
                      {subject.name}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {subject.code}
                    </p>
                  </div>
                  
                  <div className="max-h-96 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:gray-600_gray-800]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-2">
                    {subject.resources.map((resource: SubjectResource, resourceIndex: number) => {
                      return (
                        <a
                          key={resourceIndex}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block bg-gray-900/50 hover:bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 transition-all duration-200 hover:border-gray-600"
                        >
                          <div className="aspect-video bg-gray-800 relative overflow-hidden">
                            <YouTubeThumbnail
                              url={resource.url}
                              alt={resource.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              lazy={true}
                            />
                            {/* Show play button for all content */}
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                            <div className="p-3">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center">
                                  {getResourceIcon(resource.url)}
                                <span className="ml-2 text-xs text-gray-400">
                                  {getResourceType(resource.url)}
                                </span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300 flex-shrink-0" />
                              </div>
                              <h4 className="text-sm font-medium text-white group-hover:text-gray-100 line-clamp-2 mb-1">
                                {resource.name}
                              </h4>
                              <p className="text-xs text-gray-400 line-clamp-1">
                                {resource.url}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
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
