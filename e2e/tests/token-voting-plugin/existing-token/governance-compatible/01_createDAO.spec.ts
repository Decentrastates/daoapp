import {LOCALHOST_URL} from '../../../../basic.setup';
import {testWithMetaMask as test} from '../../../../testWithMetaMask';

// Test is creating a Token Based DAO (governance compatible token) and opens the DAO dashboard
test('Create Token Based DAO (governance compatible)', async ({
  context,
  page,
  extensionId,
  metamask,
}) => {
  await page.goto(`${LOCALHOST_URL}/`);
  await page.getByRole('button', {name: 'Accept all'}).click();
  await page.getByRole('button', {name: 'Connect wallet'}).click();
  await page.getByRole('button', {name: 'MetaMask MetaMask'}).nth(0).click();
  await metamask.connectToDapp();
  await page.getByRole('button', {name: 'Create a DAO'}).click();
  await page.getByRole('button', {name: 'Build your DAO'}).click();
  await page.getByRole('radio', {name: 'Testnet'}).click();
  await page.getByText('Ethereum Sepolia').click();
  await page.getByRole('button', {name: 'Next'}).click();
  await page.getByPlaceholder("Type your DAO's name …").click();
  await page
    .getByPlaceholder("Type your DAO's name …")
    .fill('Token Based DAO (governance compatible token)');
  await page.getByPlaceholder('Type your summary …').click();
  await page
    .getByPlaceholder('Type your summary …')
    .fill('DAO generated by automated E2E tests');
  await page.getByRole('button', {name: 'Next'}).click();
  await page.locator('div').filter({hasText: /^Yes$/}).nth(2).click();
  await page.getByPlaceholder('0x…').click();
  await page
    .getByPlaceholder('0x…')
    .fill('0x065A7AfA22FD8f7096254cd0E23eB1bafa2db984');
  await page.getByRole('button', {name: 'Next'}).click();
  await page.getByRole('button', {name: 'Next'}).click();
  await page.locator('.sc-FjLsS > .w-4').first().click();
  await page
    .locator(
      'div:nth-child(2) > .ml-auto > .md\\:flex > .sc-fbbsWf > .sc-FjLsS > .w-4'
    )
    .click();
  await page
    .locator(
      'div:nth-child(3) > .ml-auto > .md\\:flex > .sc-fbbsWf > .sc-FjLsS > .w-4'
    )
    .click();
  await page
    .locator(
      'div:nth-child(4) > .ml-auto > .md\\:flex > .sc-fbbsWf > .sc-FjLsS > .w-4'
    )
    .click();
  await page.getByRole('button', {name: 'Deploy your DAO'}).click();
  await page.getByRole('button', {name: 'Switch to Ethereum Sepolia'}).click();
  await metamask.approveSwitchNetwork();
  await page.waitForTimeout(1000);
  await page.getByRole('button', {name: 'Deploy your DAO'}).click();
  await page.getByRole('button', {name: 'Approve transaction'}).click();
  await metamask.confirmTransaction();
  await page.getByRole('button', {name: 'Launch DAO Dashboard'}).click();
  await page.getByRole('button', {name: 'Open your DAO'}).click();
});