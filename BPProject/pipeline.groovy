node {
    stage('Build'){
        steps {
            echo 'Building.......'
        }
    }
    
    stage('Test') {
        steps{
            echo 'Testing.........'
        }
    }
}


    