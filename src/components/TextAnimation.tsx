import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../styles/home";

interface TextAnimationProps {
  texts: string[];
}

const TextAnimation: React.FC<TextAnimationProps> = ({ texts }) => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const interval = setInterval(() => {
      currentText = texts[textIndex].slice(0, currentIndex);

      isDeleting ? currentIndex-- : currentIndex++;

      if (currentIndex === texts[textIndex].length + 1) {
        isDeleting = true;
      }

      if (currentIndex === -1) {
        isDeleting = false;
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }

      setDisplayedText(currentText);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [textIndex, texts]);

  return <AnimatedTitle>{displayedText}</AnimatedTitle>;
};

export default TextAnimation;

const AnimatedTitle = styled(Title)`
  overflow: hidden;
  border-right: 2px solid #333;
  white-space: nowrap;
`;
