// we always make sure 'react-native' gets included first
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// libraries to mock

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

declare const tron; // eslint-disable-line @typescript-eslint/no-unused-vars

jest.useFakeTimers();
declare global {
  let __TEST__;
}
