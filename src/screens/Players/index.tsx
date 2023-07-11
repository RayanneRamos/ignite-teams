import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Hightlight } from "../../components/Highlight";
import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Hightlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <ButtonIcon />
    </Container>
  );
}
