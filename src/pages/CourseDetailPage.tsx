import { useParams } from 'react-router';
import { Link } from 'react-router';

const CourseDetailPage = () => {
  const { courseId } = useParams();

  // Mock course data - in real app this would come from API
  const course = {
    id: courseId,
    title: 'Complete React Developer Course',
    instructor: 'Sarah Johnson',
    instructorAvatar: '👩‍💻',
    instructorBio: 'Senior React Developer with 8+ years of experience. Former lead developer at Facebook and Google.',
    rating: 4.8,
    students: 12450,
    price: 89.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '12 hours',
    lastUpdated: 'December 2024',
    language: 'English',
    description: 'Learn React from scratch and build real-world applications. This comprehensive course covers everything from basic concepts to advanced patterns used in production applications.',
    whatYouWillLearn: [
      'Build complete React applications from scratch',
      'Master React Hooks and modern patterns',
      'Implement state management with Redux',
      'Create responsive and accessible UIs',
      'Deploy React apps to production',
      'Work with APIs and external data'
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'A computer with internet connection',
      'No prior React experience required'
    ],
    curriculum: [
      {
        section: 'Getting Started',
        lessons: [
          { title: 'Introduction to React', duration: '15 min', type: 'video' },
          { title: 'Setting up your development environment', duration: '20 min', type: 'video' },
          { title: 'Your first React component', duration: '25 min', type: 'video' },
          { title: 'Quiz: React Basics', duration: '10 min', type: 'quiz' }
        ]
      },
      {
        section: 'React Fundamentals',
        lessons: [
          { title: 'Components and Props', duration: '30 min', type: 'video' },
          { title: 'State and Lifecycle', duration: '35 min', type: 'video' },
          { title: 'Event Handling', duration: '25 min', type: 'video' },
          { title: 'Conditional Rendering', duration: '20 min', type: 'video' },
          { title: 'Lists and Keys', duration: '25 min', type: 'video' },
          { title: 'Assignment: Todo App', duration: '45 min', type: 'assignment' }
        ]
      },
      {
        section: 'Advanced React',
        lessons: [
          { title: 'React Hooks Introduction', duration: '40 min', type: 'video' },
          { title: 'useState and useEffect', duration: '35 min', type: 'video' },
          { title: 'Custom Hooks', duration: '30 min', type: 'video' },
          { title: 'Context API', duration: '25 min', type: 'video' },
          { title: 'Performance Optimization', duration: '30 min', type: 'video' }
        ]
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Course Header */}
      <div className="bg-surface border-b border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-sm text-primary font-medium">{course.category}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-text-muted mb-6">
                {course.description}
              </p>
              
              {/* Instructor */}
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">{course.instructorAvatar}</div>
                <div>
                  <p className="font-medium text-text">Created by {course.instructor}</p>
                  <p className="text-sm text-text-muted">{course.instructorBio}</p>
                </div>
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
                <div className="flex items-center space-x-1">
                  <span className="text-accent">⭐</span>
                  <span>{course.rating} ({course.students.toLocaleString()} students enrolled)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📅</span>
                  <span>Last updated {course.lastUpdated}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>🌐</span>
                  <span>{course.language}</span>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-background border border-default rounded-xl p-6 sticky top-8">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-text">${course.price}</span>
                    <span className="text-lg text-text-muted line-through">${course.originalPrice}</span>
                    <span className="bg-accent text-white px-2 py-1 rounded text-sm font-medium">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">30-Day Money-Back Guarantee</p>
                </div>

                <button className="btn-primary w-full mb-4">
                  Enroll Now
                </button>

                <button className="btn-outline w-full mb-4">
                  Add to Wishlist
                </button>

                <div className="text-center text-sm text-text-muted">
                  <p>Full lifetime access</p>
                  <p>Access on mobile and TV</p>
                  <p>Certificate of completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-text">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Course Content */}
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Course content</h2>
              <div className="border border-default rounded-lg">
                {course.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border-b border-default last:border-b-0">
                    <div className="p-4 bg-surface-hover">
                      <h3 className="font-semibold text-text">{section.section}</h3>
                      <p className="text-sm text-text-muted">{section.lessons.length} lectures</p>
                    </div>
                    <div className="divide-y divide-default">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="p-4 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-text-muted">
                              {lesson.type === 'video' ? '▶️' : lesson.type === 'quiz' ? '📝' : '📋'}
                            </span>
                            <span className="text-text">{lesson.title}</span>
                          </div>
                          <span className="text-sm text-text-muted">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Course Image */}
              <div className="bg-surface border border-default rounded-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between text-sm text-text-muted mb-2">
                    <span>Duration: {course.duration}</span>
                    <span>Level: {course.level}</span>
                  </div>
                </div>
              </div>

              {/* Instructor Details */}
              <div className="bg-surface border border-default rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text mb-4">Instructor</h3>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{course.instructorAvatar}</div>
                  <div>
                    <p className="font-medium text-text">{course.instructor}</p>
                    <p className="text-sm text-text-muted">Senior React Developer</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  {course.instructorBio}
                </p>
                <button className="btn-outline w-full">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage; 