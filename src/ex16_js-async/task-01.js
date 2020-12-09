const processRequest = (url, methodRequest = "GET", bodyRequest = null) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(methodRequest, url, true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status <= 299) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Ошибка соединения"));
    };

    xhr.send(bodyRequest);
  });
};

module.exports = processRequest;
