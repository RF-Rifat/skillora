import { useParams, Link } from 'react-router';
import { useState } from 'react';

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Mock course and lesson data
  const course = {
    id: courseId,
    title: 'Complete React Developer Course',
    instructor: 'Sarah Johnson',
    currentLesson: {
      id: lessonId,
      title: 'React Hooks Introduction',
      duration: '35:24',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Learn the fundamentals of React Hooks and how they revolutionize state management in functional components.',
      resources: [
        { name: 'Hooks Documentation', type: 'pdf', url: '#' },
        { name: 'Code Examples', type: 'zip', url: '#' },
        { name: 'Practice Exercises', type: 'doc', url: '#' }
      ]
    },
    curriculum: [
      {
        section: 'Getting Started',
        lessons: [
          { id: '1', title: 'Introduction to React', duration: '15:30', completed: true, type: 'video' },
          { id: '2', title: 'Setting up your development environment', duration: '20:15', completed: true, type: 'video' },
          { id: '3', title: 'Your first React component', duration: '25:45', completed: true, type: 'video' },
          { id: '4', title: 'Quiz: React Basics', duration: '10:00', completed: true, type: 'quiz' }
        ]
      },
      {
        section: 'React Fundamentals',
        lessons: [
          { id: '5', title: 'Components and Props', duration: '30:20', completed: true, type: 'video' },
          { id: '6', title: 'State and Lifecycle', duration: '35:10', completed: true, type: 'video' },
          { id: '7', title: 'Event Handling', duration: '25:30', completed: true, type: 'video' },
          { id: '8', title: 'Conditional Rendering', duration: '20:15', completed: true, type: 'video' },
          { id: '9', title: 'Lists and Keys', duration: '25:45', completed: true, type: 'video' },
          { id: '10', title: 'Assignment: Todo App', duration: '45:00', completed: false, type: 'assignment' }
        ]
      },
      {
        section: 'Advanced React',
        lessons: [
          { id: '11', title: 'React Hooks Introduction', duration: '35:24', completed: false, type: 'video', current: true },
          { id: '12', title: 'useState and useEffect', duration: '35:15', completed: false, type: 'video' },
          { id: '13', title: 'Custom Hooks', duration: '30:30', completed: false, type: 'video' },
          { id: '14', title: 'Context API', duration: '25:20', completed: false, type: 'video' },
          { id: '15', title: 'Performance Optimization', duration: '30:45', completed: false, type: 'video' }
        ]
      }
    ]
  };

  const currentLessonIndex = course.curriculum
    .flatMap(section => section.lessons)
    .findIndex(lesson => lesson.id === lessonId);

  const allLessons = course.curriculum.flatMap(section => section.lessons);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return '▶️';
      case 'quiz': return '📝';
      case 'assignment': return '📋';
      default: return '📄';
    }
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 bg-surface border-r border-default overflow-hidden`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-default">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-text truncate">{course.title}</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-text-muted hover:text-text"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-text-muted">by {course.instructor}</p>
          </div>

          {/* Course Progress */}
          <div className="p-4 border-b border-default">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-text-muted">Course Progress</span>
              <span className="font-medium">
                {allLessons.filter(l => l.completed).length}/{allLessons.length}
              </span>
            </div>
            <div className="w-full bg-surface-hover rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(allLessons.filter(l => l.completed).length / allLessons.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="flex-1 overflow-y-auto">
            {course.curriculum.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border-b border-default last:border-b-0">
                <div className="p-4 bg-surface-hover">
                  <h3 className="font-medium text-text">{section.section}</h3>
                  <p className="text-sm text-text-muted">{section.lessons.length} lessons</p>
                </div>
                <div className="divide-y divide-default">
                  {section.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`p-4 cursor-pointer transition-colors ${
                        lesson.current
                          ? 'bg-primary text-white'
                          : lesson.completed
                          ? 'bg-background hover:bg-surface-hover'
                          : 'bg-background hover:bg-surface-hover'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-sm">
                          {lesson.completed ? '✅' : getLessonIcon(lesson.type)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            lesson.current ? 'text-white' : 'text-text'
                          }`}>
                            {lesson.title}
                          </p>
                          <p className={`text-xs ${
                            lesson.current ? 'text-white/70' : 'text-text-muted'
                          }`}>
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-surface border-b border-default p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-text-muted hover:text-text lg:hidden"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h1 className="text-lg font-semibold text-text">{course.currentLesson.title}</h1>
                <p className="text-sm text-text-muted">{course.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="btn-outline text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                Notes
              </button>
              <button className="btn-outline text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="bg-black aspect-video">
              <iframe
                src={course.currentLesson.videoUrl}
                title={course.currentLesson.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Lesson Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-text mb-4">{course.currentLesson.title}</h2>
              <p className="text-text-muted mb-6">{course.currentLesson.description}</p>

              {/* Resources */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text mb-3">Resources</h3>
                <div className="space-y-2">
                  {course.currentLesson.resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-surface border border-default rounded-lg">
                      <span className="text-lg">
                        {resource.type === 'pdf' ? '📄' : resource.type === 'zip' ? '📦' : '📝'}
                      </span>
                      <span className="text-text">{resource.name}</span>
                      <button className="ml-auto text-primary hover:text-primary-hover transition-colors">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-default">
                <div>
                  {prevLesson && (
                    <Link
                      to={`/dashboard/courses/${courseId}/lessons/${prevLesson.id}`}
                      className="btn-outline"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Lesson
                    </Link>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="btn-outline">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mark Complete
                  </button>
                  {nextLesson && (
                    <Link
                      to={`/dashboard/courses/${courseId}/lessons/${nextLesson.id}`}
                      className="btn-primary"
                    >
                      Next Lesson
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage; 