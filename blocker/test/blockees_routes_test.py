import pytest
from flask import url_for
from blocker import create_app

@pytest.fixture
def app():
    app = create_app()
    app.debug = True
    return app

def test_test(client):
    assert client.get(url_for('index')).json == ""

