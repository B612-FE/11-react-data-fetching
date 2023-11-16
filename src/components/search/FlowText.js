import React from "react";
import styled, { keyframes, css } from "styled-components";

const FlowText = ({ text }) => {
  const isLong = text.length >= 20;

  return (
    <FlowTextWrapper isLong={isLong}>
      <FlowWrap className="flow-wrap">{text}</FlowWrap>
    </FlowTextWrapper>
  );
};

const flowLoopAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const FlowTextWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    ${({ isLong }) =>
      isLong &&
      css`
        .flow-wrap {
          animation: ${flowLoopAnimation} 10s linear infinite;
        }
      `}
    color: #000;
  }

  &:not(:hover) {
    .flow-wrap {
      animation: none;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const FlowWrap = styled.div`
  padding-right: 1.4881vw;
`;

export default FlowText;
