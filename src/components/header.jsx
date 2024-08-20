import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Logo from './header.png';
import './styles/header.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div className="header">
    <img src={Logo} alt="Header Logo" className="logo" />
    <div className="centered-content">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Cards</Item>
        <Item>Tarot Readings</Item>
      </Stack>
    </div>
  </div>
  );
}
