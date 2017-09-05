from urllib.parse import urlparse

# Checks if the url candidate is valid url
# Will however let some incorrect urls through
def is_url(candidate):
    parsed = urlparse(candidate)
    if parsed.scheme=='http' or parsed.scheme=='https':
        if parsed.netloc[:4]=='www.' and '.' in parsed.netloc[4:]:
            return True

    elif not parsed.scheme:
        if parsed.netloc[:4]=='www.' and '.' in parsed.netloc[4:]:
            return True
        elif not parsed.netloc and '.' in parsed.path:
            return True
    return False


# Create a complete set of urls with correct schemes
# Places no garantee on the correctness of the urls
def complete_url(input):
    parsed = urlparse(input)
    url = parsed.netloc if parsed.netloc else parsed.path
    host = ''
    if url[:4]=='www.':
        host = url
    else:
        host = 'www.' + url
    return ''.join([host, ' http://', host, ' https://', host])

    
