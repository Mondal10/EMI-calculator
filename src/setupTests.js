import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.shallow = shallow;
configure({ adapter: new Adapter() });

// One of the way to fix the console error issue (since we are using the snapshot to compare)
// https://github.com/jerairrest/react-chartjs-2/issues/155
jest.mock('react-chartjs-2', () => ({
  Pie: () => null
}));