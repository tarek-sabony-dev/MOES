"use client"
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";

const DEFAULT_ITEMS = [
  {
    title: "Text Anitions ", 
    description: "Cool text animations for your projects.",
    id: 1,
    image: "images.png",
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    image: "images.png",
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    image: "images.png",
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    image: "images.png",
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    image: "images.png",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 280,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 0;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div className="rounded-[24px] border-2 p-2 border-[#FFFFFF]">
      <div
        ref={containerRef}
        className={`relative overflow-hidden p-0 ${round
          ? "rounded-full border border-white"
          : "rounded-none border-none border-[#222]"
          }`}
        style={{
          width: `${baseWidth}px`,
          ...(round && { height: `${baseWidth}px` }), 
        }}
      >
        <motion.div
          className="flex"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => {
            const range = [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ];
            const outputRange = [90, 0, -90];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(x, range, outputRange, { clamp: false });
            return (
              <motion.div
                key={index}
                className={`relative shrink-0 flex flex-col items-center p-2 pb-12 ${round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between bg-[#222] border-[2px] border-[#FFFFFF] rounded-[12px]"
                  } overflow-hidden cursor-grab active:cursor-grabbing`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : "350px", // it should be 100% but not working
                  rotateY: rotateY,
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                <div className={`${round ? "p-0 m-0" : "mb-4 p-0 w-full"}`}>
                    <img 
                      src={item.image}
                      draggable={false}
                      alt=""
                      className="h-[210px] w-full rounded-lg"
                    />
                </div>
                <div className="p-0">
                  <h1 className="mb-1 font-black text-center text-lg text-white">
                    {item.title}
                  </h1>
                  <h2 className="text-sm text-white">{item.description}</h2>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div
          className={`absolute bg-transparent z-20 bottom-5 flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
            }`}
        >
          <div className="mt-4 flex w-[180px] justify-between px-8">
            {items.map((_, index) => (
              <motion.div
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#0D4574]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[#D9D9D9]"
                  }`}
                animate={{
                  scale: currentIndex % items.length === index ? 1.2 : 1,
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}