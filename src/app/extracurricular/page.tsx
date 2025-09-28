import Link from 'next/link';
import { ArrowLeft, Code, Globe, Palette, Zap, Database, Terminal } from 'lucide-react';
import { ActivityExpandableCards } from '@/components/ActivityExpandableCards';

export default function Extracurricular() {
  const activities = [
    {
      name: "DSA Resources",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      resources: [
        { 
          name: "Striver's DSA Sheet - TakeUForward", 
          url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" 
        },
        { 
          name: "Ninjas SDE Sheet - Naukri Code360", 
          url: "https://www.naukri.com/code360/problem-lists/ninjas-sde-sheet" 
        },
        { 
          name: "Top 100 DSA Interview Questions - LeetCode", 
          url: "https://leetcode.com/discuss/post/4258631/top-100-dsa-interview-questions-by-anony-jlgg/" 
        },
        { 
          name: "Striver's DSA Playlist 1", 
          url: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=1hOQNEJR411RC9pJ" 
        },
        { 
          name: "Striver's DSA Playlist 2", 
          url: "https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=QBN22CSHQfPiZOui" 
        },
        { 
          name: "Love Babbar DSA Playlist", 
          url: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=sbP8lO8S7kUsSPPw" 
        }
      ]
    },
    {
      name: "HTML Resources",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      resources: [
        { 
          name: "HTML Tutorial - Code with Harry", 
          url: "https://youtu.be/BsDoLVMnmZs?si=EzDV5FXL4Z2-7Rqg" 
        },
        { 
          name: "HTML Complete Course - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=9Ws75npjMZ80jJAX" 
        },
        { 
          name: "HTML Practice - CodeChef", 
          url: "https://www.codechef.com/practice/html" 
        },
        { 
          name: "CSS Exercises - W3Schools", 
          url: "https://www.w3schools.com/css/css_exercises.asp" 
        }
      ]
    },
    {
      name: "JavaScript Resources",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      resources: [
        { 
          name: "JavaScript Tutorial - Code with Harry", 
          url: "https://youtu.be/rfObCuGLSek?si=u1Lee4Dp7FjhlB-5" 
        },
        { 
          name: "JavaScript Complete Course - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&si=OM5vsVuUuvJ92BbM" 
        },
        { 
          name: "JavaScript Practice - CodeChef", 
          url: "https://www.codechef.com/practice/javascript" 
        },
        { 
          name: "JavaScript Exercises - W3Schools", 
          url: "https://www.w3schools.com/js/js_exercises.asp" 
        }
      ]
    },
    {
      name: "CSS Resources",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      resources: [
        { 
          name: "CSS Tutorial - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLhzIaPMgkbxBk9-drEC0MBPqEOXpVlwY4&si=g31glLcXqnu7MWOH" 
        },
        { 
          name: "CSS Complete Course - Code with Harry", 
          url: "https://youtu.be/dSJM4Gyh8jE?si=2-XgsAnr03bn4ni6" 
        },
        { 
          name: "CSS Advanced - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf&si=qY0-FAr-VG4C9pru" 
        },
        { 
          name: "CSS Exercises - W3Schools", 
          url: "https://www.w3schools.com/css/css_exercises.asp" 
        },
        { 
          name: "CSS Practice Labs - LabEx", 
          url: "https://labex.io/courses/css-practice-labs" 
        }
      ]
    },
    {
      name: "React Resources",
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      resources: [
        { 
          name: "React Tutorial - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&si=_vJuCWh5gDuQH8hj" 
        },
        { 
          name: "React Complete Course - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=xCgOCsV7n2bhjF3S" 
        },
        { 
          name: "React Advanced - Code with Harry", 
          url: "https://www.youtube.com/playlist?list=PL9i39jUQljInNAIHUnnZhKrYhLbFt5I_6" 
        },
        { 
          name: "React Hands-on Practice", 
          url: "https://www.youtube.com/playlist?list=PLPppPPmk0i3j_DW1T-UbryDVhBDgaAfEp" 
        },
        { 
          name: "Hands-on React", 
          url: "https://handsonreact.com/" 
        },
        { 
          name: "React Hands-on Series - Hashnode", 
          url: "https://abhinandanmishra1.hashnode.dev/series/react-hands-on-series" 
        }
      ]
    },
    {
      name: "Node.js Resources",
      icon: <Terminal className="w-6 h-6 text-green-400" />,
      resources: [
        { 
          name: "Node.js Tutorial - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=CFFwOs25dQXVn9Op" 
        },
        { 
          name: "Node.js Complete Course - Code with Harry", 
          url: "https://youtube.com/playlist?list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3&si=RbLi2s_MBvQszYXf" 
        },
        { 
          name: "Node.js Advanced - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH&si=6TevKcSzFtASbKT_" 
        },
        { 
          name: "Node.js Exercises - GeeksforGeeks", 
          url: "https://www.geeksforgeeks.org/node-js/node-exercises/" 
        },
        { 
          name: "Node.js Roadmap Questions", 
          url: "https://roadmap.sh/questions/nodejs" 
        },
        { 
          name: "Node.js Practice - CodeChef", 
          url: "https://www.codechef.com/learn/course/nodejs" 
        }
      ]
    },
    {
      name: "Python Resources",
      icon: <Code className="w-6 h-6 text-orange-400" />,
      resources: [
        { 
          name: "Python Tutorial - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&si=NqbXFHDZ6bTZHE-d" 
        },
        { 
          name: "Python Complete Course - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=X7DUbxPftmWoKT40" 
        },
        { 
          name: "Python for Beginners - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=LNGXxp1kIeGosgyH" 
        },
        { 
          name: "Python Hands-on Practice", 
          url: "https://youtube.com/playlist?list=PLjVLYmrlmjGf3jtxG8lSo-zaPktQ7YbUw&si=BgP8Jue5z4FCk-4H" 
        },
        { 
          name: "Python Exercises - GeeksforGeeks", 
          url: "https://www.geeksforgeeks.org/python/python-exercises-practice-questions-and-solutions/" 
        },
        { 
          name: "Python Exercises - W3Schools", 
          url: "https://www.w3schools.com/python/python_exercises.asp" 
        },
        { 
          name: "Python Practice - HackerRank", 
          url: "https://www.hackerrank.com/domains/python" 
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
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200">Extracurricular Activities</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-200">Beyond Academics</h2>
            <p className="text-gray-400 text-base sm:text-lg">Explore opportunities for personal growth and skill development</p>
          </div>

          <ActivityExpandableCards activities={activities} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Made with ❤️ by <span className="text-gray-300 font-semibold">Shantanu Kumar</span>
          </p>
          <div className="flex justify-center space-x-6">
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
    </div>
  );
}
