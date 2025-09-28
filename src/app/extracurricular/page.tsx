import Link from 'next/link';
import { ArrowLeft, Code, Globe, Palette, Zap, Database, Terminal } from 'lucide-react';
import { ActivityExpandableCards } from '@/components/ActivityExpandableCards';
import AnimatedFooter from '@/components/AnimatedFooter';

export default function Extracurricular() {
  const activities = [
    {
      name: "DSA Resources",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      resources: [
        { 
          name: "Striver A2Z DSA Course", 
          url: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=1hOQNEJR411RC9pJ" 
        },
        { 
          name: "Complete C++ Placement DSA Course - CodeHelp by Babbar", 
          url: "https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=QBN22CSHQfPiZOui" 
        },
        { 
          name: "Java & DSA Course for Placement - Apna College", 
          url: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=sbP8lO8S7kUsSPPw" 
        },
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
        }
      ]
    },
    {
      name: "HTML Resources",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      resources: [
        { 
          name: "Complete HTML Tutorial - CodeHelp by Babbar", 
          url: "https://youtu.be/k7ELO356Npo?si=npv9CS6COL5vfqXR" 
        },
        { 
          name: "Sigma Web Development Course - Code with Harry", 
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
          name: "Complete JavaScript Course - CodeHelp by Babbar", 
          url: "https://youtu.be/rfObCuGLSek?si=u1Lee4Dp7FjhlB-5" 
        },
        { 
          name: "100+ Projects using HTML, JS and CSS - Huxn WebDev", 
          url: "https://youtube.com/playlist?list=PLSDeUiTMfxW7lm7P7GZ8qtNFffHAR5d_w&si=dcWKm9ZFEwjgPAXt" 
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
          name: "Complete CSS Basic to Advanced - Coding Shuttle by Anuj Bhaiya", 
          url: "https://youtube.com/playlist?list=PLhzIaPMgkbxBk9-drEC0MBPqEOXpVlwY4&si=g31glLcXqnu7MWOH" 
        },
        { 
          name: "CSS Tutorial for Beginner - CodeHelp by Babbar", 
          url: "https://youtu.be/dSJM4Gyh8jE?si=2-XgsAnr03bn4ni6" 
        },
        { 
          name: "HTML & CSS Projects - CodingLab", 
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
          name: "Chai aur React with Projects - Chai aur Code", 
          url: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=LaiyofdUIX9Q5lmS" 
        },
        { 
          name: "React by Love Babbar", 
          url: "https://www.youtube.com/playlist?list=PL9i39jUQljInNAIHUnnZhKrYhLbFt5I_6" 
        },
        { 
          name: "10 React Projects for Beginners - Do Some Coding", 
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
          name: "Master Node.js - Piyush Garg", 
          url: "https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=CFFwOs25dQXVn9Op" 
        },
        { 
          name: "Complete Node.js + Express.js + MongoDB - Coding by Prashant Sir", 
          url: "https://youtube.com/playlist?list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3&si=RbLi2s_MBvQszYXf" 
        },
        { 
          name: "Master Backend Development Series - Shreyians Coding School", 
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
          name: "Python for Beginners - Telusko", 
          url: "https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&si=NqbXFHDZ6bTZHE-d" 
        },
        { 
          name: "Chai aur Python - Chai aur Code", 
          url: "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=X7DUbxPftmWoKT40" 
        },
        { 
          name: "Python for Beginner - Code with Harry", 
          url: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=LNGXxp1kIeGosgyH" 
        },
        { 
          name: "Harvard CS50 Introduction to Programming with Python", 
          url: "https://youtu.be/nLRL_NcnK-4?si=PKP-TG3Qq1ipsqxp" 
        },
        { 
          name: "100+ Python Programs and Solutions - WsCube Tech", 
          url: "https://youtube.com/playlist?list=PLjVLYmrlmjGf3jtxG8lSo-zaPktQ7YbUw&si=BgP8Jue5z4FCk-4H" 
        },
        { 
          name: "Harvard CS50 Full Computer Science - FreeCodeCamp", 
          url: "https://youtu.be/8mAITcNt710?si=dn79N4YUFONOWDzo" 
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
      <div className="mt-16">
        <AnimatedFooter />
      </div>
    </div>
  );
}
