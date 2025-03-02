import { createContext, useContext, useState } from 'react';

export interface HeaderFooterContextProps {
  isFooterVisible: boolean;
  isHeaderVisible: boolean;
  showHeader: () => void;
  hideHeader: () => void;
  showFooter: () => void;
  hideFooter: () => void;
}

const HeaderFooterContext = createContext<HeaderFooterContextProps | undefined>(
  undefined,
);

export const useHeaderFooter = () => useContext(HeaderFooterContext);

export const HeaderFooterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFooterVisible, setFooterVisibility] = useState<boolean>(true);
  const [isHeaderVisible, setHeaderVisibility] = useState<boolean>(true);

  const hideFooter = () => {
    setFooterVisibility(false);
  };
  const showFooter = () => {
    setFooterVisibility(true);
  };

  const hideHeader = () => {
    setHeaderVisibility(false);
  };
  const showHeader = () => {
    setHeaderVisibility(true);
  };

  return (
    <HeaderFooterContext.Provider
      value={{
        isFooterVisible,
        isHeaderVisible,
        hideFooter,
        showFooter,
        hideHeader,
        showHeader,
      }}
    >
      {children}
    </HeaderFooterContext.Provider>
  );
};
