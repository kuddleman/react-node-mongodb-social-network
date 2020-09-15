How to start nodemon:

npm run dev



How to kill a server:

Check the PID i.e. id of process running on port 3000 with below command :

lsof -i tcp:3000
It would output something like following:

COMMAND  PID   USER   FD   TYPE  DEVICE  SIZE/OFF NODE NAME
node     5805  xyz    12u  IPv6  63135    0t0     TCP  *:3000 (LISTEN)
Now kill the process using :

kill -9 5805