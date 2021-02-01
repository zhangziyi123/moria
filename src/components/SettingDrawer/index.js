import React, { useContext } from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { context, actions } from 'Src/store';
import ContainerSettings from './components/ContainerSettings'

import styles from './styles.module.scss';

export default function SettingDrawer() {

  const store = useContext(context);
  const { dispatch, currentWidgetConfig } = store;

  console.log('currentWidgetConfig', currentWidgetConfig);

  const close = () => {
    dispatch({
      type: actions.SET_CURRENT_WIDGETCONFIG,
      payload: null
    });
  }

  return (
    <div className={`${styles.settingDrawer} ${currentWidgetConfig ? styles.visible : styles.hidden}`}>
      <div className={styles.content}>
        <ContainerSettings />
      </div>
      <Button
        type="text"
        className={styles.closeBtn}
        icon={<CloseOutlined />}
        onClick={close}
      />
    </div>
  )
}