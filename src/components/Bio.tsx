type BioProps = {
  name: string;
  occupation: string;
  description: string;
};

const Bio: React.FC<BioProps> = ({ name, occupation, description }) => (
  <div>
    <h2>{name}</h2>
    <h4>{occupation}</h4>
    <p>{description}</p>
  </div>
);

export default Bio;
