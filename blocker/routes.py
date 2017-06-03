from flask import Flask, jsonify
from blocker import app

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
