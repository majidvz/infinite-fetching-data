import { Flex } from "antd";
import styled from "styled-components";

export const ProductsListPageWrapper = styled(Flex)`
  @media screen and (min-width: 1200px) {
    padding: 64px 40px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }

  @media screen and (max-width: 767.99px) {
    padding: 32px 16px;
  }

  .ant-pagination-options {
    display: none;
  }
`;
