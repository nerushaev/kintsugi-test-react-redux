import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';

export const Item = styled.li`
  list-style: none;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Images = styled.img`
  margin-bottom: 10px;
`;

export const ItemText = styled.p`
  margin-bottom: 10px;
  font-size: ${props => props.itemName ? "20px" : "16px"}
`;

export const Button = styled.button`
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







export const GoodsItem = ({ data }) => {
  return data.map(({ name, description, id, image, amount, price }) => {
    return (
      <Item key={nanoid()}>
      <Link to={`/${id}`}>
      <Images src={image} alt="" />
      <ItemText itemName>{name}</ItemText>
      <ItemText>{description}</ItemText>
      <ItemText>{price} ₴</ItemText>
      </Link>
      <Button>Додати у кошик</Button>
        </Item>
  )
  })

};