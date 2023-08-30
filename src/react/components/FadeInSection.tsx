import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const FadeInSection: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (domRef.current) observer.observe(domRef.current);
  }, []);
  return (
    <Box className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef} w="100%">
      {children}
    </Box>
  );
};

export default FadeInSection;
