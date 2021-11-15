import { useState } from "react";
import { Button, Htag, Rating, Tag } from "../components";
import { Ptag } from "../components/Ptag/Ptag";
import { withLayout } from "../layout/Layout";


function Home() {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h2">Hello</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <Ptag size="s">Hello</Ptag>
      <Tag color='red'>Hh.ru</Tag>
      <Tag size='s' color='green'>Hh.ru</Tag>
      <Tag size='s' color='gray'>Hh.ru</Tag>
      <Tag size='m' color='primary'>Hh.ru</Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
