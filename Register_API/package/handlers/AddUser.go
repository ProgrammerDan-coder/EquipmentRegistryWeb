package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/ValentinePushkov/Register_API/package/models"
)

func (h handler) AddUser(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		log.Fatalln(r.Body)
	}

	var user models.User
	json.Unmarshal(body, &user)

	if result := h.DB.Create(&user); result.Error != nil {
		fmt.Println(result.Error)
	}
	w.WriteHeader(http.StatusCreated)
	w.Header().Add("Content-Type", "application-json")
	json.NewEncoder(w).Encode("Created")
}
