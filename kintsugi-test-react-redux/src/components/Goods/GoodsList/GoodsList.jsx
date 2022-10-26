import { useState, useEffect } from "react";
import getPosts from "../../../API/api";
import GoodsItem from "../GoodsItem/GoodsItem"
import styled from "styled-components";
import Section from '../../Section/Section'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const GoodList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function onGetPosts() {
    try {
      const data = await getPosts();
      setItems(data);
    } catch(error) {
      setError(error);
    }
    }
    onGetPosts();
  }, [])

  return (
    <Section>
      <List>
        <GoodsItem data={items} />
        {error && <p>Somethink wrong...</p>}
      </List>
    </Section>
  )
}

export default GoodList;