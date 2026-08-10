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
                ssh -i /var/lib/jenkins/.ssh/id_ed25519 \ -o StrictHostKeyChecking=no ubuntu@172.31.7.153 "
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
