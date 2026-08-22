pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'playwright-login',
                        usernameVariable: 'TEST_USERNAME',
                        passwordVariable: 'TEST_PASSWORD'
                    ),
                    string(
                        credentialsId: 'playwright-base-url',
                        variable: 'BASE_URL'
                    )
                ]) {
                    sh 'npx playwright test'
                }
            }
        }
    }
}