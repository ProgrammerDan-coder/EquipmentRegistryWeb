package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/ValentinePushkov/Register_API/package/models"
	"github.com/gorilla/mux"
)

func (h handler) GetEquipmentByFaculty(w http.ResponseWriter, r *http.Request) {
	// Read dynamic id parameter
	vars := mux.Vars(r)
	userId, _ := strconv.Atoi(vars["facultyId"])

	// Find euqipment by faculty Id
	var equipment models.Equipments

	if result := h.DB.Where("\"faculty_id\" = ?", userId).Find(&equipment); result.Error != nil {
		fmt.Println(result.Error)
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(equipment)
}
