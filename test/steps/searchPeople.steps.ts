import { Given, When, Then } from 'cucumber';
import { expect } from '../utils/expect';
import { Locators } from '../helpers/Locators';
const locators = new Locators();

When('I Select option People if not selected', async () => {
    const isPeopleRadioBtnSelected = await locators.getPeopleRadioButton().isSelected();
    !isPeopleRadioBtnSelected;
    await locators.getPeopleRadioButton().click();
    await expect(locators.getPeopleRadioButton().isSelected()).to.eventually.be.equal(
        true,
        'Invalid State - People option radio button is not selected'
    );
});
