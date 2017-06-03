from flask import jsonify, request
from blocker import app

# Currently hardcoded, but will be replaced by database
blockees = [
    {
        'id': 1,
        'representation': 'facebook.com',
        'url': 'https://www.facebook.com'
    },
    {
        'id': 2,
        'representation': 'instagram.com',
        'url': 'https://www.instagram.com'
    }
]

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/blockees', methods=['GET'])
def get_blockees():
    return jsonify({'blockees': blockees})

@app.route('/blockees', methods=['POST'])
def add_blockee():
    if (not request.json or
        not 'representation' in request.json or
        not 'url' in request.json):
        abort(400)
    blockee = {
        'id': blockees[-1]['id'] + 1,
        'representation': request.json['representation'],
        'url': request.json['url']
    }
    blockees.append(blockee)
    return jsonify({'blockee': blockee}), 201
