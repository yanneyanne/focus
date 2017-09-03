import pytest
from flask import url_for
from blocker import app as application

@pytest.fixture
def app():
    application.debug = True
    return application

def test_get_blockees(client):
    assert client.get(url_for('get_blockees')).status_code == 200
