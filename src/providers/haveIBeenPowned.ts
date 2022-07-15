import browserInstance from '../browserInstance';
import HaveIBeenPowned from '../types/haveIBeenPowned';

const haveIBeenPowned = async (email: string): Promise<HaveIBeenPowned[]> => {
  const defaultResponse: HaveIBeenPowned[] = [];
  const browser = await browserInstance();
  if (browser) {
    const page = await browser.newPage();
    await page.goto('https://monitor.firefox.com', {
      waitUntil: 'networkidle2',
    });
    await page.click('input#scan-email', { delay: 200 });
    await page.keyboard.type(`${email}\n`);
    await page.waitForNavigation();
    await page.content();
    const rawBreaches = await page.evaluate(() => {
      const data = [];
      const elements = document.getElementsByClassName('flx flx-col');
      for (const element of elements) {
        const breachTitleRaw = element.getElementsByClassName('breach-title');
        const breachKeyRaw = element.getElementsByClassName('breach-key');
        const breachValueRaw = element.getElementsByClassName('breach-value');
        data.push({
          title: breachTitleRaw[0].innerHTML,
          values: [
            {
              name: breachKeyRaw[0].innerHTML,
              value: breachValueRaw[0].innerHTML,
            },
            {
              name: breachKeyRaw[1].innerHTML,
              value: breachValueRaw[1].innerHTML,
            },
          ],
        });
      }
      return data;
    });
    const sanitysedArray = rawBreaches.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.title === value.title),
    );
    await browser.close();
    return sanitysedArray;
  }
  return defaultResponse;
};
export default haveIBeenPowned;