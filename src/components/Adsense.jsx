import { useEffect, useRef, useState } from "react";

const Adsense = ({ slot, style = {} }) => {
  const adRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!adRef.current || isLoaded) return;

    const loadAd = () => {
      try {
        // Check if adsbygoogle is available
        if (typeof window !== "undefined" && window.adsbygoogle) {
          // Only push if the ad container is empty
          if (adRef.current && adRef.current.innerHTML.trim() === "") {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            setIsLoaded(true);
          }
        } else {
          // Retry if adsbygoogle isn't loaded yet
          setTimeout(loadAd, 300);
        }
      } catch (err) {
        console.error("Adsense error:", err);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadAd, 100);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <div style={{ width: "100%", textAlign: "center", minHeight: "90px", ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1231906160815613"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default Adsense;