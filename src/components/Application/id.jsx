import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
import { Pane, Text, Card, Button } from 'evergreen-ui';
import {
    HelloContainer,
    HelloContainerLeftCol,
    HelloContainerRightCol,
    HelloContainerRightColContent,
    HelloContainerRightColBtn,
    BigImg,
    ButtonEverGreen,
    TextIlineBlock,
    TextAreaImportMnemonic,
    ConnectionTable,
    TextInputError,
    StateCybTable,
    Eth,
    GCyb,
} from '../..';

import { BntGroupFull } from './Hello/btn.group.full';

const idrobot = require('./Hello/idrobot.png');

export const FollowYourWeb3 = ({img}) => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ img } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <TextIlineBlock>Follow your web3 soul bravely, xhipster!</TextIlineBlock>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const IdCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <Pane display='flex' flexDirection='column' alignItems='flex-start'>
                    <Pane
                      marginBottom={ 40 }
                      display='flex'
                      flexDirection='column'
                      alignItems='flex-start'
                    >
                        <Pane
                          alignItems='center'
                          display='flex'
                          flexDirection='row'
                          marginBottom={ 10 }
                        >
                            <Text
                              display='inline-block'
                              marginRight={ 13 }
                              color='#fff'
                              fontSize='24px'
                            >
                                10
                            </Text>
                            <Pane display='flex' alignItems='center'>
                                <Eth />
                                <Eth />
                            </Pane>
                        </Pane>
                        <Text fontSize='14px' color='#d1d1d1'>
                            0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5
                        </Text>
                    </Pane>
                    <Pane display='flex' flexDirection='column' alignItems='flex-start'>
                        <Pane
                          display='flex'
                          alignItems='center'
                          flexDirection='row'
                          marginBottom={ 10 }
                        >
                            <Text
                              display='inline-block'
                              marginRight={ 13 }
                              color='#fff'
                              fontSize='24px'
                            >
                                10
                            </Text>
                            <Pane display='flex' alignItems='center'>
                                <GCyb />
                                <GCyb />
                                <GCyb />
                                <GCyb />
                            </Pane>
                        </Pane>
                        <Text fontSize='14px' color='#d1d1d1'>
                            0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5
                        </Text>
                    </Pane>
                </Pane>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const KeysCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <TextAreaImportMnemonic />
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const ConnectCyb = ({
    ipfsStatus,
    cyberdStatus,
    parityStatus,
    IPFS_END_POINT,
    PARITY_END_POINT,
    CYBERD_END_POINT,
    CYBERD_WS_END_POINT,
    ipfsWriteUrl,
}) => (
    <div>
            <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <ConnectionTable
                  IPFS_END_POINT={ IPFS_END_POINT }
                  PARITY_END_POINT={ PARITY_END_POINT }
                  CYBERD_END_POINT={ CYBERD_END_POINT }
                  CYBERD_WS_END_POINT={ CYBERD_WS_END_POINT }
                  ipfsWriteUrl={ ipfsWriteUrl }
                  cyberdStatus={ cyberdStatus }
                  ipfsStatus={ ipfsStatus }
                  parityStatus={ parityStatus }
                />
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      position='absolute'
      bottom={ 0 }
      paddingY={ 20 }
      backgroundColor='#000000'
      zIndex={ 2 }
    >
        <Pane
          flexGrow={ 1 }
          maxWidth={ 1000 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
          paddingX='3vw'
        >
            <Button paddingX={ 30 } marginX={10} fontSize='14px' className='btn'>
                EXPORT SETTINGS
            </Button>
            <Button paddingX={ 30 } marginX={10} fontSize='14px'  className='btn'>
                RESET SETTINGS
            </Button>
        </Pane>
    </Pane>
    </div>
);

export const ShieldCyb = () => (
    <div>
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <Card
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  boxShadow='0 0 1px #fff'
                  maxWidth='80%'
                  paddingX='8vh'
                  paddingY='8vh'
                  minWidth={ 500 }
                  maxHeight={ 500 }
                  height='100%'
                >
                    <Pane width='100%' marginBottom='6%'>
                        <Pane width='100%' marginBottom='6%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                Current password
                            </Text>
                            <TextInputError />
                        </Pane>
                        <Pane width='100%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                New password
                            </Text>
                            <TextInputError />
                        </Pane>
                    </Pane>
                    <Pane width='100%'>
                        <Text
                          marginBottom='3%'
                          display='inline-block'
                          fontSize='1.12rem'
                          color='#fff'
                        >
                            Confirm new password
                        </Text>
                        <TextInputError isInvalid />
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      position='absolute'
      bottom={ 0 }
      paddingY={ 20 }
      backgroundColor='#000000'
      zIndex={ 2 }
    >
        <Pane
          flexGrow={ 1 }
          maxWidth={ 1000 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
          paddingX='3vw'
        >
            <Button paddingX={ 30 } fontSize='16px' className='btn'>
            Save Password
            </Button>
        </Pane>
    </Pane>
    </div>
);

export const StateCyb = () => (
    <div>
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <StateCybTable />
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
        <Pane
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        position='absolute'
        bottom={ 0 }
        paddingY={ 20 }
        backgroundColor='#000000'
        zIndex={ 2 }
      >
          <Pane
            flexGrow={ 1 }
            maxWidth={ 1000 }
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='row'
            paddingX='3vw'
          >
              <Button paddingX={ 30 } marginX={10} fontSize='16px' className='btn'>
                Export selected
              </Button>
          </Pane>
      </Pane>
      </div>
);
