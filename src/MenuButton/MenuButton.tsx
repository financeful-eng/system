import * as React from 'react';
import styled from 'styled-components';
import {
  Menu,
  MenuButton as ReachButton,
  MenuList,
  MenuItem as ReachMenuItem,
} from '@reach/menu-button';
import type { MenuItemProps as ReachMenuItemProps } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { Button } from '../Button';
import type { ButtonProps, ButtonVariantsMinusPrimary } from '../Button';
import Caret from '../Caret';
import { ChangeTypeOfKeys } from '../.types/styled';
import { WithChildren } from '../.types/props';

const StyledMenuList = styled.div`
  box-shadow: ${({ theme }) => theme.elevation[8]};
  border-radius: 6px;

  /* reach ui overrides */
  &[data-reach-menu-list] {
    background: ${({ theme }) => theme.surfaces[1]};
    padding: 8px 0;
    border: 1px solid ${({ theme }) => theme.border};
  }

  & > [data-reach-menu-item] {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.text.primary};
    transition: background 0.2s ease-in;
    & .MenuItem-Icon {
      margin-right: 8px;
      height: 16px;
      width: 16px;
      fill: currentColor;
    }
    &:hover {
      background: ${({ theme }) => theme.overlay.white.hover};
    }
  }
`;

/* Remove the "Primary" variant from the button props so that
 *  any dropdown button can't be rendered as the primary color / main CTA
 *  and remove unneccessary required props that are taken care of.
 */

type __ButtonComponentProps = Omit<ButtonProps, 'onClick' | 'as' | 'children'>;
type ButtonComponentProps = ChangeTypeOfKeys<
  __ButtonComponentProps,
  'variant',
  Required<ButtonVariantsMinusPrimary>
>;

interface MenuButtonProps extends WithChildren {
  buttonProps: ButtonComponentProps;
  defaultText: string;
  useSelectedItemAsText?: boolean;
  'data-testid'?: string;
}

function compose(theirHandler: () => void, ourHandler: () => void): () => void {
  return () => {
    theirHandler();
    ourHandler();
  };
}

/////////////////////////////////////////////////////////////////

type IMenuContext = {
  useSelectedItemAsText: boolean;
  setSelectedItemHandler: (t: string) => void;
};

const MenuContext = React.createContext<IMenuContext | null>(null);

function useMenuContext() {
  const context = React.useContext(MenuContext);

  if (!context) {
    throw new Error(
      '[@financeful-eng]: useMenuContext must be used within a MenuContextProvider ',
    );
  }
  return context;
}

/////////////////////////////////////////////////////////////////

function MenuButton({
  buttonProps,
  defaultText,
  useSelectedItemAsText = false,
  children,
  ...rest
}: MenuButtonProps) {
  const [selectedItem, setSelectedItem] = React.useState(defaultText);
  const [useSelectedItemAsButtonText] = React.useState(useSelectedItemAsText);

  const setSelectedItemHandler = React.useCallback(
    (t: string) => {
      if (!useSelectedItemAsButtonText) return;

      setSelectedItem(t);
    },
    [useSelectedItemAsButtonText],
  );

  const contextValue = React.useMemo<IMenuContext>(
    () => ({ useSelectedItemAsText, setSelectedItemHandler }),
    [useSelectedItemAsButtonText],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Menu data-testid={rest['data-testid']}>
        <ReachButton as={Button} {...buttonProps}>
          {selectedItem}
          <Caret aria-hidden className="caret" />
        </ReachButton>
        <MenuList as={StyledMenuList}>{children}</MenuList>
      </Menu>
    </MenuContext.Provider>
  );
}

/////////////////////////////////////////////////////////////////

interface MenuItemProps {
  onSelect: ReachMenuItemProps['onSelect'];
  children: string;
  icon?: React.ComponentType<{ className?: string }>;
}

function MenuItem({ onSelect, children, icon: IconComp }: MenuItemProps) {
  const { setSelectedItemHandler } = useMenuContext();
  return (
    <ReachMenuItem onSelect={compose(onSelect, () => setSelectedItemHandler(children))}>
      {IconComp && <IconComp className="MenuItem-Icon" />}
      {children}
    </ReachMenuItem>
  );
}

export { MenuButton, MenuItem };
export type { MenuItemProps, MenuButtonProps };
