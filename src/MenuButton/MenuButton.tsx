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
  --border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.elevation[8]};
  border-radius: 6px;
  width: 300px;
  font-size: 14px;
  font-weight: 400 !important;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 220px;
  }

  & header.Menu-Title {
    padding: 8px 8px 4px 16px;
    border-bottom: 1px solid var(--border);
    color: ${({ theme }) => theme.colors.onSurface.medium};
  }
  /* reach ui overrides */
  &[data-reach-menu-list] {
    background: ${({ theme }) => theme.surfaces[1]};
    padding: 0;
  }

  & > [data-reach-menu-item]:last-child {
    margin-bottom: 4px;
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
  header?: string | React.ComponentType;
}

function MenuButton({
  buttonProps,
  defaultText,
  useSelectedItemAsText = false,
  children,
  header: HeaderComp,
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
    [useSelectedItemAsText, setSelectedItemHandler],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Menu data-testid={rest['data-testid']}>
        <ReachButton as={Button} {...buttonProps}>
          {selectedItem}
          <Caret aria-hidden className="caret" />
        </ReachButton>
        <MenuList as={StyledMenuList}>
          {HeaderComp && (
            <header className="Menu-Title">
              {typeof HeaderComp === 'string' ? HeaderComp : <HeaderComp />}
            </header>
          )}
          {children}
        </MenuList>
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
