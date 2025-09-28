"use client"
import Link from 'next/link';
import { BookOpen, Users, Trophy } from 'lucide-react';
import Beams from '../components/Beams';
import TextPressure from '../components/TextPressure';
import { ExpandableCards } from '../components/ExpandableCards';
import AnimatedFooter from '../components/AnimatedFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center z-10">
            <div className="mb-6 sm:mb-8">
              <TextPressure
                text="9.3 SGPA"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#9ca3af"
                // textColor='#FFFFF'
                strokeColor="#3b82f6"
                minFontSize={32}
                className="text-center"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-2">
              Your gateway to academic excellence. Access curated resources for semester studies and extracurricular activities.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gray-500 mx-auto"></div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Cards Section with Laser Flow Background */}
      <section 
        className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative overflow-hidden bg-black"
      >
        
        <div className="max-w-6xl mx-auto relative z-10 h-full">
          <div className="text-center mb-8 sm:mb-12 pt-6 sm:pt-8 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-200">Explore Your Journey</h2>
            <p className="text-gray-400 text-base sm:text-lg">Choose your path to academic excellence</p>
          </div>
          
          <div className="px-4 sm:px-6 md:px-8">
            <ExpandableCards />
          </div>
        </div>
      </section>

      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
}