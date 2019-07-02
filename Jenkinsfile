pipeline {
  agent {
    label 'master'
  }
  stages {
    stage('Build') {
      steps {
        dir(path: 'src') {
          sh 'docker login -u jdieuze -p $DOCKER_PASSWORD'
          sh 'docker build --no-cache -t back-office .'
          sh 'docker tag back-office:latest jdieuze/back-office:latest'
          sh 'docker push jdieuze/back-office:latest'
        }

      }
    }
    stage('Test') {
      steps {
        echo 'mvn test'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}