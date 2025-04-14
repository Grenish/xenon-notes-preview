"use client";

import { useState } from "react";
import MetallicPaint, { parseLogoImage } from "@/components/ui/metallicPaint";

export default function MetallicPaintExample() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [params, setParams] = useState({
    patternScale: 1,
    refraction: 0.015,
    edge: 1,
    patternBlur: 0.005,
    liquid: 0.07,
    speed: 0.3,
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await parseLogoImage(file);
      setImageData(result.imageData);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block mb-2">Upload an image:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Pattern Scale: {params.patternScale}</label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={params.patternScale}
            onChange={(e) =>
              setParams({ ...params, patternScale: parseFloat(e.target.value) })
            }
            className="w-full"
          />
        </div>
        <div>
          <label>Refraction: {params.refraction}</label>
          <input
            type="range"
            min="0"
            max="0.05"
            step="0.001"
            value={params.refraction}
            onChange={(e) =>
              setParams({ ...params, refraction: parseFloat(e.target.value) })
            }
            className="w-full"
          />
        </div>
        <div>
          <label>Edge: {params.edge}</label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={params.edge}
            onChange={(e) =>
              setParams({ ...params, edge: parseFloat(e.target.value) })
            }
            className="w-full"
          />
        </div>
        <div>
          <label>Speed: {params.speed}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={params.speed}
            onChange={(e) =>
              setParams({ ...params, speed: parseFloat(e.target.value) })
            }
            className="w-full"
          />
        </div>
      </div>

      <div className="w-[500px] h-[500px] border">
        {imageData ? (
          <MetallicPaint imageData={imageData} params={params} />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            Please upload an image
          </div>
        )}
      </div>
    </div>
  );
}
