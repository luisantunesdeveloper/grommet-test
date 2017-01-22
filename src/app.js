'use strict';

import './style.scss';

import React from 'react';
import { render } from 'react-dom';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';

render(
  <App centered={false}>
    <Box full={true}>
      <Header direction='row' justify='between'
        pad={{ horizontal: 'medium' }}>
        <Title>Webpack 2 starter</Title>
      </Header>
      <Footer primary={true} appCentered={true} direction='column'
        align='center' pad='small' colorIndex='grey-1'>
        <p>
          Build your ideas with <Anchor href='http://webpack2starter.io' target='_blank'>Webpack 2 starter</Anchor>!
        </p>
      </Footer>
    </Box>
  </App>,
  document.getElementById('App')
);