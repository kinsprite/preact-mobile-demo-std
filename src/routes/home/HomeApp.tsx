import { FunctionalComponent, h } from 'preact'; /** @jsx h */
import { useState, useEffect } from 'preact/hooks';

import styles from './HomeApp.module.scss';

import {
  addNativeMessageHandler,
  removeNativeMessageHandler,
  sendMessageToNative,
} from '../../nativeMessage';
import { ChanHandler } from '../../redux/chanMiddleware';
import { NativeMsgAction } from '../../redux/actionTypes';

function toastShow() {
  sendMessageToNative('toast_show', 'Text from home page');
}

function cameraOpen() {
  sendMessageToNative('camera_open');
}

function vibratorNotify() {
  sendMessageToNative('vibrator_notify');
}

function eventRound() {
  sendMessageToNative('event_round');
}

const eventRoundBackHandler: ChanHandler<any, NativeMsgAction> = (state, action: NativeMsgAction, dispatch) => {
  sendMessageToNative('toast_show', `Home received msg "${action.msgId}" from native`);
};

const HomeApp : FunctionalComponent = () => {
  const [once] = useState(0);

  useEffect(() => {
    addNativeMessageHandler('event_round_back', eventRoundBackHandler);
    return () => removeNativeMessageHandler('event_round_back', eventRoundBackHandler);
  }, [once]);

  return (
    <div>
      <header class={styles.AppHeader}>
        <button type="button" onClick={toastShow}>Toast</button>
        <button type="button" onClick={cameraOpen}>Camera</button>
        <button type="button" onClick={vibratorNotify}>Vibrator</button>
        <button type="button" onClick={eventRound}>Event Round</button>
      </header>
      <footer class={styles.AppFooter}>
        <a
          class={styles.FooterLink}
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
        <a
          class={styles.FooterLink}
          href="https://qinzhiqiang.cn/tags/%E5%BE%AE%E5%89%8D%E7%AB%AF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Micro Frontends
        </a>
      </footer>
    </div>
  );
};

export default HomeApp;
