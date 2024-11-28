import styled from "styled-components";
import { Flex } from "antd";

export const HeaderWrapper = styled(Flex)`
  width: 100%;

  .title,
  .caption {
    display: block;
    text-align: center;
    width: 100%;
    margin: 0;
  }

  .title {
    color: #000000e0;
    font-size: 40px;
    line-height: 64px;
  }

  .caption {
    color: #000000a6;
    font-size: 20px;
    line-height: 32px;
  }

  &:not(.activated) {
    .title,
    .caption {
      transform: translateY(50%);
      opacity: 0;
    }
  }

  &.activated {
    .title {
      animation: comeToUp 0.6s ease-in-out;
    }

    .caption {
      animation: comeToUp 0.6s ease-in-out;
    }
  }

  @keyframes comeToUp {
    from {
      transform: translateY(50%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
