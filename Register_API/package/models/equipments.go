package models

type Equipments struct {
	Id                  uint      `json:"id"`
	Name                string    `json:"name"`
	Photo               []byte    `json:"photo"`
	Cost                float32   `json:"cost"`
	YearOfProduction    int       `json:"yearOfProduction"`
	Definition          string    `json:"definition"`
	VerificationDetails string    `json:"verificationDetails"`
	Certificate         string    `json:"certificate"`
	FacultyId           uint      `json:"facultyId"`
	DepartmentId        uint      `json:"departmentId"`
	UserId              uint      `json:"userId"`
	Tag                 string    `json:"tag"`
	Faculty             Faculties `gorm:"foreignkey:FacultyId;references:Id"`
	User                User
	Department          Departments
}
