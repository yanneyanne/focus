#!env/bin/python3

class HostWriter:

    def __init__(self, hosts_file_path):
        self.hosts_file_path = hosts_file_path

    def block_hosts(self, new_hosts):
        with open(self.hosts_file_path, 'r+') as hosts_file:
            hosts_list = hosts_file.readlines()
            for new_host in new_hosts:
                new_host = "127.0.0.1 " + new_host + " #focus \n"
                if new_host not in hosts_list:
                    hosts_file.write(new_host)

    def unblock_hosts(self):
        hosts_list = []
        with open(self.hosts_file_path, 'r') as hosts_file:
            hosts_list = hosts_file.readlines()
        with open(self.hosts_file_path, 'w') as hosts_file:
            for line in hosts_list:
                if "#focus" not in line:
                    hosts_file.write(line)
