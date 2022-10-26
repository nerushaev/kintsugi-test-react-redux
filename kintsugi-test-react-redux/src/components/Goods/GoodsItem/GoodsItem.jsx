import randomNumber from 'random-number'
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Item = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Images = styled.img`
  margin-bottom: 10px;
`;

const ItemText = styled.p`
  margin-bottom: 10px;
`;



const GoodsItem = ({ data }) => {

  const randomPrice = randomNumber.generator({
    min: 50,
    max: 3000,
    integer: true,
  });
  return data.map(({ body }) => {
    return (
    <Item key={nanoid()}>
      <Images src={require("../../../images/keep-calm-poster-not-found.webp")} alt="" />
      <ItemText>{body}</ItemText>
      <ItemText>{randomPrice()}</ItemText>
    </Item>
  )
  })

};

export default GoodsItem;