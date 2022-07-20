package models

type Departments struct {
	Id        uint
	Name      string
	FacultyId uint
	Faculty   Faculties
}
