import Avatar from './Avatar';
import Bio from './Bio';
import SocialLinks from './SocialLinks';

const Profile = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '400px' }}>
      <Avatar imageUrl="https://i.pravatar.cc/150?img=3" altText="Profile Pic" />
      <Bio
        name="Jane Developer"
        occupation="Frontend Engineer"
        description="Passionate about building great UIs with React + TypeScript."
      />
      <SocialLinks
        github="https://github.com/your-github"
        linkedin="https://linkedin.com/in/your-profile"
      />
    </div>
  );
};

export default Profile;
