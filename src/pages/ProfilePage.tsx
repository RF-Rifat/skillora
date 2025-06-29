import { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate learner and software developer with a love for React and modern web technologies.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    twitter: '@johndoe',
    linkedin: 'linkedin.com/in/johndoe'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile update:', profileData);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    
    if (!passwordData.currentPassword) newErrors.currentPassword = 'Current password is required';
    if (!passwordData.newPassword) newErrors.newPassword = 'New password is required';
    if (passwordData.newPassword.length < 8) newErrors.newPassword = 'Password must be at least 8 characters';
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle password change logic here
    console.log('Password change:', passwordData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile Information', icon: '👤' },
    { id: 'password', name: 'Change Password', icon: '🔒' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'privacy', name: 'Privacy Settings', icon: '🛡️' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text mb-2">Profile Settings</h1>
        <p className="text-text-muted">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-surface border border-default rounded-xl p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-text hover:bg-surface-hover'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-surface border border-default rounded-xl p-6">
            {/* Profile Information Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">Profile Information</h2>
                
                {/* Profile Picture */}
                <div className="mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        JD
                      </div>
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent-hover transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">Profile Picture</h3>
                      <p className="text-sm text-text-muted mb-2">
                        Upload a new profile picture (JPG, PNG, GIF up to 5MB)
                      </p>
                      <div className="flex space-x-2">
                        <button className="btn-primary text-sm">Upload Photo</button>
                        <button className="btn-outline text-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={profileData.firstName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={profileData.lastName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={profileData.bio}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={profileData.location}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="City, Country"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={profileData.website}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="twitter" className="form-label">
                        Twitter
                      </label>
                      <input
                        id="twitter"
                        name="twitter"
                        type="text"
                        value={profileData.twitter}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="@username"
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedin" className="form-label">
                        LinkedIn
                      </label>
                      <input
                        id="linkedin"
                        name="linkedin"
                        type="text"
                        value={profileData.linkedin}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="linkedin.com/in/username"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Change Password Tab */}
            {activeTab === 'password' && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">Change Password</h2>
                
                <form onSubmit={handlePasswordSubmit} className="space-y-6 max-w-md">
                  <div>
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className={`form-input ${errors.currentPassword ? 'border-error' : ''}`}
                    />
                    {errors.currentPassword && <p className="form-error">{errors.currentPassword}</p>}
                  </div>

                  <div>
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className={`form-input ${errors.newPassword ? 'border-error' : ''}`}
                    />
                    {errors.newPassword && <p className="form-error">{errors.newPassword}</p>}
                    <p className="text-sm text-text-muted mt-1">
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className={`form-input ${errors.confirmPassword ? 'border-error' : ''}`}
                    />
                    {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-background border border-default rounded-lg">
                    <div>
                      <h3 className="font-medium text-text">Email Notifications</h3>
                      <p className="text-sm text-text-muted">Receive email updates about your courses</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-surface-hover peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-background border border-default rounded-lg">
                    <div>
                      <h3 className="font-medium text-text">Push Notifications</h3>
                      <p className="text-sm text-text-muted">Get notified about new lessons and updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-surface-hover peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-background border border-default rounded-lg">
                    <div>
                      <h3 className="font-medium text-text">Course Reminders</h3>
                      <p className="text-sm text-text-muted">Remind me to continue my courses</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-surface-hover peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings Tab */}
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-background border border-default rounded-lg">
                    <div>
                      <h3 className="font-medium text-text">Profile Visibility</h3>
                      <p className="text-sm text-text-muted">Allow other students to see your profile</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-surface-hover peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-background border border-default rounded-lg">
                    <div>
                      <h3 className="font-medium text-text">Course Progress</h3>
                      <p className="text-sm text-text-muted">Show your course progress to instructors</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-surface-hover peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-background border border-default rounded-lg">
                    <div>
                      <h3 className="font-medium text-text">Data Analytics</h3>
                      <p className="text-sm text-text-muted">Help us improve by sharing anonymous usage data</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-surface-hover peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-surface-hover border border-default rounded-lg">
                  <h3 className="font-medium text-text mb-2">Danger Zone</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="btn-outline border-error text-error hover:bg-error hover:text-white">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 