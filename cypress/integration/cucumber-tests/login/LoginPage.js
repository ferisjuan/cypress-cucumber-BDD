const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SUBMIT = 'input[name="submit"]'

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
}

export default LoginPage
