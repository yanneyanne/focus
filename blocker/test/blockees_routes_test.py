import pytest
from flask import url_for, json
from blocker import create_app
import tempfile
import os

def test_get_blockees(client):
    resp = client.get('/blockees')

    assert resp.status_code == 200
    assert json.loads(resp.get_data())['blockees'] == []

    resp = client.get('/blockee/2')

    assert resp.status_code == 404

def test_add_blockees(client):
    resp = client.post('/blockees',
                       data = json.dumps({'name': 'google.com'}),
                       content_type = 'application/json')
    assert resp.status_code == 201
    assert check_blockee_equality('google.com',
                                  json.loads(resp.get_data())['blockee'])

    resp = client.post('/blockees',
                       data = json.dumps({'name': 'facebook.com'}),
                       content_type = 'application/json')
    assert resp.status_code == 201
    assert check_blockee_equality('facebook.com',
                                  json.loads(resp.get_data())['blockee'])

    resp = client.get('/blockees')
    assert len(json.loads(resp.get_data())['blockees']) == 2

def test_add_duplicate(client):
    resp = client.post('/blockees',
                       data = json.dumps({'name': 'facebook.com'}),
                       content_type = 'application/json')

    assert resp.status_code == 201
    assert check_blockee_equality('facebook.com',
                                  json.loads(resp.get_data())['blockee'])

    resp = client.post('/blockees',
                       data = json.dumps({'name': 'facebook.com'}),
                       content_type = 'application/json')

    assert resp.status_code == 409

    resp = client.get('/blockees')

    assert resp.status_code == 200
    assert len(json.loads(resp.get_data())['blockees']) == 1

def test_add_invalid_url(client):
    resp = client.post('/blockees',
                       data = json.dumps({'name': 'facebook'}),
                       content_type = 'application/json')

    assert resp.status_code == 422

def test_remove_nonexistant(client):
    resp = client.delete('/blockees/16')

    assert resp.status_code == 404

def test_remove_blockee(client):
    resp = client.post('/blockees',
                       data = json.dumps({'name': 'google.com'}),
                       content_type = 'application/json')

    assert resp.status_code == 201
    assert check_blockee_equality('google.com',
                                  json.loads(resp.get_data())['blockee'])

    resp = client.post('/blockees',
                       data = json.dumps({'name': 'facebook.com'}),
                       content_type = 'application/json')

    assert resp.status_code == 201
    parsed_resp = json.loads(resp.get_data())['blockee']
    assert check_blockee_equality('facebook.com',
                                  parsed_resp)

    resp = client.delete(parsed_resp['uri'])

    assert resp.status_code == 200
    uri_number = parsed_resp['uri']
    assert json.loads(resp.get_data())['removed'] == uri_number

    resp = client.get('/blockees')

    assert len(json.loads(resp.get_data())['blockees']) == 1

# Checks blockee payload equality without needing to specify the uri number
def check_blockee_equality(input, actual):
    expected = {
        'name': input,
        'url': 'www.%s http://www.%s https://www.%s' % (input, input, input),
        'uri': 'http://localhost/blockees/'
    }
    if expected['name']!=actual['name'] or expected['url']!=actual['url']:
        return False
    if expected['uri'] not in actual['uri']:
        return False
    return True
