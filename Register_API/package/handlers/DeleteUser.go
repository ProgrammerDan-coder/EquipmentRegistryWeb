package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/ValentinePushkov/Register_API/package/models"
	"github.com/gorilla/mux"
)

func (h handler) DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])

	var user models.User

	if result := h.DB.First(&user, id); result.Error != nil {
		fmt.Println(result.Error)
	}

	h.DB.Delete(&user)

	w.Header().Add("Content-Type", "application-json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode("Deleted")
}
