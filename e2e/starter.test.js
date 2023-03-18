import {by, device, element, expect, waitFor, detox} from 'detox';
const {reloadApp} = require('./reload');

const dismissAlert = async () => {
  if (device.getPlatform() === 'android') {
    await element(by.text('OK')).tap();
  }
};

describe('HomeScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('should display the HomeScreen and submit the correct value', async () => {
    const inputValue = 'duykhang';

    await expect(element(by.id('home'))).toBeVisible();

    await element(by.id('inputTest')).typeText(inputValue);
    await element(by.id('buttonTest')).tap();

    await waitFor(
      element(by.text('Bạn đã đăng nhập thành công')),
    ).toBeVisible();
    await dismissAlert();
  });

  it('should display the HomeScreen and submit the incorrect value', async () => {
    const inputValue = 'incorrect-value';

    await expect(element(by.id('home'))).toBeVisible();

    await element(by.id('inputTest')).typeText(inputValue);
    await element(by.id('buttonTest')).tap();

    await waitFor(element(by.text('Thất bại'))).toBeVisible();
    await dismissAlert();
  });
});
