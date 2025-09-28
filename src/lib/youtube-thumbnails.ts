// Cache for storing fetched thumbnails
const thumbnailCache = new Map<string, string>();

// Function to get playlist thumbnail using multiple methods
const getPlaylistThumbnail = async (playlistId: string): Promise<string | null> => {
  try {
    // Check cache first
    if (thumbnailCache.has(playlistId)) {
      return thumbnailCache.get(playlistId) || null;
    }

    // Method 1: Try oEmbed API (works for some playlists)
    try {
      const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/playlist?list=${playlistId}&format=json`;
      const response = await fetch(oEmbedUrl);
      
      if (response.ok) {
        const data = await response.json();
        if (data.thumbnail_url) {
          thumbnailCache.set(playlistId, data.thumbnail_url);
          return data.thumbnail_url;
        }
      }
    } catch (_error) {
      console.log('oEmbed failed for playlist:', playlistId);
    }

    // Method 2: Try to get the first video from the playlist and use its thumbnail
    // This is more reliable as it works for all playlists
    try {
      // Use a different approach - fetch the playlist page and extract the first video
      const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
      const response = await fetch(playlistUrl);
      
      if (response.ok) {
        const html = await response.text();
        
        // Extract the first video ID from the playlist page
        const videoIdMatch = html.match(/"videoId":"([^"]+)"/);
        if (videoIdMatch && videoIdMatch[1]) {
          const firstVideoId = videoIdMatch[1];
          const thumbnailUrl = `https://img.youtube.com/vi/${firstVideoId}/maxresdefault.jpg`;
          
          // Verify the thumbnail exists
          const thumbnailResponse = await fetch(thumbnailUrl, { method: 'HEAD' });
          if (thumbnailResponse.ok) {
            thumbnailCache.set(playlistId, thumbnailUrl);
            return thumbnailUrl;
          }
        }
      }
    } catch (_error) {
      console.log('Playlist page parsing failed for:', playlistId);
    }

    // Method 3: Try alternative playlist thumbnail patterns
    const alternativePatterns = [
      `https://i.ytimg.com/vi/${playlistId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi_webp/${playlistId}/maxresdefault.webp`,
      `https://img.youtube.com/vi/${playlistId}/maxresdefault.jpg`
    ];

    for (const pattern of alternativePatterns) {
      try {
        const response = await fetch(pattern, { method: 'HEAD' });
        if (response.ok) {
          thumbnailCache.set(playlistId, pattern);
          return pattern;
        }
      } catch (_error) {
        // Continue to next pattern
      }
    }
    
    return null;
  } catch (_error) {
    console.error('Error fetching playlist thumbnail:', _error);
    return null;
  }
};

