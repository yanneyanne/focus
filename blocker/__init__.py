#!env/bin/python3

from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return "Hello World!"

from blocker.routes import blockees, blocker
