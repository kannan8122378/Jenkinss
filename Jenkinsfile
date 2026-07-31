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
                ssh -o StrictHostKeyChecking=no ubuntu@172.31.7.153  "
                    cd /home/ubuntu/three-tier-app &&
                    git pull origin main &&
                    docker compose down &&
                    docker compose up -d --build
                "
                '''
            }
        }
    }
}
