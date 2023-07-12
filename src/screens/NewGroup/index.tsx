import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Hightlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  async function handleNew() {
    try {
      await groupCreate(group);

      navigation.navigate("players", { group });
    } catch (error) {
      throw error;
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Hightlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
