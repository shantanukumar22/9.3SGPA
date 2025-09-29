import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SubjectExpandableCards } from '@/components/SubjectExpandableCards';
import AnimatedFooter from '@/components/AnimatedFooter';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function Semester1() {
  const subjects = [
    {
      name: "Computational Thinking and Programming",
      code: "2025CSET100",
      resources: [
        { 
          name: "Python Tutorial for Beginners - Apna College (10hrs)", 
          url: "https://youtu.be/ERCMXc8x7mc?si=Tjg5BdTwmuqV89hQ" 
        },
      
        { 
          name: "Python for Beginners - Chai aur Code (Part 1)", 
          url: "https://youtu.be/v9bOWjwdTlg?si=ymcQh_uoMdYYR_xG" 
        },
        { 
          name: "Python for Beginners - Chai aur Code (Part 2)", 
          url: "https://youtu.be/Cri8__uGk-g?si=X0s2sPATWDh-G0OZ" 
        },
        { 
          name: "GeeksforGeeks Python Tutorial", 
          url: "https://www.geeksforgeeks.org/python/python-programming-language-tutorial/" 
        },
        { 
          name: "Python Crash Course by Eric Matthes (Book)", 
          url: "https://dokumen.pub/python-crash-course-a-hands-on-project-based-introduction-to-programming-2nd-edition-2nbsped-1593279280-9781593279288-9781593276034-1593276036-2015018135.html" 
        },
        { 
          name: "Think Python by Allen B. Downey (Book)", 
          url: "https://greenteapress.com/thinkpython2/thinkpython2.pdf" 
        }
      ]
    },
    {
      name: "Engineering Calculus",
      code: "EMAT101L",
      resources: [
        { 
          name: "Gajendra Purohit YouTube Channel", 
          url: "https://www.youtube.com/@gajendrapurohit" 
        },
        { 
          name: "Thomas Calculus (Reference Book)", 
          url: "https://archive.org/details/thomascalculus0000unse" 
        },
       
        { 
          name: "Reference Notes - Google Drive", 
          url: "https://drive.google.com/drive/folders/1Cjx7fv5ScLYzPXh2eDM-hzLBUXNUh-QR?usp=sharing" 
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
    },
    {
      name: "Mechanics & Electromagnetics",
      code: "EPHY117L",
      resources: [
        { 
          name: "Infinity Physics - H S Sethi (Playlist 1)", 
          url: "https://youtube.com/playlist?list=PLSWDszNFa1Q3Ep2Rxd4lJY_aaC63U2ZtF&si=VI_dpQvHjWhRUkv8" 
        },
        { 
          name: "Infinity Physics - H S Sethi (Playlist 2)", 
          url: "https://youtube.com/playlist?list=PLSWDszNFa1Q2foWDnCpDw85LQNY8Nvo3i&si=MRlEKxBzV-zMfKHe" 
        },
        
      ]
    },
    {
      name: "New Age Life Skills",
      code: "LIFE101",
      resources: [
        { 
          name: "Life Skills Notes", 
          url:"https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EqUXtbVHDPpHipkt551zxNoBw24li-TJ9g0nJ_891tHRAg?e=Cl9jxQ"

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
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200">Semester 1 Subjects</h1>
        </div>
      </header>

      {/* Subject Materials Section */}
      <section className="py-6 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">Subject Materials</h2>
            <p className="text-gray-400 text-sm sm:text-base">Access comprehensive study materials for each subject</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Python Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EuTEiERxSLVIgTUcZNZsrewBbAa_QS553oELOzyMU5YEFA?e=MpNjse"
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
                <div className="text-blue-400 mb-2">🐍</div>
                <h3 className="font-semibold text-white text-sm mb-1">Python</h3>
                <p className="text-gray-400 text-xs">2025CSET100 Materials</p>
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

            {/* Calculus Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/Eo07pj1xQQJAqG3RJhbtytMByweRlRP8bKveBBghuD_ZjA?e=fowlKL"
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
                <div className="text-green-400 mb-2">📐</div>
                <h3 className="font-semibold text-white text-sm mb-1">Calculus</h3>
                <p className="text-gray-400 text-xs">EMAT101L Materials</p>
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

            {/* Mechanics Materials */}
            <div className="relative">
              <a
                href="https://bennettu-my.sharepoint.com/:f:/g/personal/fullstack_bennett_edu_in/EsHYCmQJy9RNk9ETmK1uW1YBEO-OxLNyfqRNlqeMfHmpYw?e=rHrGKR"
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
                <div className="text-blue-400 mb-2">⚙️</div>
                <h3 className="font-semibold text-white text-sm mb-1">Mechanics</h3>
                <p className="text-gray-400 text-xs">EPHY117L Materials</p>
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-6 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-200">Semester 1</h2>
            <p className="text-gray-400 text-base sm:text-lg">Essential subjects to build your academic foundation</p>
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
