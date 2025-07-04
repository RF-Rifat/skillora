import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Button, Card, Badge, Container } from '../components';

const HomePage = () => {
  const categories = [
    { name: 'Web Development', icon: '💻', count: 45, color: 'bg-primary' },
    { name: 'Data Science', icon: '📊', count: 32, color: 'bg-secondary' },
    { name: 'Design', icon: '🎨', count: 28, color: 'bg-accent' },
    { name: 'Business', icon: '💼', count: 38, color: 'bg-success' },
    { name: 'Marketing', icon: '📈', count: 25, color: 'bg-info' },
    { name: 'Mobile Dev', icon: '📱', count: 22, color: 'bg-warning' },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 12450,
      price: 89.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '12 hours'
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
      category: 'Data Science',
      level: 'Beginner',
      duration: '15 hours'
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
      category: 'Design',
      level: 'Advanced',
      duration: '18 hours'
    },
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'Skillora transformed my career. The React course was incredibly comprehensive and practical.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Data Analyst',
      company: 'DataFlow Inc',
      content: 'The Python course helped me land my dream job. The instructors are world-class experts.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      company: 'Design Studio',
      content: 'Best investment I\'ve made in my career. The design courses are cutting-edge and practical.',
      avatar: '👨‍🎨',
      rating: 5
    },
  ];

  const partners = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Meta', logo: '📘' },
    { name: 'Netflix', logo: '📺' },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Master New Skills with
                <span className="text-accent block">Expert-Led Courses</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Join 100,000+ learners worldwide and transform your career with our comprehensive 
                online learning platform designed for real-world success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="w-full sm:w-auto">
                  <Button variant="accent" className="text-lg px-8 py-4 font-semibold w-full">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/auth/register" className="w-full sm:w-auto">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold w-full">
                    Start Learning Free
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span>4.9/5 from 50,000+ reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">👥</span>
                  <span>100,000+ students enrolled</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">📚</div>
                      <div className="text-sm font-medium">Course {i}</div>
                      <div className="text-xs opacity-75">In Progress</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Course Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from hundreds of courses across various disciplines and skill levels
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/courses"
                  className="group bg-surface border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 block"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} courses</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked courses from our top instructors to help you advance your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
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
                    <span className="text-sm text-muted-foreground">{course.category}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-primary">${course.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{course.students.toLocaleString()} students</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers with Skillora
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-surface border border-border rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                About Skillora
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Skillora is a leading online learning platform dedicated to helping individuals 
                master new skills and advance their careers. We believe that education should be 
                accessible, practical, and transformative.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert-led courses are designed by industry professionals and delivered through 
                an intuitive platform that adapts to your learning style. Whether you're a beginner 
                or an experienced professional, we have the right course for you.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Expert Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Industry Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <h3 className="font-semibold text-foreground mb-1">Goal-Oriented</h3>
                    <p className="text-xs text-muted-foreground">Focused learning paths</p>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <h3 className="font-semibold text-foreground mb-1">Fast-Paced</h3>
                    <p className="text-xs text-muted-foreground">Quick skill acquisition</p>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🤝</div>
                    <h3 className="font-semibold text-foreground mb-1">Community</h3>
                    <p className="text-xs text-muted-foreground">Peer support network</p>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <h3 className="font-semibold text-foreground mb-1">Certified</h3>
                    <p className="text-xs text-muted-foreground">Industry-recognized</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">hello@skillora.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">123 Learning Street, Education City, EC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-input" placeholder="John" />
                    </div>
                    <div>
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-input" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-input" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="form-label">Message</label>
                    <textarea className="form-input" rows={4} placeholder="Tell us more about your inquiry..."></textarea>
                  </div>
            
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform is trusted by top companies worldwide for employee training and development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="text-4xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  {partner.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 