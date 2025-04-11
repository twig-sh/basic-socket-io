const init = () => {
  const socket = io();

  socket.on('news', (msg) => {
    console.log('news', msg);
  });
};

window.onload = init;