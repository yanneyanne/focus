#!env/bin/python3
# App used to start the blocker backend

from __init__ import create_app

if __name__=='__main__':
    app = create_app()
    app.run(debug=True)
