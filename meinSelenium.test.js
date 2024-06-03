const { Builder, By } = require('selenium-webdriver');
const { describe, it, beforeAll, afterAll, expect } = require('@jest/globals');

describe('Selenium Test', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 30000);

  it('findet die Inputfelder und den Button, trägt Daten ein und klickt auf den Button', async () => {
    await driver.get('http://localhost:3004'); // URL zu Ihrer lokalen React-Applikation

    // Beispielhaftes Finden der Inputfelder mit verschiedenen Selektoren
    try {
      const inputField1 = await driver.findElement(By.name('inputField1'));
      const inputField2 = await driver.findElement(By.name('inputField2'));
      await inputField1.sendKeys('Test Daten 1');
      await inputField2.sendKeys('Test Daten 2');

      const submitButton = await driver.findElement(By.css('.submitButtonClass'));
      await submitButton.click();
    } catch (e) {
      console.error('Elemente konnten nicht gefunden werden:', e);
    }
    
    // Optional: Hier können Sie weitere Überprüfungen hinzufügen

  }, 30000);
});

/////sandy test 