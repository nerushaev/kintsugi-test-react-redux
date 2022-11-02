import styled from "styled-components"

const IconsList = styled.ul`
  display: flex;
  margin-top: 180px;
`;

const IconsItem = styled.li`
&:not(:last-child) {
    margin-right: 20px;
  }
`;

export const IconsSet = () => {
  return (
    <IconsList>
      <IconsItem>
        <img src={require("../../images/instagram-icon.png")} alt="" />
      </IconsItem>
      <IconsItem>
        <img src={require("../../images/telegram-icon.png")} alt="" />
      </IconsItem>
      <IconsItem>
        <img src={require("../../images/tiktok-icon.png")} alt="" />
      </IconsItem>
    </IconsList>
  )
}