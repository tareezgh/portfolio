import styled from "styled-components";
import { PrimaryColor } from "../styles/style";

const SocialIcon: React.FC<{ href: string; imageSrc: string; alt: string }> = ({
  href,
  imageSrc,
  alt,
}) => {
  return (
    <IconFrame href={href} target="_blank">
      <Image src={imageSrc} alt={alt} />
    </IconFrame>
  );
};

export default SocialIcon;

const IconFrame = styled.a`
  align-items: center;
  text-decoration: none;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  transition: fill 0.3s ease;

  &:hover {
    filter: invert(50%);
  }

  ${IconFrame}:hover & path {
    fill: ${PrimaryColor};
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
