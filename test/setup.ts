// we always make sure 'react-native' gets included first
import './mock-async-storage';
import './mock-reactotron';
// libraries to mock

jest.useFakeTimers();
declare global {
  let __TEST__;
}
