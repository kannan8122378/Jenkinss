pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to App Server') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@172.31.37.32 "
                    cd /home/ubuntu/ &&
                    git pull origin main &&
                    docker compose down &&
                    docker compose up -d --build
                "
                '''
            }
        }
    }
}
