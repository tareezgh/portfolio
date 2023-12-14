import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IntroTitle } from "../styles/home";
import { MidBlackColor } from "../styles/style";

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
      currentText = texts[textIndex].slice(0, currentIndex + 1);

      isDeleting ? currentIndex-- : currentIndex++;

      if (currentIndex === texts[textIndex].length) {
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

const AnimatedTitle = styled(IntroTitle)`
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid ${MidBlackColor};
  white-space: nowrap;
`;
