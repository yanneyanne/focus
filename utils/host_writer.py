#!env/bin/python3

def block_hosts(new_hosts):
    with open("/etc/hosts_test", 'r+') as hosts_file:
        hosts_list = hosts_file.readlines()
        for new_host in new_hosts:
            new_host = new_host + "\n"
            if new_host not in hosts_list:
                hosts_file.write(new_host)

def unblock_hosts(hosts):
    with open("/etc/hosts_test", 'w+') as hosts_file:
        hosts_list = hosts_file.readlines()
        for host in hosts:
            host = host + "\n"
            try:
                host_list.remove(host)
                break
            except:
                pass
        hosts_file.write("".join(hosts_list))
