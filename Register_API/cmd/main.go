package main

import (
	"log"
	"net/http"

	"github.com/ValentinePushkov/Register_API/package/db"
	"github.com/ValentinePushkov/Register_API/package/handlers"
	"github.com/gorilla/mux"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")                                                            // 允许访问所有域，可以换成具体url，注意仅具体url才能带cookie信息
			w.Header().Add("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token") //header的类型
			w.Header().Add("Access-Control-Allow-Credentials", "true")                                                    //设置为true，允许ajax异步请求带cookie信息
			w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")                             //允许请求方法
			w.Header().Set("content-type", "application/json;charset=UTF-8")                                              //返回数据格式是json
			if r.Method == "OPTIONS" {
					w.WriteHeader(http.StatusNoContent)
					return
			}
			next.ServeHTTP(w, r)
	})
}

func main() {
	
	DB := db.Init()
	h := handlers.New(DB)
	router := mux.NewRouter()
	router.Use(corsMiddleware)
	router.HandleFunc("/users", h.GetAllUsers).Methods(http.MethodGet)
	router.HandleFunc("/users", h.AddUser).Methods(http.MethodPost)
	router.HandleFunc("/users/{id}", h.DeleteUser).Methods(http.MethodDelete)

	router.HandleFunc("/faculties", h.GetAllFaculties).Methods(http.MethodGet)

	router.HandleFunc("/departments", h.GetAllDepartments).Methods(http.MethodGet)

	router.HandleFunc("/equipment", h.GetAllEquipment).Methods(http.MethodGet)
	router.HandleFunc("/equipment/{facultyId}", h.GetEquipmentByFaculty).Methods(http.MethodGet)

	log.Println("Api is running!")
	http.ListenAndServe(":4000", router)
}
