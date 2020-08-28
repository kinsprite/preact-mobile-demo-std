import { FunctionalComponent, h } from 'preact';
import style from './style.css';

type Props = {
  value: number,
};

const LazyContent: FunctionalComponent<Props> = ({ value }: Props) => (
  <div class={style.container}>
    This is async content. value is
    {' '}
    {value}
  </div>
);

export default LazyContent;
