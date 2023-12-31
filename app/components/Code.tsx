"use client";
import React, { FC, useEffect, useState } from "react";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { useTheme } from "next-themes";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animated: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  language,
  show,
  animationDelay,
  animated,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState(animated ? "" : code);

  //split the code animatedly
  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);
        return () => clearInterval(intervalId);
      }, animationDelay || 15);
    }
  }, [code, show, animated, animationDelay]);

  //number of lines
  const lines = text.split(/\r\n|\r|n/).length;

  const theme =
    applicationTheme === "light" ? themes.nightOwlLight : themes.nightOwl;

  return (
    <Highlight code={text} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            "transition-all no-scrollbar duratrion-100 py-0 w-fit bg-transparent h-fit"
          }
          style={{
            maxHeight: show ? lines * 200 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line })}
              style={{ position: "relative" }}
            >
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
