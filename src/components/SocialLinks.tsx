type SocialLinksProps = {
  github: string;
  linkedin: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ github, linkedin }) => (
  <div>
    <a href={github} target="_blank" rel="noreferrer">GitHub</a> |{' '}
    <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
);

export default SocialLinks;
