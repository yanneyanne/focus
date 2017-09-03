#!env/bin/python3
from flask import jsonify, request, make_response, url_for, abort
from blocker import app
from tinydb import TinyDB
from blocker.utils.url_helper import is_url, complete_url

db = TinyDB('blocker/blocker_db.json')
blockees = db.table('blockees')

@app.route('/blockees/<int:blockee_id>', methods = ['GET'])
def get_blockee(blockee_id):
    blockee = blockees.get(eid=blockee_id)
    if blockee is None:
        abort(404)
    return jsonify({'blockee': make_public_blockee(blockee)}), 200

@app.route('/blockees', methods=['GET'])
def get_blockees():
    return jsonify({'blockees': list(map(make_public_blockee, blockees.all()))}), 200

@app.route('/blockees', methods=['POST'])
def add_blockee():
    if (not request.json or
        not 'name' in request.json):
        abort(400)

    if not is_url(request.json['name']):
        abort(422)

    new_blockee = {
        'name': request.json['name'],
        'url': complete_url(request.json['name'])
    }
    for b in blockees:
        if b['name']==new_blockee['name']: # Item has already been added
            return jsonify({'blockee': make_public_blockee(b)}), 201
    id = blockees.insert(new_blockee)
    blockees.update({'id': id}, eids=[id])
    new_blockee = blockees.get(eid=id)
    return jsonify({'blockee': make_public_blockee(new_blockee)}), 201


@app.route('/blockees/<int:blockee_id>', methods=['DELETE'])
def remove_blockee(blockee_id):
    if not blockees.contains(eids=[blockee_id]):
        abort(404)
    blockees.remove(eids=[blockee_id])
    return jsonify({'result': True}), 200


def make_public_blockee(blockee):
    new_blockee = {}
    for field in blockee:
        if field == 'id':
            new_blockee['uri'] = url_for('get_blockee', blockee_id=blockee['id'], _external=True)
        else:
            new_blockee[field] = blockee[field]
    return new_blockee


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.errorhandler(422)
def not_found(error):
    return make_response(jsonify({'error': 'Incorrectly formatted blockee url'}), 422)
