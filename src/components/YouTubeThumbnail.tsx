"use client";

import React from 'react';
import { getYouTubeThumbnail, getFallbackThumbnail, getYouTubeThumbnailAsync } from '@/lib/youtube-thumbnails';

interface YouTubeThumbnailProps {
  url: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  [key: string]: string | boolean | undefined;
}

export const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ 
  url, 
  alt, 
  className, 
  lazy = true,
  ...props 
}) => {
  const [thumbnail, setThumbnail] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isVisible, setIsVisible] = React.useState(!lazy);
  const imgRef = React.useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (!lazy || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [lazy]);

  React.useEffect(() => {
    if (!isVisible || !url) return;

    const fetchThumbnail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // First try synchronous version (fast for individual videos)
        const syncThumbnail = getYouTubeThumbnail(url);
        if (syncThumbnail) {
          setThumbnail(syncThumbnail);
          setLoading(false);
          return;
        }
        
        // If no sync thumbnail, try async version (for playlists)
        const asyncThumbnail = await getYouTubeThumbnailAsync(url);
        setThumbnail(asyncThumbnail);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch thumbnail');
        setThumbnail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchThumbnail();
  }, [url, isVisible]);

  // Show fallback immediately for better UX
  const fallbackThumbnail = getFallbackThumbnail(url);

  // Show fallback for all content types
  if (!fallbackThumbnail && !thumbnail) {
    return null;
  }

  if (!isVisible) {
    return (
      <div 
        ref={imgRef}
        className={`aspect-video bg-gray-800 flex items-center justify-center ${className}`}
      >
        {fallbackThumbnail && (
          <img
            src={fallbackThumbnail}
            alt={alt}
            className="w-full h-full object-cover opacity-50"
            {...props}
          />
        )}
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`aspect-video bg-gray-800 flex items-center justify-center ${className}`}>
        {fallbackThumbnail && (
          <img
            src={fallbackThumbnail}
            alt={alt}
            className="w-full h-full object-cover opacity-50"
            {...props}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (error || !thumbnail) {
    if (fallbackThumbnail) {
      return (
        <img
          src={fallbackThumbnail}
          alt={alt}
          className={className}
          {...props}
        />
      );
    }
    return null;
  }

  return (
    <img
      src={thumbnail}
      alt={alt}
      className={className}
      {...props}
    />
  );
};
