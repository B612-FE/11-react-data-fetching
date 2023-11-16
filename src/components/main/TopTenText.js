import styled from "styled-components";

const TopTenText = ({ rank }) => {
  return (
    <MainTextWrapper>
      <Rectangle>
        <TopText>TOP</TopText>
        <NumberText>10</NumberText>
      </Rectangle>
      <RankText>#{rank} in Korea Today</RankText>
    </MainTextWrapper>
  );
};

const MainTextWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 390px;
`;

const Rectangle = styled.div`
  width: 15px;
  height: 15px;
  border: 1.5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopText = styled.div`
  font-size: 4px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: -2px;
`;

const NumberText = styled.div`
  font-size: 8px;
  font-weight: 800;
  color: #ffffff;
`;

const RankText = styled.div`
  color: #ffffff;
  text-align: cetner;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

export default TopTenText;
