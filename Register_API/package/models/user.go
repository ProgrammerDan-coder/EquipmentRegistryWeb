package models

type User struct {
	Id       uint   `json:"id"`
	Login    string `json:"login"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Role     string `json:"role"`
	Fullname string `json:"fullname"`
}
