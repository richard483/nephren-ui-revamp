pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "nephren-ui-revamp:latest"
        CONTAINER_NAME = "nephren-ui-revamp"
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
                sh '''
                docker run -d -p ${APP_PORT}:${APP_PORT} --name ${CONTAINER_NAME} --restart unless-stopped
                ${DOCKER_IMAGE}
                '''
            }
        }

        stage('Removing Dangling Images') {
            steps {
                echo 'Removing dangling images...'
                sh '''
                    DANGLING_IMAGES=$(docker images -f "dangling=true" -q)
                    if [ ! -z "$DANGLING_IMAGES" ]; then
                        docker rmi -f $DANGLING_IMAGES
                    else
                        echo "No dangling images to remove."
                    fi
                '''
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