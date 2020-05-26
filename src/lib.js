exports.api = {
  createNamespace: (moderator) => fetch('/newNamespace', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ moderator }),
  })
    .then((response) => response.json()),
};