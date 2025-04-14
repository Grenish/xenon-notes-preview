"use client";

import MetallicPaint, { parseLogoImage } from "./ui/metallicPaint";
import { useState, useEffect } from "react";

const LOGO_PATH = "/xenon-black.svg";
const CACHE_KEY = "xenon-logo-cache";
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function MetalLogo() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadImage() {
      try {
        // Check if we have cached data
        const cachedData = checkCache();
        if (cachedData) {
          setImageData(cachedData);
          setLoading(false);
          return;
        }

        // If no cache, fetch the image
        const response = await fetch(LOGO_PATH, {
          cache: "force-cache", // Use browser's cache when possible
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }
        
        const blob = await response.blob();
        const file = new File([blob], "logo.svg", { 
          type: blob.type || 'image/svg+xml' 
        });

        // Process the image on the next tick to avoid blocking the UI
        setTimeout(async () => {
          try {
            const parsedData = await parseLogoImage(file);
            
            if (!parsedData || !parsedData.imageData) {
              throw new Error("Failed to parse image data");
            }
            
            // Cache the result
            cacheImageData(parsedData.imageData);
            setImageData(parsedData.imageData);
            setError(null);
          } catch (err) {
            handleError(err);
          } finally {
            setLoading(false);
          }
        }, 0);
      } catch (err) {
        handleError(err);
        setLoading(false);
      }
    }

    loadImage();
  }, []);

  function checkCache() {
    try {
      const cacheData = localStorage.getItem(CACHE_KEY);
      if (!cacheData) return null;
      
      const { timestamp, width, height, data } = JSON.parse(cacheData);
      
      // Check if cache is expired
      if (Date.now() - timestamp > CACHE_EXPIRY) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
      
      // Reconstruct ImageData from cached data
      const uint8Array = new Uint8ClampedArray(Object.values(data));
      return new ImageData(uint8Array, width, height);
    } catch (err) {
      console.warn("Failed to retrieve from cache:", err);
      return null;
    }
  }

  function cacheImageData(data: ImageData) {
    try {
      // Store necessary properties to reconstruct ImageData
      const cacheObj = {
        timestamp: Date.now(),
        width: data.width,
        height: data.height,
        data: Array.from(data.data)
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObj));
    } catch (err) {
      console.warn("Failed to cache image data:", err);
    }
  }

  function handleError(err: unknown) {
    console.error("Error loading image:", err);
    setError(err instanceof Error ? err.message : "Failed to load image");
  }

  if (error) {
    return <div className="w-full h-full flex items-center justify-center text-red-500">{error}</div>;
  }

  if (loading || !imageData) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        <div className="animate-pulse">Loading logo...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <MetallicPaint
        imageData={imageData}
        params={{
          edge: 0,
          patternBlur: 0.019,
          patternScale: 4,
          refraction: 0.005,
          speed: 0.15,
          liquid: 0.24,
        }}
      />
    </div>
  );
}
