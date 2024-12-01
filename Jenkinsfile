pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "nephren-ui-revamp:latest"
        CONTAINER_IMAGE = "nephren-ui-revamp"
        APP_PORT = "3000"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Stopping and removing old container if it exists...'
                sh '''
                    CONTAINER_ID=$(docker ps -aq -f name=${CONTAINER_NAME})
                    if [ ! -z "$CONTAINER_ID" ]; then
                        docker stop $CONTAINER_ID
                        docker rm $CONTAINER_ID
                    else
                        echo "No container found with name ${CONTAINER_NAME}."
                    fi
                '''
                echo 'Running new container...'
                sh "docker run -d -p ${APP_PORT}:${APP_PORT} --name ${CONTAINER_NAME} ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}