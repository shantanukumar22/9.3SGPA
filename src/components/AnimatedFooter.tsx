"use client"
import RotatingText from './RotatingText';

export default function AnimatedFooter() {
  const rotatingNames = [
    "Aditya Raghav ",
    "Rudra Sahu",
    "Gaurish  Rana",
    "Ridhi Garg",
    "Jaya Dash", 
    "Vinayak Pradhan",
    "Inesh Raj Panda",
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-4 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-gray-400 mb-3 flex items-center justify-center flex-wrap gap-1">
          <span>Made with ❤️ by</span>
          <span className="text-gray-300 font-semibold">Shantanu Kumar</span>
          <span>and</span>
          <div className="inline-block w-32 text-left">
            <RotatingText
              texts={rotatingNames}
              mainClassName=" transition-all duration-300 overflow-hidden"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="text-gray-300 font-semibold  decoration-gray-300 hover:decoration-blue-400 hover:text-blue-400 transition-colors duration-300 overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <a 
            href="https://www.linkedin.com/in/shantanu-kumar-s34/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/shantanukumar22?igsh=MWhlZHExOTUwYThmNA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
