### Default kubernetes editor
`export KUBE_EDITOR="nano"`

### autocompletion
* bash: https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-bash-linux/
* zsh: https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-zsh/
* powershell: https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-pwsh/

### Run debug pod
`kubectl run debug -it --rm --image=digitalocean/doks-debug:latest -- bash`

### Scale deployment
`kubectl scale deployment --replicas 2 k8s-workshop`

### Port forward
* from pods `kubectl port-forward pods/k8s-workshop 3334:3333`
* from service: `kubectl port-forward svc/k8s-workshop-svc 3334:80`

### observe
* `kubectl describe pod foo`

### remove sturdy pvs
`kubectl get pv | grep Terminating | awk '{print $1}' | xargs kubectl delete pv --grace-period=0 --force`

### useful aliases
```
alias k='kubectl'
alias kd='kubectl describe'
alias kg='kubectl get'
alias ke='kubectl edit'
alias kt='kubectl top'
alias kcw='kubectl config use-context parallax-beginner-workshop'
function kns {
    kubectl config set-context --current --namespace="$1"
}
```