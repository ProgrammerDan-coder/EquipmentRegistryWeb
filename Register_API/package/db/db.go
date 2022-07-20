package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Init() *gorm.DB {
	dbURl := "postgres://urugqkqzcleuib:cb4ddfd9dc9369c58d189f42cc4f2e5306b7781bc04f2dfae84480c5fd746ee0@ec2-34-252-216-149.eu-west-1.compute.amazonaws.com:5432/dd0kq40v5j2j4s"

	db, err := gorm.Open(postgres.Open(dbURl), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})

	if err != nil {
		log.Fatalln(err)
	}
	//db.AutoMigrate(&models.User{}, &models.Departments{}, &models.Faculties{}, &models.Equipments{})
	return db
}
