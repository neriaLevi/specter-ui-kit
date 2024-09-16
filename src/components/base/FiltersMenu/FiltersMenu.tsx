import { Divider } from '@mui/material';
import {
  FiltersHeader,
  StyledFiltersMenu,
  Title,
  StyledDrawer,
  CloseMenuContainer,
  FiltersControllerButton,
} from './FiltersMenu.style';
import { useState } from 'react';
import { CloseIcon, FilterIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <FiltersMenu />
 * ```
 */
export function FiltersMenu() {
  const [open, toggleDrawer] = useState(false);

  return (
    <StyledFiltersMenu>
      <FiltersControllerButton onClick={() => toggleDrawer(true)}>
        <FilterIcon color={colorPalette.common.icon} size={18} />
        <Title>פילטרים</Title>
      </FiltersControllerButton>
      <StyledDrawer
        open={open}
        onClose={() => toggleDrawer(false)}
        hideBackdrop={true}
      >
        <FiltersHeader>
          <FilterIcon color={colorPalette.common.icon} size={18} />
          <Title>פילטרים</Title>
          <CloseMenuContainer onClick={() => toggleDrawer(false)}>
            <CloseIcon color={colorPalette.text.primary} size={25} />
          </CloseMenuContainer>
        </FiltersHeader>
        <Divider />
      </StyledDrawer>
    </StyledFiltersMenu>
  );
}