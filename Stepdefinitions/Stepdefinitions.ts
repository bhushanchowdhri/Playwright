import { expect } from '@playwright/test';
import { Before,Given, When, Then } from './fixtures';
import { CommonMethods } from '../Utilities/CommonMethods';
import { before } from 'node:test';
let data=require('../Utilities/Data.json');
let locators=require('../Utilities/ObjectRepository.json');
let commonMethods:CommonMethods;
let env=process.env.ENV?.trim().toUpperCase();
if (!env || !data[env]) {
  throw new Error(`Invalid or missing ENV: ${env}`);
}

let url = data[env].Url;
console.log("url is "+url)

Before(async ({page})=>{
commonMethods = new CommonMethods(page)
})

Given('I am on Playwright home page', async ({ page }) => {
  await commonMethods.NavigateToUrl(url);
});

When('I click link {string}', async ({ page }, name: string) => {
  var loc=locators['Name'].replace('<arg>',name)
  console.log(loc)
  await commonMethods.Click(loc)
});

Then('I see in title {string}', async ({ page }, text: string) => {
  await commonMethods.VerifyTitle(text);
});
