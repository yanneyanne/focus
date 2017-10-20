#!env/bin/python3
import os
import sys
from tinydb import TinyDB
from flask import Flask

path = os.path.join(os.path.dirname(sys.argv[0]), "blocker_db.json")
db = TinyDB(path)

def create_app(config = None):
    app = Flask(__name__)

    app.config.update(dict(
        DATABASE = os.path.join(os.path.dirname(sys.argv[0]), "blocker_db.json"),
        HOSTS_FILE = os.path.join('/etc/hosts')
    ))

    # Apply the configs if they are specified
    app.config.update(config or {})

    @app.route('/')
    @app.route('/index')
    def index():
        return "Hello World!"

    with app.app_context():
        from routes import blockees, blocker
    return app

if __name__=='__main__':
    app = create_app()
    app.run()
