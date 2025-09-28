import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SubjectExpandableCards } from '@/components/SubjectExpandableCards';
import AnimatedFooter from '@/components/AnimatedFooter';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function Semester2() {
  const subjects = [
    {
      name: "Object Oriented Programming using Java",
      code: "CSET109",
      resources: [
        { 
          name: "W3Schools Java Tutorial", 
          url: "https://www.w3schools.com/java/default.asp" 
        },
        { 
          name: "Java Complete Course - Telusko", 
          url: "https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=EF23Byr9kb5SXFok" 
        },
        { 
          name: "Java One Shot - Apna College", 
          url: "https://youtu.be/UmnCZ7-9yDY?si=0JxcQgRFX_1Qmv7Y" 
        }
      ]
    },
    {
      name: "Linear Algebra and Ordinary Differential Equations",
      code: "EMAT102",
      resources: [
        { 
          name: "Linear Algebra - Gajendra Purohit", 
          url: "https://youtu.be/bjJZKTrCBNw?si=IY50Iez0osX2Z6nD" 
        },
        { 
          name: "Reference Notes - Anu Rami Ma'am", 
          url: "#" 
        }
      ]
    },
    {
      name: "Mechanics & Electromagnetics",
      code: "EPHY108L",
      resources: [
        { 
          name: "Infinity Physics - H S Sethi (Playlist 1)", 
          url: "https://youtube.com/playlist?list=PLSWDszNFa1Q3Ep2Rxd4lJY_aaC63U2ZtF&si=VI_dpQvHjWhRUkv8" 
        },
        { 
          name: "Infinity Physics - H S Sethi (Playlist 2)", 
          url: "https://youtube.com/playlist?list=PLSWDszNFa1Q2foWDnCpDw85LQNY8Nvo3i&si=MRlEKxBzV-zMfKHe" 
        },
        { 
          name: "Electromagnetic Fields and Waves PDF", 
          url: "#" 
        }
      ]
    },
    {
      name: "Discrete Mathematical Structures",
      code: "CSET106",
      resources: [
        { 
          name: "Discrete Mathematics - Neso Academy", 
          url: "https://youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3&si=rrb4Bpvm0VvRPPLm" 
        },
        { 
          name: "Discrete Mathematics Notes PDF", 
          url: "#" 
        }
      ]
    },
    {
      name: "Digital Design",
      code: "CSET105",
      resources: [
        { 
          name: "Digital Design - Neso Academy", 
          url: "https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&si=HP8Oyl6-4OyP-Hkt" 
        },
        { 
          name: "Digital Electronics - All About Electronics", 
          url: "https://youtube.com/playlist?list=PLwjK_iyK4LLBC_so3odA64E2MLgIRKafl&si=puvm1al848PeVNd2" 
        },
        { 
          name: "GeeksforGeeks Digital Logic Tutorial", 
          url: "https://www.geeksforgeeks.org/digital-logic/digital-electronics-logic-design-tutorials/" 
        }
      ]
    },
    {
      name: "New Age Life Skills",
      code: "LIFE101",
      resources: [
        { 
          name: "Life Skills Notes", 
          url: "#" 
        }
      ]
    },
    {
      name: "Introduction to Electrical and Electronics Engineering",
      code: "CSET102",
      resources: [
        { 
          name: "The Organic Chemistry Tutor", 
          url: "https://www.youtube.com/@TheOrganicChemistryTutor" 
        },
        { 
          name: "Neso Academy", 
          url: "https://www.youtube.com/@nesoacademy" 
        },
        { 
          name: "Engineers ki Pathsaala Playlist", 
          url: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc" 
        },
        { 
          name: "Reference Notes - Mohammad Usman Sir", 
          url: "https://drive.google.com/drive/folders/1rHmP-LCBf1Bvc-CP3DtSxIL3MD08CGOr?usp=sharing" 
        }
      ]
    },
    {
      name: "Environment Sustainability",
      code: "ENV101",
      resources: [
        { 
          name: "Reference Notes - Barun Kanoo Sir", 
          url: "https://drive.google.com/drive/folders/1LrVL5Q1m7eYwSvlrKAlnYigB3XD7L0mN?usp=sharing" 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 py-3 sm:py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200">Semester 2 Subjects</h1>
        </div>
      </header>

      {/* Subject Materials Section */}
      <section className="py-6 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">Subject Materials</h2>
            <p className="text-gray-400 text-sm sm:text-base">Access comprehensive study materials for each subject</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {/* Java Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/ErQyssUoJAhAjddHp7lUalEBIl7ZoRiR_rIXggX_Z_j5sw?e=sGYTDr"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-orange-400 mb-2">☕</div>
                <h3 className="font-semibold text-white text-sm mb-1">Java</h3>
                <p className="text-gray-400 text-xs">CSET109 Materials</p>
              </a>
            </div>

            {/* Linear Algebra Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EkbQfTGo8nZHotMLsG_cFLsBddVdam5nhPExwTjAxH1ElQ?e=U8RrhF"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-purple-400 mb-2">📊</div>
                <h3 className="font-semibold text-white text-sm mb-1">Linear Algebra</h3>
                <p className="text-gray-400 text-xs">EMAT102 Materials</p>
              </a>
            </div>

            {/* Physics Materials */}
            <div className="relative">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-blue-400 mb-2">⚛️</div>
                <h3 className="font-semibold text-white text-sm mb-1">Physics</h3>
                <p className="text-gray-400 text-xs">EPHY108L Materials</p>
              </a>
            </div>

            {/* DMS Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EsCFyrKb4hhGv6yriXNEqbIB5nlAYtCFHl1jiv8BNRrX1g?e=tWWOxt"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-cyan-400 mb-2">🔢</div>
                <h3 className="font-semibold text-white text-sm mb-1">DMS</h3>
                <p className="text-gray-400 text-xs">CSET106 Materials</p>
              </a>
            </div>

            {/* Digital Design Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/ElLWHq8gq69MsYDeVulsltMBUguFhQyw7PnBOhAqA3E7SA?e=aM3utU"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-red-400 mb-2">🔌</div>
                <h3 className="font-semibold text-white text-sm mb-1">Digital Design</h3>
                <p className="text-gray-400 text-xs">CSET105 Materials</p>
              </a>
            </div>

            {/* Life Skills Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EqUXtbVHDPpHipkt551zxNoBw24li-TJ9g0nJ_891tHRAg?e=Cl9jxQ"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-pink-400 mb-2">💡</div>
                <h3 className="font-semibold text-white text-sm mb-1">Life Skills</h3>
                <p className="text-gray-400 text-xs">LIFE101 Materials</p>
              </a>
            </div>

            {/* Electrical Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EncCiaCQ5VNIh1gFpeyamvwBCUqnALAclsA1AdHLa62Zow?e=YuZe7h"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-yellow-400 mb-2">⚡</div>
                <h3 className="font-semibold text-white text-sm mb-1">Electrical</h3>
                <p className="text-gray-400 text-xs">CSET102 Materials</p>
              </a>
            </div>

            {/* EVS Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/Ep55xptIZJ9FmrW-O_II9csBGuwDEhMgf202fHr8UBG40g"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 text-center transition-colors duration-300 group rounded-lg min-h-[120px] flex flex-col justify-center items-center cursor-pointer"
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
                <div className="text-green-500 mb-2">🌱</div>
                <h3 className="font-semibold text-white text-sm mb-1">EVS</h3>
                <p className="text-gray-400 text-xs">ENV101 Materials</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-6 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-200">Semester 2</h2>
            <p className="text-gray-400 text-base sm:text-lg">Advanced subjects to deepen your engineering knowledge</p>
          </div>

          <SubjectExpandableCards subjects={subjects} />
        </div>
      </main>

      {/* Footer */}
      <div className="mt-16">
        <AnimatedFooter />
      </div>
    </div>
  );
}