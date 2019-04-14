build:
	npm run build 
	docker build -t dillonlpeterson/codingchallenge:latest .
	docker push dillonlpeterson/codingchallenge:latest 

deploy:
	sed "s/{{ UPDATED_AT }}/$(shell date)/g" ./deployments/deployment.tmpl > ./deployments/deployment.yml
	kubectl replace -f ./deployments/deployment.yml
