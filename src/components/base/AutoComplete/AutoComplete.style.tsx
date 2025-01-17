import {
  Autocomplete,
  darken,
  styled,
  TextField,
  Typography,
} from '@mui/material';

export const StyledAutoComplete = styled(Autocomplete)`
  width: 45vw;
  & .MuiInputBase-root {
    border: 2px solid ${({ theme }) => theme.colorPalette.colors.spBlue_10};
    direction: ltr;
    border-radius: 10px;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colorPalette.link.color};
    }
  }

  & .MuiAutocomplete-inputRoot {
    flex-direction: row-reverse;
  }

  fieldset {
    border: 0px !important;
  }

  input {
    direction: rtl;
  }

  & .MuiAutocomplete-endAdornment {
    left: 9px;
    right: unset;
  }

  & .MuiOutlinedInput-root {
    padding: 0 !important;
    padding-right: 1rem !important;
  }

  & .MuiAutocomplete-tag {
    background-color: ${({ theme }) => theme.colorPalette.colors.spBlue_20};
    color: ${({ theme }) => theme.colorPalette.colors.primary};
    height: unset;

    :hover {
      background-color: ${({ theme }) =>
        darken(theme.colorPalette.colors.spBlue_20, 0.05)};
    }
  }

  & .MuiChip-deleteIcon {
    pointer-events: auto;
  }

  & .MuiAutocomplete-clearIndicator {
    display: none;
  }
`;

export const CustomTextField = styled(TextField)``;

export const TrashButton = styled('button')`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledLabel = styled(Typography)`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-right: 0.3rem;
`;

export const StyledComponent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
`;
