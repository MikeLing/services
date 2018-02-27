package main

import (
	"fmt"
	"github.com/gorilla/handlers"
	"github.com/skratchdot/open-golang/open"
	"github.com/skycoin/services/bitcoin-scanning-wallet/config"
	"github.com/skycoin/services/bitcoin-scanning-wallet/handler"
	"github.com/skycoin/services/bitcoin-scanning-wallet/scan"
	"net/http"
	"os"
)

func main() {

	config.LoadConfiguration("config.json")
	_, err := scan.NewBTCDClient(config.Config.BTCD.User, config.Config.BTCD.Pass)
	if err != nil {
		fmt.Printf("Can't connect btcd, error: ", err)
		os.Exit(1)
	} else {
		fmt.Println("Connect to btcd is established")
	}
	startServer()

}

func startServer() {

	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("./static/dist")))
	mux.Handle("/getaddrs", handler.AddressHandler)
	mux.Handle("/getaddr", handler.GetAddressHandler)
	mux.Handle("/newaddrs", handler.AddAddressHandler)
	mux.Handle("/scanrange", handler.DiapasonHandler)
	mux.Handle("/scanmin", handler.MinScanHandler)
	mux.Handle("/scanmax", handler.MaxScanHandler)
	mux.Handle("/scanfar", handler.FarScanHandler)
	mux.Handle("/scanshort", handler.ShortScanHandler)
	open.Run("http://localhost:7755/")
	http.ListenAndServe(":7755", handlers.CORS()(mux))

}
