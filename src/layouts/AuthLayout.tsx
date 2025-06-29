import { Outlet, Link } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="ml-3 text-3xl font-bold text-text">Skillora</span>
            </Link>
          </div>

          {/* Auth Form */}
          <Outlet />
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary to-primary-hover items-center justify-center">
        <div className="max-w-lg text-center text-white px-8">
          <h1 className="text-4xl font-bold mb-6">
            Transform Your Career with Skillora
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who have already transformed their careers 
            with our expert-led courses designed for real-world success.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center"
                  >
                    <span className="text-sm font-medium">👤</span>
                  </div>
                ))}
              </div>
              <span className="text-sm opacity-90">Join 10,000+ learners</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm opacity-90">4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm opacity-90">500+ courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 