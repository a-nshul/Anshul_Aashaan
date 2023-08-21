const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const { exec } = require('child_process');
const os = require('os');
const app = express();
const port = 3000;
const wifi = require('node-wifi');
const cors = require('cors');
// ... Other middleware and routes ...

// Define a schema for the wireless devices
const wirelessDeviceSchema = new mongoose.Schema({
  name: String,
  encryption: String,
  password: String,
  network: String
});
app.use(cors());
// Create a model based on the schema
const WirelessDevice = mongoose.model('WirelessDevice', wirelessDeviceSchema);

app.use(bodyParser.json());

const dbURI = 'mongodb://localhost:27017/aashan-network'; 
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});
wifi.init({
    iface: null // Network interface to use (default: null)
  });
//   const wifi = require('node-wifi');

wifi.scan((error, networks) => {
  if (error) {
    console.error(error);
  } else {
    console.log(networks);
  }
});
app.get('/connected-clients', (req, res) => {
    try {
      // Get network interfaces on the local device
      const networkInterfaces = os.networkInterfaces();
  
      // Extract IP addresses from the network interfaces
      const connectedClients = [];
  
      for (const ifaceName in networkInterfaces) {
        if (Object.prototype.hasOwnProperty.call(networkInterfaces, ifaceName)) {
          const iface = networkInterfaces[ifaceName];
  
          for (const entry of iface) {
            // Consider only IPv4 addresses
            if (entry.family === 'IPv4' && !entry.internal) {
              const clientInfo = {
                  Connected_Device: 'Connected',
                  IP_Address: entry.address === '127.0.0.1' ? os.hostname() : 'Unknown Device',
                  Mac_Address: entry.address,
                DHCP_Lease:'succeess'
              };
              connectedClients.push(clientInfo);
            }
          }
        }
      }
  
      // Use the 'netstat' command to get network connection information
      exec('netstat -n', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error retrieving connected clients' });
          return;
        }
  
        // Process the netstat output and filter based on your own device's IP addresses
        const lines = stdout.trim().split('\n');
        lines.slice(2).forEach(line => {
          const parts = line.trim().split(/\s+/);
          const localAddress = parts[3];
          const remoteAddress = parts[4];
  
          connectedClients.forEach(client => {
            if (
              (localAddress && localAddress.includes(client.ip)) ||
              (remoteAddress && remoteAddress.includes(client.ip))
            ) {
              client.connection = {
                localIP: localAddress.split(':')[0],
                localPort: localAddress.split(':')[1],
                remoteIP: remoteAddress.split(':')[0],
                remotePort: remoteAddress.split(':')[1],
              };
            }
          });
        });
  
        res.json(connectedClients);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving connected clients' });
    }
  });
  app.get('/device-info', (req, res) => {
      const hostname = os.hostname();
      const networkInterfaces = os.networkInterfaces();
    
      // Find the first available network interface with IPv4 addresses
      let ipAddress, macAddress;
    
      for (const ifaceName in networkInterfaces) {
        if (Object.prototype.hasOwnProperty.call(networkInterfaces, ifaceName)) {
          const iface = networkInterfaces[ifaceName];
    
          for (const entry of iface) {
            if (entry.family === 'IPv4' && !entry.internal) {
              ipAddress = entry.address;
              macAddress = entry.mac;
              break; // Exit the loop when the first suitable interface is found
            }
          }
    
          if (ipAddress && macAddress) {
            break; // Exit the outer loop if both IP and MAC addresses are found
          }
        }
      }
    
      if (ipAddress && macAddress) {
        const deviceInfo = {
          hostname,
          ip: ipAddress,
          mac: macAddress,
        };
        res.json(deviceInfo);
      } else {
        res.status(500).json({ error: 'No suitable network interface found' });
      }
    });
  app.get('/connected-clients', (req, res) => {
      try {
        const networkInterfaces = os.networkInterfaces();
        const connectedClients = [];
    
        for (const ifaceName in networkInterfaces) {
          if (Object.prototype.hasOwnProperty.call(networkInterfaces, ifaceName)) {
            const iface = networkInterfaces[ifaceName];
    
            for (const entry of iface) {
              if (entry.family === 'IPv4' && !entry.internal) {
                const clientInfo = {
                  Connected_Device: 'Connected',
                  IP_Address: '192.168.100.48',
                  Mac_Address: entry.mac,
                  DHCP_Lease: 'success',
                };
                connectedClients.push(clientInfo);
              }
            }
          }
        }
    
        const netstatOutput = execSync('netstat -n').toString();
        const lines = netstatOutput.trim().split('\n');
        lines.slice(2).forEach(line => {
          const parts = line.trim().split(/\s+/);
          const localAddress = parts[3];
          const remoteAddress = parts[4];
    
          connectedClients.forEach(client => {
            if (
              (localAddress && localAddress.includes(client.IP_Address)) ||
              (remoteAddress && remoteAddress.includes(client.IP_Address))
            ) {
              client.connection = {
                localIP: localAddress.split(':')[0],
                localPort: localAddress.split(':')[1],
                remoteIP: remoteAddress.split(':')[0],
                remotePort: remoteAddress.split(':')[1],
              };
            }
          });
        });
    
        res.json(connectedClients);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving connected clients' });
      }
    });
    const wirelessDevices = [];
  app.get('/wifi-info', (req, res) => {
    wifi.scan((error, networks) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving Wi-Fi information' });
      } else {
        if (!Array.isArray(networks)) {
          res.status(500).json({ error: 'Invalid Wi-Fi data received' });
          return;
        }
  
        const wifiData = networks.map(network => ({
          SSID: network.ssid,
          Active_Clients: network.clients ? network.clients.length : 0,
          Security: network.security,
          Experience_dBm: network.signal_level,
          Channel: network.channel
        }));
        res.json(wifiData);
      }
    });
  });
  
  
app.post('/api/wireless', async (req, res) => {
  const { name, encryption, password, network } = req.body;
  
  if (!name || !encryption || !network) {
    return res.status(400).json({ error: 'Name, encryption, and network are required' });
  }
  
  if (encryption === 'password' && !password) {
    return res.status(400).json({ error: 'Password is required for password encryption' });
  }

  try {
    // Create a new wireless device document
    const newDevice = new WirelessDevice({
      name,
      encryption,
      password,
      network
    });

    // Save the new device to the database
    await newDevice.save();
    console.log('New Wireless Device:', newDevice);
    res.status(201).json(newDevice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving wireless device to the database' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
