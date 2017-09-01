from urllib.parse import urlparse

# Checks if the url candidate is valid url
def is_url(candidate):
    parsed = urlparse(candidate)
    if parsed.scheme=="http" or parsed.scheme=="https":
        if parsed.netloc[:4]=="www." and "." in parsed.netloc[4:]:
            return True

    elif parsed.scheme is "":
        if parsed.netloc[:4]=="www." and "." in parsed.netloc[4:]:
            return True
        elif parsed.netloc=="" and "." in parsed.path:
            return True
    return False


# 
def complete_url(url):
    pass

    
