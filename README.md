# React server side rendering dengan express js v-3

_selastio fadli_

Proses ini akan memanfaatkan fitur react bernama **ReactDOMServer** dari package **react-dom** yang akan kita jalankan di sisi server express.

## Installasi

Silakan clone repo dan lakukan proses installasi

```bash
npm install
```

Terdapat 2 folder utama, **src** dan **server**, silakan edit react clientnya terlebih dahulu dan jalankan server client dengan cara
`npm run start`.

Server client berjalan di port 8080, silakan check browser di **http://localhost:8080**

## Build

Silakan jalankan build dengan cara
`npm run build`
dan Folder _build_ akan terbentuk. Ketika proses build berhasil, silakan lanjut ke proses server

## Jalankan di sisi server

Untul menjalankan di sisi server, silakan kita ketik
`npm run ssr`
dan silakan lihat browser pada port **5000**

> Client side http://localhost:8080
> Server side http://localhost:5000
