import { h } from 'preact';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow } from 'enzyme';
import Header from '../components/header';

describe('Initial Test of the Header', () => {
  test('Header renders 3 nav items', () => {
    const context = shallow(<Header />);
    expect(context.find('h1').text()).toBe('Preact App');
    expect(context.find('Link').length).toBe(3);
  });
});
