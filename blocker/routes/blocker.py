#!env/bin/python3
from flask import jsonify, request, make_response
from blocker import app
from tinydb import TinyDB

db = TinyDB('blocker/blocker_db.json')
blocker = db.table('blocker_state')


