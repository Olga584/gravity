import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from "react-slick";
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
import {
    Button, Pane, Text, Icon, Heading, IconButton, Strong,
} from 'evergreen-ui';
import { Row, Col } from 'react-flexbox-grid';
import {
    MainContainer,
    ScrollContainer,
    Avatar,
    // Text,
} from '../..';
import Application from '../Application/Application';
import { throws } from 'assert';

const card = [
    {
        name: 'cyb1',
        balance: '1',
    },
    {
        name: 'cyb2',
        balance: '2',
    },
    {
        name: 'cyb3',
        balance: '3',
    },
    {
        name: 'cyb4',
        balance: '1',
    },
    {
        name: 'cyb5',
        balance: '2',
    },
    {
        name: 'cyb6',
        balance: '3',
    }
]
class CybCard extends Component {
    state = {
        hover: false,
    };

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    seeAll = () => {
        this.setState({
            seeAll: !this.state.seeAll,
        });
    };

    render() {
        const { eth, cybName, children, active } = this.props;

        return (
            <Pane
              { ...this.props }
              width={ active ? 411 : 210 }
              height={ active ? 525 : 267 }
              boxShadow={
                    active
                        ? '0 0 80px 2px #36d6ae'
                        : this.state.hover
                        ? '0 0 50px 0px #36d6ae'
                        : '0'
                }
              onMouseEnter={ () => this.handleHover() }
              onMouseLeave={ () => this.handleHover() }
              borderRadius={ 5 }
              position='relative'
              backgroundColor='#000'
              paddingY={ 50 }
              paddingX={ 30 }
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexShrink={ 0 }
            >
                <Pane
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='column'
                >
                    <Heading
                      fontSize='29px'
                      color={ active ? 'white' : '#757575' }
                      marginBottom={ active ? 45 : 20 }
                    >
                        {cybName}
                    </Heading>
                    {!active && (
                        <Text fontSize='16px' color='#757575' marginBottom={ 40 }>
                            {' '}
                            {eth} ETH
                            {' '}
                        </Text>
                    )}
                    {!active && (
                        <Pane
                          style={ { border: '2px solid #3ab793' } }
                          width={ 64 }
                          height={ 64 }
                          display='flex'
                          opacity={ this.state.hover ? '1' : '0' }
                          alignItems='center'
                          justifyContent='space-around'
                          borderRadius='50%'
                          boxShadow='0 2px 25px 1px #3ab793'
                          marginBottom={ 0 }
                        >
                            <Pane
                              style={ {
                                    border: '2px solid #3ab793',
                                    transform: 'rotate(25deg)',
                                } }
                              width={ 16.6 }
                              height={ 9.4 }
                              borderRadius='50%'
                            />
                            <Pane
                              style={ {
                                    border: '2px solid #3ab793',
                                    transform: 'rotate(-25deg)',
                                } }
                              width={ 16.6 }
                              height={ 9.4 }
                              borderRadius='50%'
                            />
                        </Pane>
                    )}
                    {active && (
                        <Pane
                          style={ { border: '2px solid #3ab793' } }
                          width={ 160 }
                          height={ 160 }
                          display='flex'
                          alignItems='center'
                          justifyContent='space-around'
                          borderRadius='50%'
                          boxShadow='0 2px 25px 1px #3ab793'
                          marginBottom={ active ? 70 : 0 }
                        >
                            <Pane
                              style={ {
                                    border: '2px solid #3ab793',
                                    transform: 'rotate(25deg)',
                                } }
                              width={ active ? 41 : 16.6 }
                              height={ active ? 23 : 9.4 }
                              borderRadius='50%'
                            />
                            <Pane
                              style={ {
                                    border: '2px solid #3ab793',
                                    transform: 'rotate(-25deg)',
                                } }
                              width={ active ? 41 : 16.6 }
                              height={ active ? 23 : 9.4 }
                              borderRadius='50%'
                            />
                        </Pane>
                    )}
                    {active && (
                        <Pane>
                            <Pane>
                                <Text lineHeight='1.71' color='white' size={ 400 }>
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less
                                </Text>
                            </Pane>
                        </Pane>
                    )}
                </Pane>
                {active && (
                    <Pane
                      width={ 130 }
                      height={ 42 }
                      borderRadius={ 5 }
                      backgroundColor='#3ab793'
                      position='absolute'
                      bottom={ -20 }
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                    >
                        <Text color='#fff' fontWeight={ 600 } fontSize='29px'>
                            0 ETH
                        </Text>
                    </Pane>
                )}
                {active && (
                    <Pane
                      position='absolute'
                      bottom={ -65 }
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                    >
                        <Text textShadow='0px 0px 20px #3ab793' color='#3ab793' fontSize='28px'>
                            Unlimited
                        </Text>
                    </Pane>
                )}
            </Pane>
        );
    }
}

class SimpleSlider extends React.Component {
    render() {
        const searchResults = card.map(
            card => (
                <Pane paddingTop='20%' height={500}>
                <CybCard active={ false } cybName={card.name} eth={card.balance} />
                </Pane>
            ),
        );
      var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        centerPadding: "60px",
        slidesToShow: 3,
        // slidesToScroll: 1,
      };
      return (
        <Slider {...settings}>
          {searchResults}
        </Slider>
      );
    }
  }

const Settings = () => (
    <Pane>
    <ScrollContainer>
        <MainContainer>
            <Pane marginBottom={ 80 } display='flex' justifyContent='center'>
                <Heading fontSize='29px' color='#fff'>
                    Your virtual robot
                </Heading>
            </Pane>
            {/* <Pane display='flex' alignItems='center' justifyContent='space-around'>
                <CybCard marginX={ 50 } />
                <CybCard marginX={ 50 } active />
                <CybCard marginX={ 50 } />
            </Pane> */}
            <Pane height={500} width={1000}>
                <SimpleSlider />
            </Pane>
        </MainContainer>
    </ScrollContainer>
    <Pane
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    position='absolute'
    bottom={ 0 }
    paddingY={ 30 }
    paddingX={30}
    backgroundColor='#000000'
  >
      <Pane
        flexGrow={ 1 }
        maxWidth={ 1000 }
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='row'

      >
          <Pane>
              <Text color='#fff' fontSize='18px'>
                  1 April
              </Text>
          </Pane>
          <Pane display='flex' justifyContent='center' flexGrow={ 1 }>
              <Text color='#fff' fontSize='18px'>
                  14 day 13 hour 15 minute 42 seconds
              </Text>
          </Pane>
          <Pane>
              <Button paddingX={ 50 } className='btn'>
                  Download
              </Button>
          </Pane>
      </Pane>
  </Pane>
  </Pane>
);

storiesOf('Cyb.ai', module).add('cyb.ai', () => (
    <Application>
        <Settings />
    </Application>
));Settings
