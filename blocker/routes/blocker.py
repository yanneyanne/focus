#!env/bin/python3
from flask import jsonify, request, make_response, abort
from blocker import app
from tinydb import TinyDB, Query

db = TinyDB('blocker/blocker_db.json')
blocker = db.table('blocker')

@app.route('/blocker', methods = ['GET'])
def get_blocker():
    State = Query()
    blocker_state = blocker.get(State.state != None)
    if blocker_state is None:
        blocker_state = 'inactive'
    return jsonify({'blocker': blocker_state})

@app.route('/blocker', methods=['PUT'])
def set_blocker_state():
    if (not request.json or
        not 'state' in request.json or
        (request.json['state'] not in ['active', 'inactive'])):
        abort(400)
    State = Query()
    if blocker.contains(State.state != None):
        blocker.update({'state': request.json['state']}, cond=State.state!=None)
    else:
        blocker.insert({'state': request.json['state']})
    return jsonify({'new_state': request.json['state']})

@app.errorhandler(400)
def unexpected_payload(error):
    return make_response(jsonify({'error': 'Expected JSON payload with "state" set to "active" or "inactive"'}), 400)

