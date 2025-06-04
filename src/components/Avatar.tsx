type AvatarProps = {
  imageUrl: string;
  altText: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => (
  <img src={imageUrl} alt={altText} style={{ width: '150px', borderRadius: '50%' }} />
);

export default Avatar;
