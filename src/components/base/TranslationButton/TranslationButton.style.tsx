import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';

const StyledTranslationButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colorPalette.colors.primary,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.colorPalette.colors.secondary,
  },
  minWidth: 'auto',
  padding: '8px',
  borderRadius: '4px',
}));

const StyledTranslateIcon = styled(TranslateIcon)(() => ({
  color: 'inherit',
}));

export { StyledTranslationButton, StyledTranslateIcon };
