import { Flex } from "antd";
import styled from "styled-components";

export const CardWrapper = styled(Flex)`
  width: 100%;
  border: 1px solid #eee !important;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  height: 100%;
  margin-bottom: 16px !important;

  &:hover {
    box-shadow: 0px 69px 19px 0px rgba(0, 0, 0, 0),
      0px 44px 18px 0px rgba(0, 0, 0, 0.01),
      0px 25px 15px 0px rgba(0, 0, 0, 0.03),
      0px 11px 11px 0px rgba(0, 0, 0, 0.04), 0px 3px 6px 0px rgba(0, 0, 0, 0.05);

    .cover {
      transform: scale(1.5);
    }
  }
  .cover-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #0505050f !important;
    height: 200px;
    overflow: hidden;

    .cover {
      transition: all 0.25s ease-in-out;
      max-height: 100%;
      max-width: 100%;
    }
  }

  .body {
    box-sizing: border-box;
    width: 100%;
    padding: 16px;

    & > * {
      width: 100%;
      display: block;
    }

    .price {
      font-size: 16px;
      line-height: 24px;
      color: #52c41a;
    }
  }
`;
