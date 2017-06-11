#!env/bin/python3

from flask import Flask
from tinydb import TinyDB

app = Flask(__name__)

db = TinyDB('blocker/blocker_db.json')

@app.route('/')
@app.route('/index')
def index():
    return "Hello World!"

from blocker.routes import blockees, blocker
