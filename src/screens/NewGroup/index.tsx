import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Hightlight } from "../../components/Highlight";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Hightlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}