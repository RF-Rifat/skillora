import { Link } from 'react-router';
import { Button, Card, Badge, Container } from '../components';

const DashboardPage = () => {
  const stats = [
    {
      title: 'Total Courses',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: '📚',
      color: 'bg-primary'
    },
    {
      title: 'In Progress',
      value: '5',
      change: '+1',
      changeType: 'positive',
      icon: '🔄',
      color: 'bg-accent'
    },
    {
      title: 'Completed',
      value: '7',
      change: '+3',
      changeType: 'positive',
      icon: '✅',
      color: 'bg-success'
    },
    {
      title: 'Average Score',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: '📊',
      color: 'bg-info'
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      progress: 75,
      lastAccessed: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      nextLesson: 'React Hooks Introduction'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Michael Chen',
      progress: 45,
      lastAccessed: '1 day ago',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop',
      nextLesson: 'Data Visualization with Matplotlib'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Davis',
      progress: 90,
      lastAccessed: '3 days ago',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
      nextLesson: 'Final Project Submission'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'course',
      title: 'New lesson available',
      message: 'React Hooks Introduction is now available in your React course',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Certificate earned',
      message: 'Congratulations! You\'ve earned a certificate for JavaScript Fundamentals',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Continue learning',
      message: 'You haven\'t studied for 2 days. Keep up the momentum!',
      time: '2 days ago',
      read: true
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'course': return '📚';
      case 'achievement': return '🏆';
      case 'reminder': return '⏰';
      default: return '📢';
    }
  };

  return (
    <Container>
      {/* Welcome Section */}
      <Card className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="opacity-90">Ready to continue your learning journey?</p>
          </div>
          <div className="text-4xl">🚀</div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-surface border border-default rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                {stat.icon}
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-success' : 'text-error'
              }`}>
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-text mb-1">{stat.value}</p>
              <p className="text-text-muted">{stat.title}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <Card className="bg-surface border border-default rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text">Recent Courses</h2>
              <Link to="/dashboard/my-courses" className="text-primary hover:text-primary-hover transition-colors">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-default">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-text mb-1">{course.title}</h3>
                    <p className="text-sm text-text-muted mb-2">by {course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-text-muted">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-surface-hover rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Link
                        to={`/dashboard/courses/${course.id}/lessons/1`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Continue
                      </Link>
                    </div>
                    <p className="text-xs text-text-muted mt-2">
                      Next: {course.nextLesson}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Notifications */}
        <div className="lg:col-span-1">
          <Card className="bg-surface border border-default rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text">Notifications</h2>
              <button className="text-primary hover:text-primary-hover transition-colors text-sm">
                Mark all read
              </button>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    notification.read ? 'bg-background border-default' : 'bg-primary/5 border-primary/20'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <h4 className={`font-medium mb-1 ${
                        notification.read ? 'text-text' : 'text-primary'
                      }`}>
                        {notification.title}
                      </h4>
                      <p className="text-sm text-text-muted mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-text-muted">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-primary hover:text-primary-hover transition-colors text-sm">
                View all notifications
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-surface border border-default rounded-xl p-6">
        <h2 className="text-xl font-bold text-text mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/courses"
            className="flex items-center space-x-3 p-4 bg-background border border-default rounded-lg hover:border-primary transition-colors"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              🔍
            </div>
            <div>
              <p className="font-medium text-text">Browse Courses</p>
              <p className="text-sm text-text-muted">Find new courses</p>
            </div>
          </Link>

          <Link
            to="/dashboard/my-courses"
            className="flex items-center space-x-3 p-4 bg-background border border-default rounded-lg hover:border-primary transition-colors"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
              📚
            </div>
            <div>
              <p className="font-medium text-text">My Courses</p>
              <p className="text-sm text-text-muted">Continue learning</p>
            </div>
          </Link>

          <Link
            to="/dashboard/profile"
            className="flex items-center space-x-3 p-4 bg-background border border-default rounded-lg hover:border-primary transition-colors"
          >
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white">
              👤
            </div>
            <div>
              <p className="font-medium text-text">Profile</p>
              <p className="text-sm text-text-muted">Update settings</p>
            </div>
          </Link>

          <button className="flex items-center space-x-3 p-4 bg-background border border-default rounded-lg hover:border-primary transition-colors">
            <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center text-white">
              🏆
            </div>
            <div>
              <p className="font-medium text-text">Certificates</p>
              <p className="text-sm text-text-muted">View achievements</p>
            </div>
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default DashboardPage; 