const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SUBMIT = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'

class LoginPage {
	static visitLoginPage() {
		cy.visit(URL)
	}

	static fillUsername(username) {
		cy.get(USERNAME).type(username)
	}
	static fillPassword(password) {
		cy.get(PASSWORD).type(password)
	}

	static submitForm() {
		cy.get(SUBMIT).click()
	}

	static shouldShowErrorMessage(contains) {
		cy.get(ERROR_MESSAGE).should('be.visible').and('contain')
	}
}

export default LoginPage
