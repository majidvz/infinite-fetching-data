import { FC, useEffect, useState } from "react";
import { HeaderWrapper } from "./styles";

export const Header: FC = () => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <HeaderWrapper
      vertical
      justify="flex-start"
      className={pageLoaded ? "activated" : ""}
      align="center"
    >
      <h1 className="title poppins-bold">Products List</h1>
      <p className="caption poppins-regular">
        Explore the product list with infinite scrolling for seamless browsing!
      </p>
    </HeaderWrapper>
  );
};
