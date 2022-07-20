package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/ValentinePushkov/Register_API/package/models"
)

func (h handler) GetAllDepartments(w http.ResponseWriter, r *http.Request) {
	var departmetnts []models.Departments
	if result := h.DB.Find(&departmetnts); result.Error != nil {
		fmt.Println(result.Error)
	}
	w.Header().Add("Content-Type", "application-json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(departmetnts)

}
