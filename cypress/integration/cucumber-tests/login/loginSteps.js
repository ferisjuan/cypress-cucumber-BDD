import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Classes
import LoginPage from './LoginPage'

Given('I open login page', () => {
	LoginPage.visitLoginPage()
})

When('I submit login', () => {
	LoginPage.fillUsername()
	LoginPage.fillPassword()
	LoginPage.submitForm()
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})
