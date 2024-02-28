import { IChildren } from "@/interfaces/IChildren/IChildren";

import { LayoutContainer } from "./style";

const Layout = ({children}: IChildren) => {

  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;