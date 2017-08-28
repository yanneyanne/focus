#!env/bin/python3

def block_hosts(new_hosts):
    with open("/etc/hosts", 'r+') as hosts_file:
        hosts_list = hosts_file.readlines()
        for new_host in new_hosts:
            new_host = "127.0.0.1 " + new_host + " #focus \n"
            if new_host not in hosts_list:
                hosts_file.write(new_host)

def unblock_hosts(hosts):
    hosts_list = []
    with open("/etc/hosts", 'r') as hosts_file:
        hosts_list = hosts_file.readlines()
    with open("/etc/hosts", 'w') as hosts_file:
        for line in hosts_list:
            if "#focus" not in line:
                hosts_file.write(line)
