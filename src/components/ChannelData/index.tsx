import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />

        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />
        <ChannelMessage
          author="Teste Autor"
          date="00/11/2222"
          content="Teste Conteudo"
        />

        <ChannelMessage
          author="Teste Bot"
          date="00/11/2222"
          content={
            <>
              <Mention>@Elson Junior</Mention>, lorem ipsum.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
