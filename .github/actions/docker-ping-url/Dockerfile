FROM python:alpine3.19

WORKDIR /app

COPY . .

RUN python -V
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "/app/main.py" ]