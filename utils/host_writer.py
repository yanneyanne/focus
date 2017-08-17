#!env/bin/python3

def block_hosts(hosts):
    print("Adding urls to hosts " + hosts)
    with open("/etc/hosts", 'r') as hosts_file:
        for line in hosts_file:
            print(line)

def unblock_hosts():
    print("Removing urls from block!")
    with open("/etc/hosts", 'r') as hosts_file:
        for line in hosts_file:
            print(line)
