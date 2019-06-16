node {
    stage('GitCheckout') {
        checkout scm
    }

    stage('Build') {
        sh """
            if [  "$(docker ps -q -f name=devops-container1" ]; then
                            docker rm -f devops-container1
            fi
            if [  "$(docker ps -q -f name=devops-container2)" ]; then
                            docker rm -f devops-container2
            fi
            if [  "$(docker ps -q -f name=balancer)" ]; then
                            docker rm -f balancer
            fi
            
            docker-compose up -d --build
        """
    }
  
    stage('End ') {
        echo "Succesfull execution"
    }

} 