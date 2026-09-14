import test from '@playwright/test';
test('frames and event listeners test', async ({ page }) => {
    await page.goto("https://demoqa.com/frames");
    const framePage = page.frameLocator("#frame1");
    console.log(await framePage.locator("#sampleHeading").textContent());
    await page.pause();
});
