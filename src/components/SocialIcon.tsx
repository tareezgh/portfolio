import styled from "styled-components";

const SocialIcon: React.FC<{ href: string; imageSrc: string; alt: string }> = ({
  href,
  imageSrc,
  alt,
}) => {
  return (
    <IconFrame href={href} target="_blank">
      <img src={imageSrc} alt={alt} />
    </IconFrame>
  );
};

export default SocialIcon;

const IconFrame = styled.a`
  align-items: center;
  text-decoration: none;
  margin-right: 20px;

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
