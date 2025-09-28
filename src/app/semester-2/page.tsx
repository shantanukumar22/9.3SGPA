import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SubjectExpandableCards } from '@/components/SubjectExpandableCards';
import AnimatedFooter from '@/components/AnimatedFooter';

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
      <section className="py-6 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">Subject Materials</h2>
            <p className="text-gray-400 text-sm sm:text-base">Access comprehensive study materials for each subject</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Java Materials */}
            <a
              href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/ErQyssUoJAhAjddHp7lUalEBIl7ZoRiR_rIXggX_Z_j5sw?e=sGYTDr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg p-4 text-center transition-colors duration-300 group"
            >
              <div className="text-orange-400 mb-2">☕</div>
              <h3 className="font-semibold text-white text-sm mb-1">Java</h3>
              <p className="text-gray-400 text-xs">CSET109 Materials</p>
            </a>

            {/* Linear Algebra Materials */}
            <a
              href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EkbQfTGo8nZHotMLsG_cFLsBddVdam5nhPExwTjAxH1ElQ?e=U8RrhF"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg p-4 text-center transition-colors duration-300 group"
            >
              <div className="text-purple-400 mb-2">📊</div>
              <h3 className="font-semibold text-white text-sm mb-1">Linear Algebra</h3>
              <p className="text-gray-400 text-xs">EMAT102 Materials</p>
            </a>

            {/* Physics Materials */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg p-4 text-center transition-colors duration-300 group"
            >
              <div className="text-blue-400 mb-2">⚛️</div>
              <h3 className="font-semibold text-white text-sm mb-1">Physics</h3>
              <p className="text-gray-400 text-xs">EPHY108L Materials</p>
            </a>

            {/* DMS Materials */}
            <a
              href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EsCFyrKb4hhGv6yriXNEqbIB5nlAYtCFHl1jiv8BNRrX1g?e=tWWOxt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg p-4 text-center transition-colors duration-300 group"
            >
              <div className="text-cyan-400 mb-2">🔢</div>
              <h3 className="font-semibold text-white text-sm mb-1">DMS</h3>
              <p className="text-gray-400 text-xs">CSET106 Materials</p>
            </a>

            {/* Digital Design Materials */}
            <a
              href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/ElLWHq8gq69MsYDeVulsltMBUguFhQyw7PnBOhAqA3E7SA?e=aM3utU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg p-4 text-center transition-colors duration-300 group"
            >
              <div className="text-red-400 mb-2">🔌</div>
              <h3 className="font-semibold text-white text-sm mb-1">Digital Design</h3>
              <p className="text-gray-400 text-xs">CSET105 Materials</p>
            </a>

            {/* Life Skills Materials */}
            <a
              href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EqUXtbVHDPpHipkt551zxNoBw24li-TJ9g0nJ_891tHRAg?e=Cl9jxQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg p-4 text-center transition-colors duration-300 group"
            >
              <div className="text-pink-400 mb-2">💡</div>
              <h3 className="font-semibold text-white text-sm mb-1">Life Skills</h3>
              <p className="text-gray-400 text-xs">LIFE101 Materials</p>
            </a>
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