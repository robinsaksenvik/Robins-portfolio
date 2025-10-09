import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export function TypewriterText({ 
  text, 
  speed = 100, 
  delay = 0, 
  showCursor = true 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const startTimer = setTimeout(() => setShouldStart(true), delay);
      return () => clearTimeout(startTimer);
    } else {
      setShouldStart(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!shouldStart) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, shouldStart]);

  return (
    <span>
      {displayText}
      {showCursor && !isComplete && (
        <span className="text-foreground/60 ml-1">|</span>
      )}
    </span>
  );
}