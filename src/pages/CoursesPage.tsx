import { useState } from 'react';
import { Link } from 'react-router';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'mobile-dev', name: 'Mobile Development' },
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 12450,
      price: 89.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      category: 'web-development',
      level: 'intermediate',
      duration: '12 hours',
      description: 'Learn React from scratch and build real-world applications'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 8920,
      price: 79.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      category: 'data-science',
      level: 'beginner',
      duration: '15 hours',
      description: 'Master Python programming for data analysis and machine learning'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Davis',
      rating: 4.7,
      students: 5670,
      price: 69.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      category: 'design',
      level: 'advanced',
      duration: '18 hours',
      description: 'Create stunning user interfaces and exceptional user experiences'
    },
    {
      id: 4,
      title: 'JavaScript Fundamentals',
      instructor: 'David Wilson',
      rating: 4.6,
      students: 15680,
      price: 49.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop',
      category: 'web-development',
      level: 'beginner',
      duration: '10 hours',
      description: 'Learn JavaScript from the ground up with practical examples'
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      instructor: 'Lisa Anderson',
      rating: 4.5,
      students: 4320,
      price: 59.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      category: 'marketing',
      level: 'intermediate',
      duration: '14 hours',
      description: 'Develop comprehensive digital marketing strategies'
    },
    {
      id: 6,
      title: 'iOS App Development',
      instructor: 'Alex Thompson',
      rating: 4.8,
      students: 7890,
      price: 99.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      category: 'mobile-dev',
      level: 'advanced',
      duration: '20 hours',
      description: 'Build iOS applications using Swift and SwiftUI'
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const coursesPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-surface border-b border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text mb-4">
              Explore Our Courses
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Choose from hundreds of courses across various disciplines and skill levels
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 w-full max-w-md"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-input"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="form-input"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>

          {/* Results Count */}
          <div className="text-text-muted">
            Showing {filteredCourses.length} of {courses.length} courses
          </div>
        </div>

        {/* Courses Grid */}
        {paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {paginatedCourses.map((course) => (
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
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium capitalize">
                      {course.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-accent">⭐</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2 line-clamp-2">
                    {course.description}
                  </p>
                  <p className="text-sm text-text-muted mb-4">by {course.instructor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-text">${course.price}</span>
                      <span className="text-sm text-text-muted line-through">${course.originalPrice}</span>
                    </div>
                    <span className="text-sm text-text-muted">{course.students.toLocaleString()} students</span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="btn-primary w-full text-center"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-text mb-2">No courses found</h3>
            <p className="text-text-muted mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'text-text hover:bg-surface-hover'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage; 