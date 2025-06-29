import { Link } from 'react-router';

const MyCoursesPage = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      progress: 75,
      totalLessons: 48,
      completedLessons: 36,
      lastAccessed: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '12 hours',
      nextLesson: 'React Hooks Introduction',
      certificate: false
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Michael Chen',
      progress: 45,
      totalLessons: 52,
      completedLessons: 23,
      lastAccessed: '1 day ago',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop',
      category: 'Data Science',
      level: 'Beginner',
      duration: '15 hours',
      nextLesson: 'Data Visualization with Matplotlib',
      certificate: false
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Davis',
      progress: 90,
      totalLessons: 38,
      completedLessons: 34,
      lastAccessed: '3 days ago',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
      category: 'Design',
      level: 'Advanced',
      duration: '18 hours',
      nextLesson: 'Final Project Submission',
      certificate: true
    },
    {
      id: 4,
      title: 'JavaScript Fundamentals',
      instructor: 'David Wilson',
      progress: 100,
      totalLessons: 42,
      completedLessons: 42,
      lastAccessed: '1 week ago',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop',
      category: 'Web Development',
      level: 'Beginner',
      duration: '10 hours',
      nextLesson: 'Course Completed',
      certificate: true
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      instructor: 'Lisa Anderson',
      progress: 25,
      totalLessons: 35,
      completedLessons: 9,
      lastAccessed: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      category: 'Marketing',
      level: 'Intermediate',
      duration: '14 hours',
      nextLesson: 'Social Media Marketing',
      certificate: false
    },
    {
      id: 6,
      title: 'iOS App Development',
      instructor: 'Alex Thompson',
      progress: 60,
      totalLessons: 45,
      completedLessons: 27,
      lastAccessed: '4 days ago',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
      category: 'Mobile Development',
      level: 'Advanced',
      duration: '20 hours',
      nextLesson: 'App Store Deployment',
      certificate: false
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 60) return 'bg-primary';
    if (progress >= 40) return 'bg-accent';
    return 'bg-secondary';
  };

  const getProgressText = (progress: number) => {
    if (progress === 100) return 'Completed';
    if (progress >= 80) return 'Almost Done';
    if (progress >= 60) return 'Good Progress';
    if (progress >= 40) return 'In Progress';
    return 'Just Started';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text mb-2">My Courses</h1>
          <p className="text-text-muted">Continue your learning journey</p>
        </div>
        <Link to="/courses" className="btn-primary">
          Browse More Courses
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface border border-default rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
              📚
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-text mb-1">{enrolledCourses.length}</p>
            <p className="text-text-muted">Total Courses</p>
          </div>
        </div>

        <div className="bg-surface border border-default rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white text-xl">
              🔄
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-text mb-1">
              {enrolledCourses.filter(c => c.progress > 0 && c.progress < 100).length}
            </p>
            <p className="text-text-muted">In Progress</p>
          </div>
        </div>

        <div className="bg-surface border border-default rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center text-white text-xl">
              ✅
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-text mb-1">
              {enrolledCourses.filter(c => c.progress === 100).length}
            </p>
            <p className="text-text-muted">Completed</p>
          </div>
        </div>

        <div className="bg-surface border border-default rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center text-white text-xl">
              🏆
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-text mb-1">
              {enrolledCourses.filter(c => c.certificate).length}
            </p>
            <p className="text-text-muted">Certificates</p>
          </div>
        </div>
      </div>

      {/* Course Filters */}
      <div className="flex flex-wrap gap-4">
        <button className="btn-primary">All Courses</button>
        <button className="btn-outline">In Progress</button>
        <button className="btn-outline">Completed</button>
        <button className="btn-outline">Recently Accessed</button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-surface border border-default rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded text-sm font-medium">
                {course.level}
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {course.duration}
              </div>
              {course.certificate && (
                <div className="absolute bottom-4 right-4 bg-success text-white px-2 py-1 rounded text-sm font-medium">
                  🏆 Certificate
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-primary font-medium">{course.category}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-accent">⭐</span>
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-text mb-2">{course.title}</h3>
              <p className="text-sm text-text-muted mb-4">by {course.instructor}</p>
              
              {/* Progress Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-text-muted">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-surface-hover rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(course.progress)}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>{getProgressText(course.progress)}</span>
                  <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-text-muted">
                  Last accessed: {course.lastAccessed}
                </p>
                <p className="text-xs text-text-muted">
                  Next: {course.nextLesson}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Link
                  to={`/dashboard/courses/${course.id}/lessons/1`}
                  className="btn-primary flex-1 text-center"
                >
                  {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                </Link>
                <button className="btn-outline px-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no courses) */}
      {enrolledCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-text mb-2">No courses enrolled yet</h3>
          <p className="text-text-muted mb-6">
            Start your learning journey by enrolling in your first course
          </p>
          <Link to="/courses" className="btn-primary">
            Browse Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage; 