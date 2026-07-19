# caption_backend/Dockerfile
FROM python:3.11-slim

# set working directory
WORKDIR /app

# copy only requirements, then install
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# copy the rest of the backend code
COPY . /app/

# collect static files
RUN python manage.py collectstatic --noinput

# expose Django port
EXPOSE 8000

# run with gunicorn for production
CMD ["gunicorn", "caption_backend.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "2"]
