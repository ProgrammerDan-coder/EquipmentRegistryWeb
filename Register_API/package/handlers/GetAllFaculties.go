package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/ValentinePushkov/Register_API/package/models"
)

func (h handler) GetAllFaculties(w http.ResponseWriter, r *http.Request) {
	var faculties []models.Faculties
	if result := h.DB.Find(&faculties); result.Error != nil {
		fmt.Println(result.Error)
	}
	w.Header().Add("Content-Type", "application-json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(faculties)

}
