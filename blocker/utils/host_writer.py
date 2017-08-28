#!env/bin/python3

def block_hosts(new_hosts):
    with open("/etc/hosts", 'r+') as hosts_file:
        hosts_list = hosts_file.readlines()
        for new_host in new_hosts:
            new_host = "127.0.0.1 " + new_host + " #focus \n"
            if new_host not in hosts_list:
                hosts_file.write(new_host)

def unblock_hosts(hosts):
    with open("/etc/hosts", 'r+') as hosts_file:
        hosts_list = hosts_file.readlines()
        for (nr, line) in enumerate(hosts_list):
            if "#focus" in line:
               hosts_list.pop(nr)
        hosts_file.write("".join(hosts_list))
