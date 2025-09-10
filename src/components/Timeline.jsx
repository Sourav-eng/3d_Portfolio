"use client";
import { useScroll, useTransform, useSpring, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Observe height dynamically
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Smooth scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  // Virtualization
  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 250, // height per timeline item
    overscan: 5, // render extra items above/below
  });

  return (
    <div ref={containerRef} className="relative c-space section-spacing">
      <h2 className="text-heading">My Journey</h2>

      <div ref={ref} className="relative pb-20">
        <div
          ref={parentRef}
          className="relative overflow-auto"
          style={{ height: "80vh" }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = data[virtualRow.index];
              return (
                <div
                  key={virtualRow.index}
                  ref={virtualRow.measureElement}
                  className="absolute w-full"
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  {/* Timeline Item */}
                  <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
                    <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                      <div className="h-10 absolute -left-[15px] w-10 rounded-full bg-midnight flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                      </div>
                      <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                        <h3>{item.date}</h3>
                        <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                        <h3 className="text-3xl text-neutral-500">{item.job}</h3>
                      </div>
                    </div>
                    <div className="relative pl-20 pr-4 md:pl-4 w-full">
                      <div className="md:hidden block text-2xl mb-4 text-left font-bold dark:text-neutral-500 text-neutral-300">
                        <h3>
                          {item.date} {item.title}
                        </h3>
                      </div>
                      {item.contents.map((content, idx) => (
                        <p className="mb-3 font-normal text-neutral-300" key={idx}>
                          {content}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              willChange: "height, opacity",
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
