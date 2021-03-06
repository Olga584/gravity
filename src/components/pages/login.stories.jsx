import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    SuccessfulLogin,
    FailLogin,
} from '../..';

storiesOf('Examples/login', module)
    .add('successful_llogin', () => <SuccessfulLogin />)
    .add('fail_login', () => <FailLogin />);
