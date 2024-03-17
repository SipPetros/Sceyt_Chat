/* eslint-disable react/function-component-definition */
import React from 'react';
import MessageContainer from '../MessageContainer/components/ChatContainer';
import InputContainer from '../InputContainer';
import styles from './AppContainer.module.scss';

interface AppContainerProps {
  width?: number | string,
  height?: number | string,
  backgroundColor?: string,
}

const AppContainer: React.FC<AppContainerProps> = ({ width, height, backgroundColor }) => (
  <div
    className={styles.AppContainerStyles}
    style={{
      backgroundColor,
      width,
      height,
    }}
  >
    <MessageContainer />
    <InputContainer />
  </div>
);

AppContainer.defaultProps = {
  backgroundColor: '#ffffff%',
  height: '100vh',
  width: '100%',
};

export default AppContainer;
