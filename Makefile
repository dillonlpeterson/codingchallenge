
build:
	npm run build 
	#docker build -t dillonlpeterson/codingchallenge:latest .
	docker build -t registry.heroku.com/codingchallenge042019/web:latest .
	#docker push dillonlpeterson/codingchallenge:latest 
	docker push registry.heroku.com/codingchallenge042019/web:latest

deploy:
	sed "s/{{ UPDATED_AT }}/$(shell date)/g" ./deployments/deployment.tmpl > ./deployments/deployment.yml
	kubectl replace -f ./deployments/deployment.yml
