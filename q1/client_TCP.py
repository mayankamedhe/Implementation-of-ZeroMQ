import socket
import time

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

start_time = time.time()
client.connect(('0.0.0.0', 8000))


from_server = client.recv(4096)
end_time = time.time()
client.close()

final_time = float(from_server) + (end_time - start_time)/2
print 'Server time = ' + from_server + ' Corrected Server time = ' + str(final_time)