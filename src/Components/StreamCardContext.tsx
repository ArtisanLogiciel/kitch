'use client';
import * as React from 'react';

type StreamCardContextType = {
  streamCardData: any;
  setStreamCardData: React.Dispatch<React.SetStateAction<any>>;
};

export const StreamCardContext = React.createContext<StreamCardContextType | undefined>(undefined);
export const StreamCardProvider: React.FC<React.PropsWithChildren<{}>>= ({ children }) => {
  const [streamCardData, setStreamCardData] = React.useState<any>(null);

  return (
    <StreamCardContext.Provider value={{ streamCardData, setStreamCardData }}>
                {children}
    </StreamCardContext.Provider>
  );
};

export function useStreamDonnees(){
    const context = React.useContext(StreamCardContext);
    if(!context){
        throw new Error("Vous avez utiliser le hook hors de son contexte");
    }
    return context
}

