import React, { useState } from 'react';
import {
  StyledMediaViewer,
  StyledVideo,
  PhotoOverlay,
  TwoMediaWrapper,
  SingleMediaWrapper,
  PhotoContainer,
} from './MediaViewer.style';
import { Button, Typography } from '@mui/material';

export interface MediaItem {
  original: string;
  thumbnail?: string;
  description?: string;
  type?: 'image' | 'video';
}

export interface MediaViewerProps {
  items: MediaItem[];
  isSinglePostOpen?: boolean;
  onViewMore?: () => void;
  setIsSinglePostOpen?: (isOpen: boolean) => void;
}

export function MediaViewer({
  items,
  isSinglePostOpen: isSinglePostOpenProp = false,
  onViewMore,
  setIsSinglePostOpen,
  ...props
}: MediaViewerProps) {
  const [isSinglePostOpen, setLocalIsSinglePostOpen] = useState<boolean>(isSinglePostOpenProp);

  React.useEffect(() => {
    setLocalIsSinglePostOpen(isSinglePostOpenProp);
  }, [isSinglePostOpenProp]);

  if (!items || items.length === 0) return null;

  const remainingPhotosCount = items.length - 2;

  const handleViewMoreClick = () => {
    if (onViewMore) onViewMore();
    setLocalIsSinglePostOpen(true);
    if (setIsSinglePostOpen) setIsSinglePostOpen(true); 
  };

  const renderMedia = (item: MediaItem) => {
    if (item.type === 'video') {
      return (
        <StyledVideo key={item.original} controls>
          <source src={item.original} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      );
    }
    return (
      <img
        key={item.original}
        src={item.original}
        alt={item.description || 'Media'}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  };

  
  return (
    <StyledMediaViewer {...props}>
      {items.length === 2 ? (
        <TwoMediaWrapper>
          {items.slice(0, 2).map((item, index) => (
            <PhotoContainer key={index}>{renderMedia(item)}</PhotoContainer>
          ))}
        </TwoMediaWrapper>
      ) : items.length > 2 ? (
        <TwoMediaWrapper>
          <PhotoContainer>{renderMedia(items[0])}</PhotoContainer>
          <PhotoContainer style={{ position: 'relative' }}>
            {renderMedia(items[1])}
            {!isSinglePostOpen && remainingPhotosCount > 0 && (
              <PhotoOverlay>
                <Button onClick={handleViewMoreClick}>
                  <Typography>+{remainingPhotosCount}</Typography>
                </Button>
              </PhotoOverlay>
            )}
          </PhotoContainer>
        </TwoMediaWrapper>
      ) : (
        <SingleMediaWrapper>{renderMedia(items[0])}</SingleMediaWrapper>
      )}
    </StyledMediaViewer>
  );
}