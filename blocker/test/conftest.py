import os
import tempfile
import pytest
from blocker import create_app

@pytest.yield_fixture(scope = 'session')
def app_setup():

    db_temp = tempfile.NamedTemporaryFile()
    hosts_temp = tempfile.NamedTemporaryFile()

    test_config = dict(
        DATABASE = db_temp.name,
        HOSTS_FILE = hosts_temp.name
    )

    client = create_app(test_config).test_client()

    yield client, db_temp, hosts_temp

    db_temp.close() 
    hosts_temp.close()

@pytest.yield_fixture(scope = 'function', autouse = True)
def client(app_setup):
    
    client, db_temp, hosts_temp = app_setup

    yield client

    # Clear db and hosts file after each test
    open(db_temp.name, 'w').close()
    open(hosts_temp.name, 'w').close()
