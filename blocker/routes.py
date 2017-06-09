#!env/bin/python3
from flask import jsonify, request, make_response, url_for
from blocker import app

# Currently hardcoded, but will be replaced by database
blockees = [
    {
        'id': 1,
        'name': 'facebook.com',
        'url': 'https://www.facebook.com'
    },
    {
        'id': 2,
        'name': 'instagram.com',
        'url': 'https://www.instagram.com'
    }
]

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/blockees/<int:blockee_id>', methods = ['GET'])
def get_blockee(blockee_id):
    blockee = list(filter(lambda b: b['id'] == blockee_id, blockees))
    if len(blockee) == 0:
        abort(404)
    return jsonify( { 'blockee': make_public_blockee(blockee[0]) } )

@app.route('/blockees', methods=['GET'])
def get_blockees():
    return jsonify({'blockees': list(map(make_public_blockee, blockees))})


@app.route('/blockees', methods=['POST'])
def add_blockee():
    if (not request.json or
        not 'name' in request.json):
        abort(400)
    # TODO: This needs to also validate and find the appropriate url
    blockee = {
        'id': blockees[-1]['id'] + 1,
        'name': request.json['name'],
    }
    blockees.append(blockee)
    return jsonify({'blockee': make_public_blockee(blockee)}), 201


# This is super inefficient
@app.route('/blockees/<int:blockee_id>', methods=['DELETE'])
def remove_blockee(blockee_id):
    blockee = [b for b in blockees if b['id']==blockee_id]
    if len(blockee) == 0:
        abort(404)
    blockees.remove(blockee[0])
    return jsonify({'result': True})


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
