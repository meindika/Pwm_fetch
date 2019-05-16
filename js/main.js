/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

function logResult(result) { // fungsi untuk menampilkan variabel result
  console.log(result); // console akan menampilkan pada log dari result
}

function logError(error) { // fungsi jika terjadi kesalahan dan hasilnya error
  console.log('Looks like there was a problem:', error); // pesan akan ditampilkan di log console
}

function showImage(responseAsBlob) { // fungsi untuk menampilkan gambar dengan variabel responseAsBlob
  const container = document.getElementById('img-container');// container akan mengambil data dengan id img-container
  const imgElem = document.createElement('img'); // imgElem membuat element img
  container.appendChild(imgElem); // menambahkan imgElem kedalam container
  const imgUrl = URL.createObjectURL(responseAsBlob);// imgUrl membuat atua mengambil objek dari responseAsBlob
  imgElem.src = imgUrl; 
}
function showText(responseAsText) { // fungsi untuk menampilkan text dengan variabel responseAsText
  const message = document.getElementById('message');// constanta message mengambil data berdasarkan id message
  message.textContent = responseAsText;//menampilkan data sesuai responseAsText
}

function logSize(response) {
  const url = response.url;
  const size = response.headers.get('content-length');
  console.log(`${url} is ${size} bytes`);
}
// Fetch JSON ----------
function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function readResponseAsBlob(response) {
  return response.blob();
}

function readResponseAsText(response) {
  return response.text();
}


function	fetchJSON()	{ // fungsi untuk file JSON
	fetch('examples/animals.json')// lokasi fetch
    .then(validateResponse) // membaca validateResponse
    .then(readResponseAsJSON)// membaca data sebagai JSON
    .then(logResult)
    .catch(logError);//apabila terjadi error
}

const jsonButton = document.getElementById('json-btn');//mengambil element id dari json-btn untuk memproses button
jsonButton.addEventListener('click', fetchJSON);//setelah diclick maka akan menampilkan dari function fetchJSON


// Fetch Image ----------

function fetchImage() { // fungsi untuk menampilkan file image
  // TODO
  fetch('examples/fetching.jpg')//lokasi fetch
    .then(validateResponse)
    .then(readResponseAsBlob)//membaca data sesuai fungsi readResponseAsBlob
    .then(showImage)//menampilkan image sesuai variabel showImage
    .catch(logError);
  
}
const imgButton = document.getElementById('img-btn');// mengambil elemen id dari img-btn untuk memproses button 
imgButton.addEventListener('click', fetchImage);//setelah diclick maka akan menampilkan data dari function fetchImage


// Fetch text ----------

function fetchText() { //fungsi untuk menampilkan file text
  // TODO
  fetch('examples/words.txt') //lokasi fetch
    .then(validateResponse)
    .then(readResponseAsText)//membaca data sesuai fungsi readResponseAsText
    .then(showText)//menampilkan text sesuai variabel showText
    .catch(logError);
}
const textButton = document.getElementById('text-btn');
textButton.addEventListener('click', fetchText);

// Fetch text ----------

function fetchData() { //fungsi untuk menampilkan data
  // TODO
  fetch('http://jsonplaceholder.typicode.com/users') //lokasi fetch(url)
    .then(validateResponse)
    .then(readResponseAsText)// membaca data sesuai fungsi readResponseAsText
    .then(showText)
    .catch(logError);
}
const dataButton = document.getElementById('data-btn');
dataButton.addEventListener('click', fetchData);//setelah diclick amaka akan menampilkan data dari function fetchData

