app_root = $(shell pwd)
compose_command = docker compose

export app_root

dev:
	$(compose_command) up -d fdj_backend_dev fdj_frontend_dev --build

prod:
	$(compose_command) up -d fdj_backend fdj_frontend

stop:
	$(compose_command) stop

down:
	$(compose_command) down

status:
	$(compose_command) ps

bash-frontend:
	export APP_ROOT=$(app_root) && \
	$(compose_command) exec fdj_frontend bash

bash-backend:
	export APP_ROOT=$(app_root) && \
	$(compose_command) exec fdj_backend bash

logs:
ifdef c
	export APP_ROOT=$(app_root) && \
	$(compose_command) logs -f $(c)
else
	export APP_ROOT=$(app_root) && \
	$(compose_command) logs -f
endif