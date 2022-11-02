import { useState, useEffect } from "react";
import {getItems} from "../../../API/api";
import {GoodsItem} from "../GoodsItem/GoodsItem"
import styled from "styled-components";
import Container from "../../Container/Container";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoodList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function onGetPosts() {
    try {
      const data = await getItems();
      setItems(data);
    } catch(error) {
      setError(error);
    }
    }
    onGetPosts();
  }, [])

  return (
      <List>
        <GoodsItem data={items} />
        {error && <p>Somethink wrong...</p>}
      </List>
  )
}

export default GoodList;