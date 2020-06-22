import React from 'react';

import {
  Container,
  HashtagIcon,
  InviteIcons,
  SettingIcons
} from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container className={selected ? 'active' : ''}>

      <div>
        <HashtagIcon id="hashtagIcon" />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcons />
        <SettingIcons />
      </div>

    </Container>
  );
};

export default ChannelButton;
