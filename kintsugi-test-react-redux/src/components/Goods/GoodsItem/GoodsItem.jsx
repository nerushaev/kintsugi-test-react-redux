import randomNumber from 'random-number'
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
`;

const Images = styled.img`
  margin-bottom: 10px;
`;

const ItemText = styled.p`
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;

  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover, &:focus {
    border: medium none rgb(255,182,193);
    box-shadow: rgb(255,105,180) 0 0 2px 2px;
    outline: 0;
    background-color: rgb(255,105,180, 0.3);
  }
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
      <Link to={`${nanoid()}`}>{`${randomPrice()} ₴`}</Link>
      <Button>Додати у кошик</Button>
    </Item>
  )
  })

};

export default GoodsItem;