import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import playwright from 'playwright';

initStoryshots({
  suite: 'DOM snapshots',
});

initStoryshots({
  suite: 'Image snapshots',
  test: imageSnapshot({
    getCustomBrowser: async () => {
      const browser = await playwright.chromium.launch();
      const context = await browser.newContext({
        viewport: { width: 800, height: 600 },
      });
      return context;
    },
  }),
});
