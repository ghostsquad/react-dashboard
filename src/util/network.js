class Network {

  async fetch(url, {user, password} = {}) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'json';
      request.addEventListener('abort', reject, false);
      request.addEventListener('error', reject, false);
      request.addEventListener('load', () => {
        if(request.status >= 400) {
          const error = new Error(`Network request failed.`);
          error.response = request.response;
          error.status = request.status;
          error.statusText = request.statusText;
          reject(error);
          return;
        }
        resolve(request.response);
      }, false);
      if (user && password) {
        const credentials = btoa(`${user}:${password}`);
        request.setRequestHeader('Authorization', `Basic ${credentials}`);
      }
      request.send();
    });
  }

}

export default Network;
