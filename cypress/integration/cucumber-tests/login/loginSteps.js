import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Classes
import LoginPage from './LoginPage'

Given('I open login page', () => {
	LoginPage.visitLoginPage()
})

When('I fill username with {string}', username => {
	LoginPage.fillUsername(username)
})

When('I filll password with {string}', password => {
	LoginPage.fillPassword(password)
})

When('I click on submit login', () => {
	LoginPage.submitForm()
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see an error message', () => {
	LoginPage.shouldShowErrorMessage('Login and/or password are wrong.')
})
