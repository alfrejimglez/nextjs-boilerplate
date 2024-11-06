import http from 'http';
import httpProxy from 'http-proxy';

// Crea una instancia del proxy
const proxy = httpProxy.createProxyServer({});

// Define el servidor de destino (donde se enviarán las solicitudes)
const target = 'https://nextjs-boilerplate-b30tl5rzy-sofias-projects-94a064b9.vercel.app/'; // Cambia esto a tu servidor de destino

// Crea el servidor que actuará como proxy
const server = http.createServer((req, res) => {
  console.log(`Proxying request for ${req?.url}`);
  proxy.web(req, res, { target }, (err) => {
    console.error(`Error en la solicitud proxy: ${err?.message}`);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error en el servidor proxy');
  });
});

//
