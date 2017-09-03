#!blocker/env/bin/python3
# App used to start the blocker backend

from blocker import create_app
#from blocker import app

if __name__=='__main__':
    app = create_app()
    app.run(debug=True)
