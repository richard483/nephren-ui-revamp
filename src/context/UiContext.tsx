import { createContext, useContext, useState } from 'react';

export interface HeaderFooterContextProps {
  isHeaderFooterVisible: boolean;
  showHeaderFooter: () => void;
  hideHeaderFooter: () => void;
}

const HeaderFooterContext = createContext<HeaderFooterContextProps | undefined>(undefined);

export const useHeaderFooter = () => useContext(HeaderFooterContext);

export const HeaderFooterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFooterVisible, setFooterVisibility] = useState<boolean>(true);

  const hideHeaderFooter = () => { setFooterVisibility(false); };
  const showHeaderFooter = () => { setFooterVisibility(true); };

  return (
    <HeaderFooterContext.Provider value={{ isHeaderFooterVisible: isFooterVisible, showHeaderFooter: showHeaderFooter, hideHeaderFooter: hideHeaderFooter }}>
      {children}
    </HeaderFooterContext.Provider>
  );
};
