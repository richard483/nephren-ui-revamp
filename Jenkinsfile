pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "nephren-ui-revamp:latest"
        APP_PORT = "3000"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Stopping Docker Image') {
            steps {
                echo 'Stopping Docker image...'
                sh '''
                    CONTAINER_ID=$(docker ps -q --filter "ancestor=${DOCKER_IMAGE}")
                    if [ ! -z "$CONTAINER_ID" ]; then
                        docker stop $CONTAINER_ID
                    fi
                '''
            }
        }

        stage('Removing Docker Container') {
            steps {
                echo 'Removing Docker container...'
                sh "docker rmi -f ${DOCKER_IMAGE}"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh "docker run -d -p ${APP_PORT}:${APP_PORT} --name nephren-ui-revamp ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
//             sh "docker stop nephren-ui-revamp || true"
//             sh "docker rm nephren-ui-revamp || true"
        }
        failure {
            echo 'Pipeline failed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
    }
}