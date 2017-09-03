from blocker.utils.url_helper import *

def test_is_url():
    assert is_url("google") == False
    assert is_url("http:/wwww.google.com") == False
    assert is_url("http:///wwww.google.com") == False
    assert is_url("http://wwww.google.com") == False
    assert is_url("http://google.com") == False

    assert is_url("google.com") == True
    assert is_url("www.google.com") == True
    assert is_url("http://www.google.com") == True

def test_complete_url():
    assert complete_url("google.com") == \
            "www.google.com http://www.google.com https://www.google.com"
    assert complete_url("www.google.com") == \
            "www.google.com http://www.google.com https://www.google.com"
    assert complete_url("http://www.google.com") == \
            "www.google.com http://www.google.com https://www.google.com"
