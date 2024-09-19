import React, { useState } from 'react';
import { StyledTranslationButton, StyledTranslateIcon } from './TranslationButton.style';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export interface TranslationButtonProps {
  onLanguageChange: (language: string) => void;
  supportedLanguages: string[];
}

const languageLabels: Record<string, string> = {
  en: 'English',
  ar: 'Arabic',
  he: 'Hebrew',
};

export function TranslationButton({ onLanguageChange, supportedLanguages }: TranslationButtonProps) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
    handleClose();
  };

  return (
    <>
      <StyledTranslationButton
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <StyledTranslateIcon />
      </StyledTranslationButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && open}
        onClose={handleClose}
      >
        {supportedLanguages.length > 0 ? (
          supportedLanguages.map((language) => (
            <MenuItem key={language} onClick={() => handleLanguageChange(language)}>
              {languageLabels[language] || language.toUpperCase()}
            </MenuItem>
          ))
        ) : (
          <MenuItem>No languages available</MenuItem>
        )}
      </Menu>
    </>
  );
}