// Function to get channel thumbnail
const getChannelThumbnail = async (channelId: string): Promise<string | null> => {
  try {
    // Check cache first
    if (thumbnailCache.has(channelId)) {
      return thumbnailCache.get(channelId) || null;
    }

    // Method 1: Try to get channel thumbnail by fetching the channel page
    try {
      const channelUrl = `https://www.youtube.com/@${channelId}`;
      const response = await fetch(channelUrl);
      
      if (response.ok) {
        const html = await response.text();
        
        // Extract channel thumbnail from the page
        const thumbnailMatch = html.match(/"avatar":\s*{\s*"thumbnails":\s*\[\s*{\s*"url":\s*"([^"]+)"/);
        if (thumbnailMatch && thumbnailMatch[1]) {
          const thumbnailUrl = thumbnailMatch[1];
          thumbnailCache.set(channelId, thumbnailUrl);
          return thumbnailUrl;
        }
        
        // Alternative pattern for channel avatar
        const avatarMatch = html.match(/"avatar":\s*{\s*"thumbnails":\s*\[\s*{\s*"url":\s*"([^"]+)"/);
        if (avatarMatch && avatarMatch[1]) {
          const thumbnailUrl = avatarMatch[1];
          thumbnailCache.set(channelId, thumbnailUrl);
          return thumbnailUrl;
        }
      }
    } catch (_error) {
      console.log('Channel page parsing failed for:', channelId);
    }

    // Method 2: Try oEmbed API for channel
    try {
      const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/@${channelId}&format=json`;
      const response = await fetch(oEmbedUrl);
      
      if (response.ok) {
        const data = await response.json();
        if (data.thumbnail_url) {
          thumbnailCache.set(channelId, data.thumbnail_url);
          return data.thumbnail_url;
        }
      }
    } catch (_error) {
      console.log('oEmbed failed for channel:', channelId);
    }

    // Method 3: Try to get the first video from the specific channel and use its thumbnail
    try {
      const channelUrl = `https://www.youtube.com/@${channelId}/videos`;
      const response = await fetch(channelUrl);
      
      if (response.ok) {
        const html = await response.text();
        
        // Extract the first video ID from the channel's videos page
        const videoIdMatch = html.match(/"videoId":"([^"]+)"/);
        if (videoIdMatch && videoIdMatch[1]) {
          const firstVideoId = videoIdMatch[1];
          console.log(`Found first video from channel ${channelId}: ${firstVideoId}`);
          const thumbnailUrl = `https://img.youtube.com/vi/${firstVideoId}/maxresdefault.jpg`;
          
          // Verify the thumbnail exists
          const thumbnailResponse = await fetch(thumbnailUrl, { method: 'HEAD' });
          if (thumbnailResponse.ok) {
            console.log(`Using thumbnail from channel ${channelId}'s video: ${thumbnailUrl}`);
            thumbnailCache.set(channelId, thumbnailUrl);
            return thumbnailUrl;
          }
        }
      }
    } catch (_error) {
      console.log('Channel videos page parsing failed for:', channelId);
    }
    
    return null;
  } catch (_error) {
    console.error('Error fetching channel thumbnail:', _error);
    return null;
  }
};

import React from 'react';

// Enhanced YouTube thumbnail extraction utility (synchronous version)
export const getYouTubeThumbnail = (url: string): string | null => {
  try {
    // Only return thumbnails for actual videos and playlists, not channels or other content
    
    // Handle individual videos (youtu.be format)
    const youtuBeMatch = url.match(/youtu\.be\/([^&\n?#]+)/);
    if (youtuBeMatch) {
      return `https://img.youtube.com/vi/${youtuBeMatch[1]}/maxresdefault.jpg`;
    }
    
    // Handle individual videos (youtube.com/watch format)
    const videoMatch = url.match(/youtube\.com\/watch\?v=([^&\n?#]+)/);
    if (videoMatch) {
      return `https://img.youtube.com/vi/${videoMatch[1]}/maxresdefault.jpg`;
    }
    
    // Handle YouTube embed format
    const embedMatch = url.match(/youtube\.com\/embed\/([^&\n?#]+)/);
    if (embedMatch) {
      return `https://img.youtube.com/vi/${embedMatch[1]}/maxresdefault.jpg`;
    }
    
    // Handle YouTube shorts
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^&\n?#]+)/);
    if (shortsMatch) {
      return `https://img.youtube.com/vi/${shortsMatch[1]}/maxresdefault.jpg`;
    }
    
    // Handle playlists with video ID (when you're watching a video from a playlist)
    const playlistWithVideoMatch = url.match(/youtube\.com\/watch\?v=([^&\n?#]+).*list=([^&\n?#]+)/);
    if (playlistWithVideoMatch) {
      return `https://img.youtube.com/vi/${playlistWithVideoMatch[1]}/maxresdefault.jpg`;
    }
    
    // Handle standalone playlists (without video ID) - these need async fetching
    const playlistMatch = url.match(/youtube\.com\/playlist\?list=([^&\n?#]+)/);
    if (playlistMatch) {
      // For playlists, we'll return null and let the async version handle it
      return null;
    }
    
    // Handle YouTube live streams
    const liveMatch = url.match(/youtube\.com\/watch\?v=([^&\n?#]+).*live/);
    if (liveMatch) {
      return `https://img.youtube.com/vi/${liveMatch[1]}/maxresdefault.jpg`;
    }
    
    // For channels, articles, and other non-video content, return null
    // This will prevent showing video thumbnails for non-video content
    return null;
  } catch (_error) {
    console.error('Error extracting YouTube thumbnail:', _error);
    return null;
  }
};

// Async version for fetching playlist and channel thumbnails
export const getYouTubeThumbnailAsync = async (url: string): Promise<string | null> => {
  try {
    // First try the synchronous version (fast for individual videos)
    const syncThumbnail = getYouTubeThumbnail(url);
    if (syncThumbnail) {
      return syncThumbnail;
    }
    
    // Handle standalone playlists (without video ID) - fetch from oEmbed
    const playlistMatch = url.match(/youtube\.com\/playlist\?list=([^&\n?#]+)/);
    if (playlistMatch) {
      const playlistId = playlistMatch[1];
      const thumbnail = await getPlaylistThumbnail(playlistId);
      return thumbnail;
    }
    
    // Handle YouTube channels
    const channelMatch = url.match(/youtube\.com\/(?:c\/|channel\/|@)([^\/\?]+)/);
    if (channelMatch) {
      const channelId = channelMatch[1];
      console.log('Fetching channel thumbnail for:', channelId);
      const thumbnail = await getChannelThumbnail(channelId);
      console.log('Channel thumbnail result:', thumbnail);
      return thumbnail;
    }
    
    return null;
  } catch (_error) {
    console.error('Error extracting YouTube thumbnail async:', _error);
    return null;
  }
};

// Hook for managing async thumbnail fetching
export const useYouTubeThumbnail = (url: string) => {
  const [thumbnail, setThumbnail] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchThumbnail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // First try synchronous version
        const syncThumbnail = getYouTubeThumbnail(url);
        if (syncThumbnail) {
          setThumbnail(syncThumbnail);
          setLoading(false);
          return;
        }
        
        // If no sync thumbnail, try async version
        const asyncThumbnail = await getYouTubeThumbnailAsync(url);
        setThumbnail(asyncThumbnail);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch thumbnail');
        setThumbnail(null);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchThumbnail();
    }
  }, [url]);

  return { thumbnail, loading, error };
};

// Fallback thumbnail for when YouTube thumbnail fails
export const getFallbackThumbnail = (url: string): string => {
  // Use study aesthetic thumbnail for all content types
  const studyAestheticThumbnail = 'https://img.youtube.com/vi/9kzE8isXlQY/maxresdefault.jpg';
  
  // Provide thumbnails for all content types
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    // YouTube content gets study aesthetic thumbnail
    return studyAestheticThumbnail;
  } else if (url.includes('drive.google.com')) {
    // Google Drive documents get study aesthetic thumbnail
    return studyAestheticThumbnail;
  } else if (url.includes('geeksforgeeks.org') || url.includes('w3schools.com') || url.includes('leetcode.com') || url.includes('hackerrank.com')) {
    // Educational websites get study aesthetic thumbnail
    return studyAestheticThumbnail;
  } else if (url.includes('github.com')) {
    // GitHub repositories get study aesthetic thumbnail
    return studyAestheticThumbnail;
  } else {
    // All other content gets study aesthetic thumbnail
    return studyAestheticThumbnail;
  }
};

// Get resource type for better categorization
export const getResourceType = (url: string): string => {
  if (url.includes('youtube.com/playlist') || url.includes('list=')) {
    return 'Playlist';
  } else if (url.includes('youtube.com/shorts')) {
    return 'Short';
  } else if (url.includes('youtube.com/live') || url.includes('youtube.com/watch') && url.includes('live')) {
    return 'Live';
  } else if (url.includes('youtube.com/c/') || url.includes('youtube.com/channel/') || url.includes('youtube.com/@')) {
    return 'Channel';
  } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'Video';
  } else if (url.includes('drive.google.com')) {
    return 'Document';
  } else if (url.includes('github.com')) {
    return 'Code';
  } else if (url.includes('leetcode.com') || url.includes('hackerrank.com')) {
    return 'Practice';
  } else if (url.includes('w3schools.com')) {
    return 'Tutorial';
  } else {
    return 'Article';
  }
};
