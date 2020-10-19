pipeline {
    
    agent any
    
    stages {
        
        stage ('Source Code Checkout') {
           steps {
               script {
                    git credentialsId: 'cdb2fce0-d920-4136-a173-1b299f1d558d', url: 'https://github.com/waheedahmed55/protractor-jasmineFramework.git'
               }
           }
        }
        
		 stage ('Build Details') {
            steps {
                script {
                    bat "npm --version"
                }
            }
        }
		
        stage ('Download Dependencies') {
            steps {
                script {
                    bat "npm install"
                }
            }
        }
        
        stage ('Smoke test') {
            steps {
                script {
                    bat "npm run -- smoke-test"
               }
            }
        }
        
        stage ('Regression test') {
            steps {
                script {
                    bat "npm run -- regression-test"
               }
            }
        }
    }
}


