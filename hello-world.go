package main

import (
	"net/http"
)

func main() {

	// route
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/contacto", concantHandler)

	// start server
	http.ListenAndServe(":3000", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world"))
}

func concantHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Pag Contac"))
}
