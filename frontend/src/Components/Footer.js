import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h5>Полезные ресурсы</h5>
                        <ul className="list-unstyled">
                            <li><a class="s1" href="https://www.belstu.by/faculties.html">Факультеты</a></li>
                            <li><a class="s1" href="https://www.belstu.by/universitet/divisions/uchebno-metodicheskoe-upravlenie/perechen-specialnostej.html">Специальности</a></li>
                            <li><a class="s1" href="https://www.belstu.by/faculties.html">Кафедры</a></li>
                            <li><a class="s1" href="https://abiturient.belstu.by/">Абитуриент БГТУ</a></li>
                            <li><a class="s1" href="https://dist.belstu.by/login/index.php">Система дистанционного обучения БГТУ</a></li>
                            <li><a class="s1" href="https://mail.belstu.by/mail/">Почта университета</a></li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                        <h5>Контакты</h5>
                        <ul className="list-unstyled">
                            <li>Адрес:</li>
                            <li>220006, г. Минск, ул. Свердлова, 13а</li>
                            <li>Тел./Факс.:</li> 
                            <li>(8-017) 399 33 89</li>
                        </ul>
                    </div>
                </div>
                <div class="helpful-links"><p class="title-helpful-links"> Официальные ссылки: &nbsp;
                <a class="s2" href="http://president.gov.by/">Интернет-портал Президента</a>  &nbsp;
                <a class="s2" href="http://pravo.by/">Правовой интернет-портал</a>  &nbsp;
                <a class="s2" href="https://edu.gov.by/">Интернет-портал Министерства образования</a> &nbsp;
                </p>
                </div>
                <div className="socialgroup">
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet"/>

    <a class="a"href="https://www.facebook.com/belstu.official/"><i class="fa fa-facebook"></i></a>
    <a  class="a" href="https://twitter.com/belstu_official"><i class="fa fa-twitter"></i></a>     
    <a  class="a" href="https://www.linkedin.com/school/belstu/"><i class="fa fa-linkedin"></i></a>    
    <a  class="a" href="https://www.instagram.com/belstu.official/"><i class="fa fa-instagram"></i></a> 
    <a  class="a" href="https://vk.com/belstu.official"><i class="fa fa-vk"></i></a>       

                </div>
            </div>
        </div>
    )
}

export default Footer;