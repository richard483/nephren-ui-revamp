import { createContext, useContext, useState } from 'react';

export interface FooterContextProps {
  isFooterVisible: boolean;
  showFooter: () => void;
  hideFooter: () => void;
}

const FooterContext = createContext<FooterContextProps | undefined>(undefined);

export const useFooter = () => useContext(FooterContext);

export const FooterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFooterVisible, setFooterVisibility] = useState<boolean>(true);

  const hideFooter = () => { setFooterVisibility(false); };
  const showFooter = () => { setFooterVisibility(true); };

  return (
    <FooterContext.Provider value={{ isFooterVisible, showFooter, hideFooter }}>
      {children}
    </FooterContext.Provider>
  );
};
