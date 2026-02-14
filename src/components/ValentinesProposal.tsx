import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// Danh sách 36 ảnh kỷ niệm của hai bạn
const images = [
  "/game-photos/1.avif", "/game-photos/2.avif", "/game-photos/3.avif", "/game-photos/4.avif",
  "/game-photos/5.avif", "/game-photos/6.avif", "/game-photos/7.avif", "/game-photos/8.avif",
  "/game-photos/9.avif", "/game-photos/10.avif", "/game-photos/11.avif", "/game-photos/12.avif",
  "/game-photos/13.avif", "/game-photos/14.avif", "/game-photos/15.avif", "/game-photos/16.avif",
  "/game-photos/17.avif", "/game-photos/18.avif", "/game-photos/19.avif", "/game-photos/20.avif",
  "/game-photos/21.avif", "/game-photos/22.avif", "/game-photos/23.avif", "/game-photos/24.avif",
  "/game-photos/25.avif", "/game-photos/26.avif", "/game-photos/27.avif", "/game-photos/28.avif",
  "/game-photos/29.avif", "/game-photos/30.avif", "/game-photos/31.avif", "/game-photos/32.avif",
  "/game-photos/33.avif", "/game-photos/34.avif", "/game-photos/35.avif", "/game-photos/36.avif",
];

export default function ValentinesProposal() {
  // ĐỂ TEST: Đổi useState(0) thành useState(3) và false thành true. 
  // KHI GỬI QUÀ: Phải để lại là (0) và (false).
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{ top: string; left: string } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-pink-50">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold text-pink-600 text-center px-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Em bé giỏi thía! Chúc mừng em bé giải được mật mã.
          </motion.h2>
        )}

        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold text-pink-600 text-center px-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Anh có cái này dành cho em bé!
          </motion.h2>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center relative w-full h-full justify-center"
          >
            <div className="absolute inset-0 grid grid-cols-6 opacity-20">
              {images.map((src, index) => (
                <div key={index} className="relative h-full w-full">
                  <Image src={src} alt="Memory" fill className="object-cover" />
                </div>
              ))}
            </div>

            <h2 className={`text-4xl md:text-5xl font-semibold mb-8 text-pink-600 z-10 text-center px-4 ${playfairDisplay.className}`}>
              Em bé có mún i bóc với anh hong?
            </h2>
            
            <div className="z-10 bg-white/50 p-4 rounded-2xl backdrop-blur-sm mb-10">
                <Image src="/sad_hamster.png" alt="Sad Hamster" width={200} height={200} />
            </div>

            <div className="flex space-x-6 z-10">
              <button
                className="px-8 py-3 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:scale-110 transition-all shadow-xl"
                onClick={handleYesClick}
              >
                Dạ em thíc nhắmm 🥰
              </button>
              <button
                className="px-8 py-3 text-xl font-bold text-white bg-gray-400 rounded-full transition-all shadow-lg"
                style={position ? { position: "absolute", top: position.top, left: position.left } : {}}
                onMouseEnter={() => setPosition(getRandomPosition())}
                onClick={() => setPosition(getRandomPosition())}
              >
                Dạ hong 😢
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            className="relative z-50 text-center flex flex-col items-center justify-center px-4"
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-pink-600 mb-8 ${playfairDisplay.className}`}>
              Anh cũm thíc nhắm hẹ hẹ, lớp u moazz 💕
            </h2>
            
            <a  
              href="https://bcmisavalentines2026.vercel.app/"  
              target="_blank"  
              rel="noopener noreferrer"
              className="mt-4 mb-10 px-10 py-5 bg-pink-500 text-white text-2xl font-black rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] animate-bounce hover:bg-pink-600 transition-colors cursor-pointer relative z-50 pointer-events-auto"
            >
              Cho em bé nè! 💌
            </a>

            <div className="relative w-[250px] h-[250px]">
                <Image
                  src="/hamster_jumping.gif"
                  alt="Happy Hamster"
                  fill
                  className="object-contain"
                  unoptimized
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Fireworks
            options={{ autoresize: true, opacity: 0.5 }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
