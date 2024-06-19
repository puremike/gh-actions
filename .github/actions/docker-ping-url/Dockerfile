FROM python:alpine3.19

WORKDIR /app

COPY . .

RUN python -V
RUN pip install -r requirements.txt

CMD [ "python", "main.py" ]