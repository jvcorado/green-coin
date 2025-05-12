"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Logo from "./Logo";

const Hero = () => {
  // Primeiro card - motion values
  const mouseX1 = useMotionValue(0);
  const mouseY1 = useMotionValue(0);
  const cardRef1 = useRef<HTMLDivElement>(null);

  // Segundo card - motion values
  const mouseX2 = useMotionValue(0);
  const mouseY2 = useMotionValue(0);
  const cardRef2 = useRef<HTMLDivElement>(null);

  const mouseX3 = useMotionValue(0);
  const mouseY3 = useMotionValue(0);
  const cardRef3 = useRef<HTMLDivElement>(null);

  const mouseX4 = useMotionValue(0);
  const mouseY4 = useMotionValue(0);
  const cardRef4 = useRef<HTMLDivElement>(null);

  // Animations for first card
  const rotateX1 = useSpring(useTransform(mouseY1, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY1 = useSpring(useTransform(mouseX1, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 20,
  });

  // Animations for second card
  const rotateX2 = useSpring(useTransform(mouseY2, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY2 = useSpring(useTransform(mouseX2, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 20,
  });

  const rotateX3 = useSpring(useTransform(mouseY3, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY3 = useSpring(useTransform(mouseX3, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 20,
  });

  const rotateX4 = useSpring(useTransform(mouseY4, [-0.5, 0.5], [15, -15]), {
    stiffness: 400,
    damping: 20,
  });
  const rotateY4 = useSpring(useTransform(mouseX4, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
    mouseX: any,
    mouseY: any,
    cardRef: React.RefObject<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = (mouseX: any, mouseY: any) => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="w-full h-[80vh] pt-20 flex items-center overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full justify-between">
        <div className="flex flex-col items-center justify-center bg-[#F7F7F7] flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="font-semibold text-xl md:text-2xl">
                <span className="text-[#22c55e]">X</span>
                <span className="text-neutral-700">MOEDAS</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl !leading-[80px] font-bold tracking-tight text-[#303030]">
              Certified Digital <br /> Currency for <br /> Environmental Impact
            </h1>
            <p className="mt-6 text-lg md:text-xl !leading-10 text-[#2D893B] font-medium">
              Transforming recycling into traceable, certified, and <br />
              monetizable environmental value.
            </p>
          </motion.div>
        </div>

        <div className="h-full flex-1 flex items-center justify-center relative perspective-1000 bg-[#EBEBEB]">
          {/* Primeiro Card */}
          <motion.div
            ref={cardRef1}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
              handleMouseMove(e, mouseX1, mouseY1, cardRef1)
            }
            onMouseLeave={() => handleMouseLeave(mouseX1, mouseY1)}
            style={{
              rotateX: rotateX1,
              rotateY: rotateY1,
              transformStyle: "preserve-3d",
            }}
            className="absolute left-0 -bottom-5 transition-transform duration-200 ease-out bg-red-500 rounded-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-48 h-48 md:w-96 md:h-96 z-50 relative"
              style={{ transform: "translateZ(40px)" }}
            >
              {/*  <img
                src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg"
                alt="Primary GreenCoin"
                className="w-full h-full object-contain drop-shadow-2xl rounded-full"
              /> */}
            </motion.div>
          </motion.div>

          {/* Segundo Card */}
          <motion.div
            ref={cardRef2}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
              handleMouseMove(e, mouseX2, mouseY2, cardRef2)
            }
            onMouseLeave={() => handleMouseLeave(mouseX2, mouseY2)}
            style={{
              rotateX: rotateX2,
              rotateY: rotateY2,
              transformStyle: "preserve-3d",
            }}
            className="absolute right-0 top-0 transition-transform duration-200 ease-out bg-blue-400 rounded-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-48 h-48 md:w-96 md:h-96 z-50 relative"
              style={{ transform: "translateZ(40px)" }}
            >
              {/*  <img
                src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
                alt="Gold GreenCoin"
                className="w-full h-full object-contain drop-shadow-2xl rounded-full"
              /> */}
            </motion.div>
          </motion.div>

          {/* Terceiro Card */}
          <motion.div
            ref={cardRef3}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
              handleMouseMove(e, mouseX3, mouseY3, cardRef3)
            }
            onMouseLeave={() => handleMouseLeave(mouseX3, mouseY3)}
            style={{
              rotateX: rotateX3,
              rotateY: rotateY3,
              transformStyle: "preserve-3d",
            }}
            className="absolute left-28 top-10 transition-transform duration-200 ease-out bg-green-500 rounded-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-48 h-48 md:w-64 md:h-64 z-10 relative"
              style={{ transform: "translateZ(40px)" }}
            >
              {/*  <img
                src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
                alt="Gold GreenCoin"
                className="w-full h-full object-contain drop-shadow-2xl rounded-full"
              /> */}
            </motion.div>
          </motion.div>

          {/* Quarto Card */}
          <motion.div
            ref={cardRef4}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
              handleMouseMove(e, mouseX4, mouseY4, cardRef4)
            }
            onMouseLeave={() => handleMouseLeave(mouseX4, mouseY4)}
            style={{
              rotateX: rotateX4,
              rotateY: rotateY4,
              transformStyle: "preserve-3d",
            }}
            className="absolute right-28 bottom-10 transition-transform duration-200 ease-out bg-yellow-300 rounded-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-48 h-48 md:w-64 md:h-64 z-10 relative"
              style={{ transform: "translateZ(40px)" }}
            >
              {/*  <img
                src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
                alt="Gold GreenCoin"
                className="w-full h-full object-contain drop-shadow-2xl rounded-full"
              /> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#22c55e]/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#eab308]/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[#22c55e]/30 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
