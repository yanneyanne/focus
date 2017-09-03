import pytest
from flask import url_for
from blocker import create_app

@pytest.fixture
def app():
    return create_app()

def test_get_blockees(client):
    assert client.get(url_for('get_blockees')).status_code == 200
