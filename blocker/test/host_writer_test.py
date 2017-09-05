import pytest
import tempfile
import os
from blocker.utils.host_writer import HostWriter

@pytest.fixture(scope = 'module', autouse=True)
def host_writer():
    hosts_temp = tempfile.NamedTemporaryFile()
    with open(hosts_temp.name, 'w') as hosts_file:
        hosts_file.write("base")
    host_writer = HostWriter(hosts_temp.name)
    yield host_writer
    hosts_temp.close()

def test_block_hosts(host_writer):
    input = ["test1", "test2", "test3"]
    host_writer.block_hosts(input)
    actual = get_file_lines(host_writer.hosts_file_path)
    assert actual == ["base"].append(input)

def test_block_hosts(host_writer):
    host_writer.unblock_hosts()
    actual = get_file_lines(host_writer.hosts_file_path)
    assert actual == ["base"]

def get_file_lines(path):
    raw_lines = []
    with open(path, 'r') as file:
        raw_lines = file.readlines()
    lines = []
    for raw in raw_lines:
        lines.append(raw.replace("127.0.0.1 ", "").replace(" #focus \n", ""))
    return lines

