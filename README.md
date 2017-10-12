# A repro code for `Tray#displayBalloon`'s icon

This is a repro code about `Tray#displayBalloon`'s `icon` parameter does not work.

## Environments

* Electron version: 1.7.9
* Operating system: Windows 7 Pro SP1 (64 bits)

## Steps

1. `git clone https://github.com/mysticatea/electron-tray-test.git`
2. `cd electron-tray-test`
3. `npm install`
4. `npm run test:none` ... It works if the `icon` parameter is nothing.
5. `npm run test:string` ... It does not work if the `icon` parameter is a string. It showed the tray icon, but does not show the balloon.
6. `npm run test:image` ... It does not work if the `icon` parameter is a NativeImage instance. It showed the tray icon, but does not show the balloon.
