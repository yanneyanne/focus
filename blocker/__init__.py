#!env/bin/python3
import os
from flask import Flask
from tinydb import TinyDB

db = TinyDB('blocker/blocker_db.json')

def create_app(config=None):
    app = Flask(__name__)

    app.config.update(dict(
        DATABASE=os.path.join(app.root_path, 'blocker_db.json')
    ))

    # Apply the configs if they are specified
    app.config.update(config or {})

    @app.route('/')
    @app.route('/index')
    def index():
        return "Hello World!"

    with app.app_context():
        from blocker.routes import blockees, blocker
    return app
