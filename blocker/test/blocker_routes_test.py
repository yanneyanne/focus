import pytest
from flask import url_for, json
from blocker import create_app
import tempfile
import os

def test_get_blocker_inactive(client):
    resp = client.get('/blocker')

    assert resp.status_code == 200
    assert json.loads(resp.get_data())['blocker']['state'] == 'inactive'

def test_set_blocker_state_invalid(client):
    resp = client.put('blocker',
                      data = json.dumps({'stateqwerty': 'active'}),
                      content_type = 'application/json')
    assert resp.status_code == 400
    resp = client.put('blocker',
                      data = json.dumps({'state': 'qwerty'}),
                      content_type = 'application/json')
    assert resp.status_code == 400

def test_block(client):
    resp = client.put('blocker',
                      data = json.dumps({'state': 'active'}),
                      content_type = 'application/json')
    assert resp.status_code == 200

    resp = client.get('/blocker')
    assert resp.status_code == 200
    assert json.loads(resp.get_data())['blocker']['state'] == 'active'

    resp = client.put('blocker',
                      data = json.dumps({'state': 'inactive'}),
                      content_type = 'application/json')
    resp = client.get('/blocker')
    assert resp.status_code == 200
    assert json.loads(resp.get_data())['blocker']['state'] == 'inactive'
