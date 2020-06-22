import styled from 'styled-components';

import { Hashtag } from "styled-icons/heroicons-outline";

import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;

  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      margin-left: 5px;
      font-size: 15px;
      color: var(--senary);
    }

    svg:not(#hashtagIcon) { display: none; }

  }

  &:hover, 
  &:active {
  
    background-color: var(--quinary);

    > div {
      span { color: var(--white); }
      svg:not(#hashtagIcon) { display: inline; }
    }
  }

`;

export const HashtagIcon = styled(Hashtag)`

  width: 20px;
  height: 20px;

  color: var(--symbol);

`;

export const InviteIcons = styled(PersonAdd)`

  width: 16px;
  height: 16px;

  color: var(--symbol);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

`;

export const SettingIcons = styled(Settings)`

  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

`;