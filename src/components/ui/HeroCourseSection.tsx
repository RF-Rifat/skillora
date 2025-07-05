import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CourseCard } from '../feature/CourseCard';

// Hide scrollbar utility
const scrollbarHideStyle = `
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

interface CourseData {
  title: string;
  author: string;
  description?: string;
  image: string;
  buttonText: string;
}

interface CategoryData {
  name: string;
  courseCount: number;
}

interface HeroCourseSectionData {
  heading: {
    mainText: string;
    highlightText: string;
  };
  features: string[];
  categories: CategoryData[];
  courses: CourseData[];
  viewAllButton: {
    text: string;
  };
  colors: {
    primary: string;
    primaryHover: string;
    textPrimary: string;
    textSecondary: string;
    background: string;
    cardBackground: string;
  };
}

const heroCourseSectionData: HeroCourseSectionData = {
  "heading": {
    "mainText": "Explore Popular Categories",
    "highlightText": "🚀 স্কিলস"
  },
  "features": [],
  "categories": [
    { "name": "Bundle", "courseCount": 9 },
    { "name": "Skills & IT", "courseCount": 14 },
    { "name": "Design & Creative", "courseCount": 6 },
    { "name": "Career Readiness", "courseCount": 8 },
    { "name": "Kids (Age 7-14)", "courseCount": 1 },
    { "name": "Professional", "courseCount": 2 },
    { "name": "Free", "courseCount": 42 }
  ],
  "courses": [
    {
      "title": "IELTS Course by Munzereen Shahid",
      "author": "Munzereen Shahid",
      "image": "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      "buttonText": "বিস্তারিত"
    },
    {
      "title": "ঘরে বসে Spoken English",
      "author": "Munzereen Shahid",
      "image": "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400",
      "buttonText": "বিস্তারিত"
    },
    {
      "title": "IELTS LIVE Batch",
      "author": "Uttam Deb +4",
      "image": "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400",
      "buttonText": "বিস্তারিত"
    },
    {
      "title": "Spoken English Junior LIVE Batch",
      "author": "Rukhsar Sanjaree +4",
      "image": "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      "buttonText": "বিস্তারিত"
    }
  ],
  "viewAllButton": {
    "text": "সকল কোর্স"
  },
  "colors": {
    "primary": "#10b981",
    "primaryHover": "#059669",
    "textPrimary": "#ffffff",
    "textSecondary": "#d1d5db",
    "background": "#1f2937",
    "cardBackground": "#374151"
  }
};

const HeroCourseSection: React.FC = () => {
  const data = heroCourseSectionData;
  const cardRowRef = useRef<HTMLDivElement>(null);
  const categoryRowRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: 'left' | 'right') => {
    if (cardRowRef.current) {
      const scrollAmount = 320; // Adjust to your card width
      cardRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryRowRef.current) {
      const scrollAmount = 180; // Adjust to your category width
      categoryRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <style>{scrollbarHideStyle}</style>
      <div 
        className="py-16 px-4"
        style={{ backgroundColor: data.colors.background }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              {/* <span className="text-2xl">{data.heading.highlightText}</span> */}
              <h2 
                className="text-3xl md:text-4xl font-bold"
                style={{ color: data.colors.textPrimary }}
              >
                {data.heading.mainText}
              </h2>
            </div>
            
            {/* Features */}
            {/* <div className="flex flex-wrap justify-center gap-8 mb-8">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: data.colors.primary }}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: data.colors.textSecondary }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Categories */}
          <div className="mb-12">
  <div className="flex items-center gap-4 mb-6">
    <button
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex-shrink-0"
      onClick={() => scrollCategories('left')}
    >
      <ChevronLeft className="w-5 h-5 text-white" />
    </button>
    
    <div className="flex-1 overflow-hidden">
      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        ref={categoryRowRef}
        style={{ 
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {data.categories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 rounded-lg text-center min-w-[140px] transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: data.colors.cardBackground }}
          >
            <div 
              className="font-semibold text-sm mb-1 whitespace-nowrap"
              style={{ color: data.colors.textPrimary }}
            >
              {category.name}
            </div>
            <div 
              className="text-xs whitespace-nowrap"
              style={{ color: data.colors.textSecondary }}
            >
              {category.courseCount} Courses
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <button
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex-shrink-0"
      onClick={() => scrollCategories('right')}
    >
      <ChevronRight className="w-5 h-5 text-white" />
    </button>
  </div>
          </div>

          {/* Course Cards */}
          <div className="mb-12">
            <div className="relative w-full max-w-[1100px] mx-auto">
              {/* Left Button */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                onClick={() => scrollCards('left')}
                style={{ marginLeft: '-24px' }} // visually outside container
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              {/* Card Row */}
              <div
                className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide px-8"
                ref={cardRowRef}
                style={{ scrollBehavior: 'smooth' }}
              >
                {data.courses.map((course, index) => (
                  <div key={index} className="w-80 flex-shrink-0">
                    <CourseCard
                      title={course.title}
                      author={course.author}
                      description={course.description}
                      image={course.image}
                      buttonText={course.buttonText}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
              {/* Right Button */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                onClick={() => scrollCards('right')}
                style={{ marginRight: '-24px' }} // visually outside container
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              style={{ 
                backgroundColor: data.colors.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = data.colors.primaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = data.colors.primary;
              }}
            >
              {data.viewAllButton.text} →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCourseSection;