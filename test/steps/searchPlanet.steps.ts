import { Given, When, Then } from 'cucumber';
import { expect } from '../utils/expect';
import { Locators } from '../helpers/Locators';
const locators = new Locators();

When('Select option Planet if not selected', async () => {
    const isPeopleRadioBtnSelected = await locators.getPlanetRadioButton().isSelected();
    !isPeopleRadioBtnSelected;
    await locators.getPlanetRadioButton().click();
    await expect(locators.getPlanetRadioButton().isSelected()).to.eventually.be.equal(
        true,
        'Invalid State - Planets option radio button is not selected'
    );
});
