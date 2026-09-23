import { expect, test } from '@playwright/test';

test('index page renders the resume sections', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Hannes Hattenbach');
	await expect(page.locator('h1').first()).toHaveText(/Education|Ausbildung/);
});
