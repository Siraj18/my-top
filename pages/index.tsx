import { Button, Htag, Tag } from "../components";
import { Ptag } from "../components/Ptag/Ptag";

export default function Home() {

  return (
    <div>
      <Htag tag="h2">Hello</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <Ptag size="s">Hello</Ptag>
      <Tag color='red'>Hh.ru</Tag>
      <Tag size='s' color='green'>Hh.ru</Tag>
      <Tag size='s' color='gray'>Hh.ru</Tag>
      <Tag size='m' color='primary'>Hh.ru</Tag>
    </div>
  );
}
