# Tutorial:
* https://docs.requarks.io/install/kubernetes

## Original Repo:
* https://github.com/Requarks/wiki/tree/main/dev/helm#introduction

### Helm install declarative
```
helm repo add requarks https://charts.js.wiki

helm install my-release requarks/wiki -f values.yml
```


### Helm install imperative
```
helm repo add requarks https://charts.js.wiki

helm install my-release requarks/wiki \
    --set postgresql.persistence.size=2Gi \
    --set ingress.enabled=true \
    --set ingress.annotations."kubernetes\.io\/ingress\.class"=traefik \
    --set 'ingress.hosts[0].host=example.wiki.workshop.team-parallax.com' \
    --set 'ingress.hosts[0].paths[0].path=\/' \
    --set 'ingress.hosts[0].paths[0].pathType=Prefix'
```