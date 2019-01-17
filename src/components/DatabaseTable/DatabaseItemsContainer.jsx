import * as React from 'react';
import cx from 'classnames';
const styles = require('./DatabaseItemsContainer.css');

export const DatabaseItemsContainer = ({ children, ...props }) => (
    <div { ...props } className={ styles.DatabaseItemsContainer }>
        {props.disabled && <div className={ styles.Disabled } />}
        {children}
    </div>
);
