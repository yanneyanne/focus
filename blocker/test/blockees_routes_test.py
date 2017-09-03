import pytest
from flask import url_for, json
from blocker import create_app
import tempfile
import os

@pytest.fixture(scope="module", autouse=True)
def app():
    os_handle, db_path = tempfile.mkstemp()
    test_config = dict(
        DATABASE = db_path
    )
    yield create_app(test_config)
    os.close(os_handle)

def test_get_blockees(client):
    resp = client.get('/blockees')

    assert resp.status_code == 200
    assert json.loads(resp.get_data())['blockees'] == []

    resp = client.get('/get_blockee/2')

    assert resp.status_code == 404

def test_add_blockees(client):
    resp = client.post('/blockees',
                       data=json.dumps({'name': 'google.com'}),
                       content_type='application/json')

    assert resp.status_code == 201
    assert json.loads(resp.get_data())['blockee'] == {
        'name': 'google.com',
        'url': 'www.google.com http://www.google.com https://www.google.com',
        'uri': 'http://localhost/blockees/1'
    }

    resp = client.post('/blockees',
                       data=json.dumps({'name': 'facebook.com'}),
                       content_type='application/json')

    assert resp.status_code == 201
    assert json.loads(resp.get_data())['blockee'] == {
        'name': 'facebook.com',
        'url': 'www.facebook.com http://www.facebook.com https://www.facebook.com',
        'uri': 'http://localhost/blockees/2'
    }

def test_add_duplicate(client):
    resp = client.post('/blockees',
                       data=json.dumps({'name': 'facebook.com'}),
                       content_type='application/json')

    assert resp.status_code == 409
    assert json.loads(resp.get_data())['blockee'] == {
        'name': 'facebook.com',
        'url': 'www.facebook.com http://www.facebook.com https://www.facebook.com',
        'uri': 'http://localhost/blockees/2'
    }

    resp = client.get('/blockees')

    assert resp.status_code == 200
    assert len(json.loads(resp.get_data())['blockees']) == 2

def test_add_invalid_url(client):
    resp = client.post('/blockees',
                       data=json.dumps({'name': 'facebook'}),
                       content_type='application/json')

    assert resp.status_code == 422

def test_remove_nonexistant(client):
    resp = client.delete('/blockees/16')

    assert resp.status_code == 404

def test_remove_blockee(client):
    resp = client.delete('/blockees/2')

    assert resp.status_code == 200
    assert json.loads(resp.get_data())['removed'] == 2

    resp = client.get('/blockees')

    assert len(json.loads(resp.get_data())['blockees']) == 1
