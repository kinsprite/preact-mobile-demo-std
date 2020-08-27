import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const LazyContent: FunctionalComponent = () => <div class={style.container}>This is async content.</div>;

export default LazyContent;
