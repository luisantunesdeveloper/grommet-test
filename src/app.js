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
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Heading from 'grommet/components/Heading';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Card from 'grommet/components/Card';
import Markdown from 'grommet/components/Markdown';


render(
  <App centered={false}>
    <Box full={true}>
      <Article>
        <Heading>
          Sample Heading
        </Heading>
        <Header>
          <Search inline={true} fill={true} size='medium' placeHolder='Search' dropAlign={{"right": "right"}} />
          <Menu dropAlign={{"right": "right"}}>
            <Anchor href='#'
              className='active'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Header>
        <Section>
          <Markdown content='
            # H1  
            Paragraph [link](/).   
            ## H2  
            ### H3
            
            ![image](http://2.bp.blogspot.com/-MJ3AH4luyEg/UJ-ODo_HS3I/AAAAAAAABlc/gnb5i30h4rc/s1600/funny-angry-baby-1.gif)'/>
          <Card label='Sample Label'
            thumbnail='http://2.bp.blogspot.com/-MJ3AH4luyEg/UJ-ODo_HS3I/AAAAAAAABlc/gnb5i30h4rc/s1600/funny-angry-baby-1.gif'
            heading='Sample Heading'
            description='Sample description providing more details.' />
          <Accordion>
            <AccordionPanel heading='First Title'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Second Title'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Third Title'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
          </Accordion>
        </Section>
        <Footer primary={true} appCentered={true} direction='column'
          align='center' pad='small' colorIndex='grey-1'>
          <p>
            Build your ideas with <Anchor href='http://webpack2starter.io' target='_blank'>Webpack 2 starter</Anchor>!
          </p>
        </Footer>

      </Article>

    </Box>
  </App>,
  document.getElementById('App')
);