import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`

  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

`;

export const Profile = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Avatar = styled.div`

  background-color: var(--gray);

  width: 32px;
  height: 32px;

  border-radius: 50%;

  position: relative;

  &::after {
    position: absolute;

    width: 13px;
    height: 13px;
    background-color: var(--notification);

    border-radius: 50%;
    bottom: -2px;
    right: -2px;
    content: '';
  }

`;

export const UserData = styled.div`

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  margin-left: 8px;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }

`;

export const Icons = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg:not(:first-child) {
    margin-left: 7px;
  }

`;

export const MicIcon = styled(Mic)`

  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover { opacity: 1; }

`;

export const HeadphoneIcon = styled(Headset)`

  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover { opacity: 1; }

`;

export const SettingsIcon = styled(Settings)`

  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover { opacity: 1; }

`;