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
                            <li>Факультеты</li>
                            <li>Специальности</li>
                            <li>Кафедры</li>
                            <li>Абитуриент БГТУ</li>
                            <li>Система дистанционного обучения БГТУ</li>
                            <li>Почта университета</li>
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
                <hr></hr>
            </div>
        </div>
    )
}

export default Footer;