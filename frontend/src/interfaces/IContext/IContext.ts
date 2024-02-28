import { NextRouter } from "next/router";

export interface IContext {
    router: NextRouter;
    tokenLocal: string;
    isMobile: boolean;
    isSideBarVisible: boolean;
    setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: () => void;
    user: any;
    setUser: any;
    setTokenLocal: React.Dispatch<React.SetStateAction<string>>;
    statusApi: string;
    setStatusApi: React.Dispatch<React.SetStateAction<string>>;
}
