import React from 'react';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

interface HeroData {
  badge: {
    text: string;
    icon: string;
  };
  heading: {
    mainText: string;
    highlightText: string;
  };
  description: string;
  buttons: {
    primary: {
      text: string;
      icon: string;
    };
    secondary: {
      text: string;
      icon: string;
    };
  };
  stats: {
    learners: string;
  };
}

const heroData: HeroData = {
  "badge": {
    "text": "ReactJs v-18 Template",
    "icon": "BookOpen"
  },
  "heading": {
    "mainText": "Master New Skills with",
    "highlightText": "Expert-Led Courses"
  },
  "description": "Join 100,000+ learners worldwide and transform your career with our comprehensive online learning platform designed for real-world success.",
  "buttons": {
    "primary": {
      "text": "Explore Courses",
      "icon": "Users"
    },
    "secondary": {
      "text": "Start Learning Free",
      "icon": "BookOpen"
    }
  },
  "stats": {
    "learners": "100,000+"
  }
};

const HeroSection: React.FC = () => {
  const data: HeroData = heroData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return BookOpen;
      case 'Users':
        return Users;
      case 'ArrowRight':
        return ArrowRight;
      default:
        return BookOpen;
    }
  };

  const BadgeIcon = getIcon(data.badge.icon);
  const PrimaryIcon = getIcon(data.buttons.primary.icon);
  const SecondaryIcon = getIcon(data.buttons.secondary.icon);

  return (
    <div className=" bg-background flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg gradient-primary animate-fadeIn">
          <BadgeIcon className="w-4 h-4" />
          {data.badge.text}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground animate-slideUp">
          {data.heading.mainText}
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {data.heading.highlightText}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground animate-slideUp">
          {data.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp">
          <button className="btn-primary group px-8 py-4 text-lg shadow-glow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <PrimaryIcon className="w-5 h-5" />
            {data.buttons.primary.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="btn-outline group px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <SecondaryIcon className="w-5 h-5" />
            {data.buttons.secondary.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 animate-fadeIn">
          <p className="text-muted-foreground">
            Join <span className="font-semibold text-foreground">{data.stats.learners}</span> learners worldwide
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-primary/20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 bg-primary/30"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;